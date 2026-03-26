import Image from 'next/image';
import { Article } from '@/lib/markdown';

interface ProductSectionProps {
  product1?: Article;
  product2: Article[];
}

export default function ProductSection({ product1, product2 }: ProductSectionProps) {
  if (!product1) return null;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            {product1.title}
          </h2>
          <div
            className="article-content text-lg text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product1.content }}
          />
        </div>

        {product2.length > 0 && (
          <div className="max-w-6xl mx-auto space-y-16">
            {product2.map((article, index) => (
              <div
                key={article.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                  {article.image && (
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={article.image}
                        alt={article.image_alt || article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    {article.title}
                  </h3>
                  <div
                    className="article-content text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
