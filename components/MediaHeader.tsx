'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MediaHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/media" className="flex items-center space-x-2">
          <div className="relative h-[60px] w-auto">
            <Image
              src="/startdashWeb-Logo.webp"
              alt="MarkeShiten サービスロゴ"
              width={1400}
              height={360}
              priority
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/media" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
            ブログ
          </Link>
          <Link href="/media/case-studies" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
            導入事例
          </Link>
          <Link href="/media/seminars" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
            セミナー
          </Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="メニュー">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/media" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
              ブログ
            </Link>
            <Link href="/media/case-studies" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
              導入事例
            </Link>
            <Link href="/media/seminars" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
              セミナー
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
