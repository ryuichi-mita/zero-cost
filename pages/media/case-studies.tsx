import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import MediaHeader from '@/components/MediaHeader';
import Footer from '@/components/Footer';
import { getArticlesByCategory, Article } from '@/lib/markdown';

interface CaseStudiesPageProps {
  articles: Article[];
}

export default function CaseStudiesPage({ articles }: CaseStudiesPageProps) {
  return (
    <>
      <Head>
        <title>導入事例 - MarkeShiten</title>
        <meta name="description" content="MarkeShitenの導入事例をご紹介します。様々な業種・規模の企業での活用事例をお届けします。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MediaHeader />

      <main className="bg-gray-50 min-h-screen">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">導入事例</h1>
            <p className="text-gray-500 text-base">様々な企業での活用事例をご紹介します</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="group block">
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
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg">導入事例はまだありません。</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getArticlesByCategory('case-study');

  return {
    props: {
      articles,
    },
  };
};
