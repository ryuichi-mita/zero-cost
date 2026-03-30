'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);
  const [borderVisible, setBorderVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setTextVisible(true), 100);
    const t2 = setTimeout(() => setBorderVisible(true), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="relative min-h-[680px] md:min-h-[780px] flex items-center overflow-hidden">
      {/* Background image zoom-in: scale(0.8) → scale(1) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          animation: 'heroZoomIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/25"
        aria-hidden="true"
      />

      {/* Border strokes — 4 edges drawn independently */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* top: right-aligned, grows left-to-right from right edge */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: 0,
            borderTop: '3px solid rgba(29,78,216,0.5)',
            opacity: borderVisible ? 1 : 0,
            width: borderVisible ? 'calc(100% - 20px)' : 0,
            animation: borderVisible
              ? 'strokeWidth 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
              : 'none',
          }}
        />
        {/* bottom: left-aligned, grows right-to-left from left edge */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 0,
            borderBottom: '3px solid rgba(29,78,216,0.5)',
            opacity: borderVisible ? 1 : 0,
            width: borderVisible ? 'calc(100% - 20px)' : 0,
            animation: borderVisible
              ? 'strokeWidth 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
              : 'none',
          }}
        />
        {/* right: top-aligned, grows top-to-bottom */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 0,
            borderRight: '3px solid rgba(29,78,216,0.5)',
            opacity: borderVisible ? 1 : 0,
            height: borderVisible ? 'calc(100% - 20px)' : 0,
            animation: borderVisible
              ? 'strokeHeight 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
              : 'none',
          }}
        />
        {/* left: bottom-aligned, grows bottom-to-top */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 0,
            borderLeft: '3px solid rgba(29,78,216,0.5)',
            opacity: borderVisible ? 1 : 0,
            height: borderVisible ? 'calc(100% - 20px)' : 0,
            animation: borderVisible
              ? 'strokeHeight 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
              : 'none',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="text-base md:text-2xl font-semibold tracking-wide mb-4"
            style={{
              color: '#1e3a5f',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.8s ease-out 0.1s, transform 0.8s ease-out 0.1s',
            }}
          >
            開業初期の負担を劇的に減らす
          </p>

          {/* Headline */}
          <h1
            className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-5"
            style={{
              color: '#111827',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.85s ease-out 0.25s, transform 0.85s ease-out 0.25s',
            }}
          >
            <span className="md:hidden">
              <span className="block">月額無料＆地域名・業種</span>
              <span className="block">での検索に強い</span>
              <span className="block" style={{ color: '#1d4ed8' }}>ホームページを格安制作</span>
            </span>
            <span className="hidden md:inline">
              <span className="whitespace-nowrap">月額無料＆地域名・業種での検索に強い</span><br />
              <span style={{ color: '#1d4ed8' }}>ホームページを格安制作</span>
            </span>
          </h1>

          {/* Lead copy */}
          <p
            className="text-base md:text-xl font-medium mb-6"
            style={{
              color: '#1f2937',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.85s ease-out 0.4s, transform 0.85s ease-out 0.4s',
            }}
          >
            起業家に必須のホームページを<wbr />素早く作成
          </p>

          {/* Body copy */}
          <ul
            className="space-y-2 mb-10"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.85s ease-out 0.55s, transform 0.85s ease-out 0.55s',
            }}
          >
            {[
              '初期の負担が最小限の月額無料プランで',
              '地域名・業種での検索に強いローカルSEO',
              '初期の費用対効果が高い運用サポート体制',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-base md:text-lg" style={{ color: '#374151' }}>
                <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
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
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateX(0)' : 'translateX(-36px)',
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
              className="inline-block bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white border-2 border-blue-700 font-semibold px-8 py-4 rounded-lg text-base text-center transition-colors duration-200 shadow-md"
            >
              無料オンライン相談
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroZoomIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes strokeWidth {
          0% {
            width: 0;
            opacity: 1;
          }
          100% {
            width: calc(100% - 20px);
            opacity: 1;
          }
        }

        @keyframes strokeHeight {
          0% {
            height: 0;
            opacity: 1;
          }
          100% {
            height: calc(100% - 20px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
