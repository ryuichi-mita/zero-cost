'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/markdown';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface EvidenceSectionProps {
  evidence1?: Article;
  evidence2: Article[];
}

export default function EvidenceSection({ evidence1, evidence2 }: EvidenceSectionProps) {
  if (!evidence1) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {evidence1.title}
        </h2>

        {evidence2.length > 0 && (
          <div className="w-full px-4">
            <Carousel
              opts={{
                align: 'center',
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {evidence2.map((article) => (
                  <CarouselItem key={article.slug} className="pl-4 md:basis-[60%] lg:basis-[55%]">
                    <div className="px-2">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden max-w-[600px] mx-auto">
                        <div className="flex flex-col md:flex-row md:h-[220px]">
                          {article.image && (
                            <div className="w-full md:w-[220px] flex-shrink-0 p-4">
                              <div className="relative w-full h-[180px] md:h-full">
                                <Image
                                  src={article.image}
                                  alt={article.image_alt || article.title}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          )}

                          <div className="flex-1 p-6 flex flex-col justify-between min-w-0">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                {article.title}
                              </h3>

                              <div
                                className="article-content text-gray-600 text-left text-sm leading-relaxed line-clamp-3"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                              />
                            </div>

                            <div className="flex justify-end mt-4">
                              <Link
                                href={`/articles/${article.slug}`}
                                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm"
                              >
                                詳しくはこちら
                                <svg
                                  className="w-4 h-4 ml-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
