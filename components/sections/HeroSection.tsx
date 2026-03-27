'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [phase, setPhase] = useState<'idle' | 'text' | 'border'>('idle');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 100);
    const t2 = setTimeout(() => setPhase('border'), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="relative min-h-[680px] md:min-h-[780px] flex items-center overflow-hidden">
      {/* Background image with zoom-in */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          animation: 'heroZoom 8s ease-out forwards',
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/65 to-gray-900/30"
        aria-hidden="true"
      />

      {/* Border animation overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          boxShadow: phase === 'border'
            ? 'inset 0 0 0 8px rgba(59,130,246,0.55)'
            : 'inset 0 0 0 0px rgba(59,130,246,0)',
          transition: 'box-shadow 1.2s cubic-bezier(0.4,0,0.2,1)',
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div
          className="max-w-2xl"
          style={{
            opacity: phase === 'idle' ? 0 : 1,
            transform: phase === 'idle' ? 'translateX(-40px)' : 'translateX(0)',
            transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
          }}
        >
          {/* Eyebrow */}
          <p
            className="text-blue-300 font-semibold text-sm md:text-base tracking-widest mb-5"
            style={{
              opacity: phase === 'idle' ? 0 : 1,
              transform: phase === 'idle' ? 'translateX(-30px)' : 'translateX(0)',
              transition: 'opacity 0.8s ease-out 0.1s, transform 0.8s ease-out 0.1s',
            }}
          >
            開業したてで費用を抑えたいあなたへ
          </p>

          {/* Headline */}
          <h1
            className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-5"
            style={{
              opacity: phase === 'idle' ? 0 : 1,
              transform: phase === 'idle' ? 'translateX(-30px)' : 'translateX(0)',
              transition: 'opacity 0.85s ease-out 0.25s, transform 0.85s ease-out 0.25s',
            }}
          >
            最短3日・<span className="text-blue-400">5万円～</span>で
            <br className="hidden sm:block" />
            信用されるホームページを制作
          </h1>

          {/* Lead copy */}
          <p
            className="text-blue-100 text-base md:text-lg font-medium mb-6"
            style={{
              opacity: phase === 'idle' ? 0 : 1,
              transform: phase === 'idle' ? 'translateX(-30px)' : 'translateX(0)',
              transition: 'opacity 0.85s ease-out 0.4s, transform 0.85s ease-out 0.4s',
            }}
          >
            スモールビジネスの第一歩を、迅速・低コストで応援
          </p>

          {/* Body copy */}
          <ul
            className="space-y-2 mb-10"
            style={{
              opacity: phase === 'idle' ? 0 : 1,
              transform: phase === 'idle' ? 'translateX(-30px)' : 'translateX(0)',
              transition: 'opacity 0.85s ease-out 0.55s, transform 0.85s ease-out 0.55s',
            }}
          >
            {[
              '開業初期に特化したシンプルプラン',
              '納期3日・制作費5万円～で圧倒的スピード',
              '追加費用なしでランニングコストゼロ',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-200 text-sm md:text-base">
                <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8" aria-hidden="true">
                    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: phase === 'idle' ? 0 : 1,
              transform: phase === 'idle' ? 'translateX(-30px)' : 'translateX(0)',
              transition: 'opacity 0.85s ease-out 0.7s, transform 0.85s ease-out 0.7s',
            }}
          >
            <Link
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg text-base text-center transition-colors duration-200 shadow-lg"
            >
              資料を無料請求する
            </Link>
            <Link
              href="/consultation"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/40 font-semibold px-8 py-4 rounded-lg text-base text-center transition-colors duration-200 backdrop-blur-sm"
            >
              無料オンライン相談
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroZoom {
          from { transform: scale(1.12); }
          to   { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
