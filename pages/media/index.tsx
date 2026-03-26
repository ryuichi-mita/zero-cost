import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import MediaHeader from '@/components/MediaHeader';
import Footer from '@/components/Footer';
import { getAllArticles, Article } from '@/lib/markdown';

interface MediaTopProps {
  articles: Article[];
  featuredArticle?: Article;
}

export default function MediaTop({ articles, featuredArticle }: MediaTopProps) {
  const restArticles = featuredArticle
    ? articles.filter((a) => a.slug !== featuredArticle.slug)
    : articles;

  return (
    <>
      <Head>
        <title>ブログ - MarkeShiten</title>
        <meta name="description" content="MarkeShitenのオウンドメディア。最新の業界情報、導入事例、セミナー情報をお届けします。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MediaHeader />

      <main className="bg-gray-50 min-h-screen">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">ブログ</h1>
            <p className="text-gray-500 text-base">最新の業界情報・ノウハウをお届けします</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {featuredArticle && (
            <div className="mb-12">
              <h2 className="text-lg font-semibold text-gray-500 uppercase tracking-wide mb-6">注目記事</h2>
              <Link href={`/articles/${featuredArticle.slug}`} className="group block">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    {featuredArticle.image && (
                      <div className="md:w-1/2 relative aspect-video md:aspect-auto md:min-h-[320px]">
                        <Image
                          src={featuredArticle.image}
                          alt={featuredArticle.image_alt || featuredArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      </div>
                    )}
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      {featuredArticle.category && (
                        <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 w-fit">
                          {featuredArticle.category}
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                        {featuredArticle.title}
                      </h3>
                      <time className="text-sm text-gray-400" dateTime={featuredArticle.date}>
                        {new Date(featuredArticle.date).toLocaleDateString('ja-JP')}
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {restArticles.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-500 uppercase tracking-wide mb-6">最新記事</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          )}

          {articles.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg">記事がまだありません。</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        {article.image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={article.image}
              alt={article.image_alt || article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          {article.category && (
            <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 w-fit">
              {article.category}
            </span>
          )}
          <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 flex-1 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <time className="text-xs text-gray-400 mt-auto" dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('ja-JP')}
          </time>
        </div>
      </article>
    </Link>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllArticles();

  return {
    props: {
      articles: articles.slice(0, 13),
      featuredArticle: articles[0] || null,
    },
  };
};
