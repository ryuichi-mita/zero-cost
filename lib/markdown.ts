import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface LinkPreview {
  id: string;
  url: string;
  title: string;
  description?: string;
  image?: string;
  site_name?: string;
}

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  status: string;
  date: string;
  updated: string;
  category?: string;
  category_slug?: string;
  display_locations?: Array<{
    name: string;
    slug: string;
  }>;
  image?: string;
  image_alt?: string;
  images?: Array<{
    url: string;
    alt?: string;
  }>;
  meta_title?: string;
  meta_description?: string;
  og_title?: string;
  og_description?: string;
  keywords?: string[];
  article_schema?: string;
  howto_schema?: string;
  faq_schema?: string;
  link_previews?: LinkPreview[];
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

export async function getAllArticles(): Promise<Article[]> {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  const articles = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const slug = file.replace(/\.md$/, '');
        return await getArticleBySlug(slug);
      })
  );

  return articles
    .filter((article): article is Article => article !== null)
    .filter(article => article.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = data as ArticleFrontmatter;

    // Process markdown to HTML with sanitize disabled to allow HTML tags
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);
    let contentHtml = processedContent.toString();

    // Replace link preview placeholders with actual HTML
    contentHtml = replaceLinkPreviews(contentHtml, frontmatter.link_previews);

    return {
      ...frontmatter,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter(article => article.category_slug === categorySlug);
}

export async function getArticlesByLocation(locationSlug: string): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter(article =>
    article.display_locations?.some(loc => loc.slug === locationSlug)
  );
}

export async function getCategories(): Promise<Array<{ name: string; slug: string; count: number }>> {
  const articles = await getAllArticles();
  const categoryMap = new Map<string, { name: string; count: number }>();

  articles.forEach(article => {
    if (article.category && article.category_slug) {
      const existing = categoryMap.get(article.category_slug);
      if (existing) {
        existing.count++;
      } else {
        categoryMap.set(article.category_slug, {
          name: article.category,
          count: 1,
        });
      }
    }
  });

  return Array.from(categoryMap.entries()).map(([slug, data]) => ({
    slug,
    name: data.name,
    count: data.count,
  }));
}

export function parseStructuredData(schemaString: string | undefined): object | null {
  if (!schemaString) return null;
  try {
    return JSON.parse(schemaString);
  } catch (error) {
    console.error('Error parsing structured data:', error);
    return null;
  }
}

export function replaceLinkPreviews(content: string, linkPreviews?: LinkPreview[]): string {
  if (!linkPreviews || linkPreviews.length === 0) return content;

  let result = content;

  linkPreviews.forEach(preview => {
    const pattern = `[link-preview:${preview.id}]`;
    const html = generateLinkPreviewHTML(preview);
    result = result.replace(new RegExp(pattern, 'g'), html);
  });

  return result;
}

function generateLinkPreviewHTML(preview: LinkPreview): string {
  const hostname = new URL(preview.url).hostname.replace('www.', '');
  const siteName = preview.site_name || hostname;

  return `
    <div class="link-preview-card">
      <a href="${preview.url}" target="_blank" rel="noopener noreferrer">
        ${preview.image ? `
          <div class="link-preview-image">
            <img src="${preview.image}" alt="${preview.title}" />
          </div>
        ` : ''}
        <div class="link-preview-content">
          <div class="link-preview-site">${siteName}</div>
          <h3 class="link-preview-title">${preview.title}</h3>
          ${preview.description ? `
            <p class="link-preview-description">${preview.description}</p>
          ` : ''}
        </div>
      </a>
    </div>
  `.trim();
}
