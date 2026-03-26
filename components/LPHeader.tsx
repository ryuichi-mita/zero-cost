'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function LPHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-[120px] w-auto">
            <Image
              src="/zero-cost-logo.webp"
              alt="MarkeShiten サービスロゴ"
              width={1400}
              height={360}
              priority
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
            ホーム
          </Link>
          <Link href="/media/case-studies" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
            導入事例
          </Link>
          <Link href="/consultation" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
            料金
          </Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="メニュー">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
              ホーム
            </Link>
            <Link href="/media/case-studies" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
              導入事例
            </Link>
            <Link href="/consultation" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
              料金
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
