import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MediaHeader from '@/components/MediaHeader';
import Footer from '@/components/Footer';
import { getAllArticles, getArticleBySlug, Article } from '@/lib/markdown';

interface ArticlePageProps {
  article: Article;
}

export default function ArticlePage({ article }: ArticlePageProps) {
  const metaTitle = article.meta_title || article.title;
  const metaDescription = article.meta_description || '';
  const ogImage = article.image || '/default-og-image.jpg';

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        <meta property="og:title" content={article.og_title || article.title} />
        <meta property="og:description" content={article.og_description || metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />

        {article.keywords && (
          <meta name="keywords" content={article.keywords.join(', ')} />
        )}

        {article.article_schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: article.article_schema
            }}
          />
        )}

        {article.faq_schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: article.faq_schema
            }}
          />
        )}
      </Head>

      <MediaHeader />

      <main className="bg-white py-16">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {article.image && (
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-8 shadow-lg">
                <Image
                  src={article.image}
                  alt={article.image_alt || article.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                {article.category && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
                    {article.category}
                  </span>
                )}

                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('ja-JP')}
                </time>

                {article.updated !== article.date && (
                  <span>
                    更新: {new Date(article.updated).toLocaleDateString('ja-JP')}
                  </span>
                )}
              </div>
            </header>

            <div
              className="article-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles();
  const paths = articles.map(article => ({
    params: { slug: article.slug }
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getArticleBySlug(params?.slug as string);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: { article },
  };
};
