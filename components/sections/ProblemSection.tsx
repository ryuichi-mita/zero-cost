import Image from 'next/image';
import { Article } from '@/lib/markdown';

interface ProblemSectionProps {
  problem1?: Article;
  problem2: Article[];
}

export default function ProblemSection({ problem1, problem2 }: ProblemSectionProps) {
  if (!problem1) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            {problem1.title}
          </h2>
          <div
            className="article-content text-lg text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: problem1.content }}
          />
        </div>

        {problem2.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problem2.map((article) => (
              <div
                key={article.slug}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {article.image && (
                  <div className="flex justify-center mb-6">
                    <div className="relative w-64 h-36">
                      <Image
                        src={article.image}
                        alt={article.image_alt || article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {article.title}
                </h3>

                <div
                  className="article-content text-gray-600 text-left"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
