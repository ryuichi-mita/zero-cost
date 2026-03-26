'use client';

import Image from 'next/image';
import { Article } from '@/lib/markdown';

interface HeroSectionProps {
  hero1?: Article;
  hero2: Article[];
  hero3?: Article;
}

export default function HeroSection({ hero1, hero2 }: HeroSectionProps) {
  if (!hero1) return null;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {hero1.title}
          </h1>

          {hero1.image && (
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src={hero1.image}
                alt={hero1.image_alt || hero1.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {hero1.content && (
            <div
              className="article-content text-base md:text-lg text-gray-700 leading-relaxed text-left"
              dangerouslySetInnerHTML={{ __html: hero1.content }}
            />
          )}
        </div>

        {hero2.length > 0 && (
          <div className="mt-16 grid grid-cols-3 md:flex md:justify-center md:items-center gap-4 md:gap-12 px-4 md:px-8">
            {hero2.map((article) => (
              article.image && (
                <div key={article.slug} className="relative w-full h-[60px] md:w-[240px] md:h-[120px]">
                  <Image
                    src={article.image}
                    alt={article.image_alt || article.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
