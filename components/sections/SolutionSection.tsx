'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Article } from '@/lib/markdown';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, MousePointerClick } from 'lucide-react';

interface SolutionSectionProps {
  solution1?: Article;
  solution2: Article[];
}

export default function SolutionSection({ solution1, solution2 }: SolutionSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  if (!solution1) return null;

  const getGridLayout = (articles: Article[]) => {
    const count = articles.length;
    const rows: Article[][] = [];

    if (count <= 3) {
      rows.push(articles);
    } else {
      let remaining = [...articles];
      while (remaining.length > 0) {
        if (remaining.length >= 3) {
          rows.push(remaining.slice(0, 3));
          remaining = remaining.slice(3);
        } else {
          rows.push(remaining);
          remaining = [];
        }
      }
    }

    return rows;
  };

  const rows = getGridLayout(solution2);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: '#033688' }}>
              {solution1.title}
            </h2>
            <div
              className="article-content text-lg text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: solution1.content }}
            />
          </div>

          {solution2.length > 0 && (
            <div className="space-y-8 max-w-6xl mx-auto">
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid gap-8 ${
                    row.length === 3
                      ? 'grid-cols-1 md:grid-cols-3'
                      : row.length === 2
                      ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
                      : 'grid-cols-1 max-w-sm mx-auto'
                  }`}
                >
                  {row.map((article) => (
                    <div
                      key={article.slug}
                      onClick={() => setSelectedArticle(article)}
                      className="relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    >
                      <div className="absolute top-2 right-2 z-10 bg-blue-600 text-white rounded-full p-1.5 shadow-md opacity-80 group-hover:opacity-100 pointer-events-none">
                        <MousePointerClick size={14} />
                      </div>
                      {article.image && (
                        <div className="flex justify-center pt-2">
                          <div className="relative w-64 h-36">
                            <Image
                              src={article.image}
                              alt={article.image_alt || article.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                        </div>
                      )}

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 text-center">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">
                  {selectedArticle.title}
                </DialogTitle>
              </DialogHeader>

              {selectedArticle.image && (
                <div className="relative w-full aspect-[4/3] mb-6">
                  <Image
                    src={selectedArticle.image}
                    alt={selectedArticle.image_alt || selectedArticle.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}

              <div
                className="article-content text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
