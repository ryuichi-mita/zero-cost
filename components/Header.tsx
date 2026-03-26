import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-[120px] w-auto">
            <Image
              src="/markeshiten.png"
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
          <Link href="/#services" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
            サービス
          </Link>
          <Link href="/#contact" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">
            お問い合わせ
          </Link>
        </nav>

        <button className="md:hidden p-2">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
