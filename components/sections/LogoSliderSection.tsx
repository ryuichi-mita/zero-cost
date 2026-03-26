import Image from 'next/image';
import { Article } from '@/lib/markdown';

interface LogoSliderSectionProps {
  logos: Article[];
}

export default function LogoSliderSection({ logos }: LogoSliderSectionProps) {
  if (logos.length === 0) return null;

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            logo.image && (
              <div
                key={`${logo.slug}-${index}`}
                className="flex-shrink-0 mx-4 md:mx-8 w-[80px] h-[40px] md:w-[300px] md:h-[100px]"
              >
                <Image
                  src={logo.image}
                  alt={logo.image_alt || logo.title}
                  width={300}
                  height={100}
                  className="object-contain transition-all duration-300 w-full h-full"
                />
              </div>
            )
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
          @media (min-width: 768px) {
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
