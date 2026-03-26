import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">株式会社サンプル</h3>
            <p className="text-sm mb-2">
              〒100-0001<br />
              東京都千代田区千代田1-1-1<br />
              サンプルビル 5F
            </p>
            <p className="text-sm">
              TEL: 03-1234-5678<br />
              FAX: 03-1234-5679<br />
              E-mail: info@example.com
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  サービス一覧
                </Link>
              </li>
              <li>
                <Link href="/#flow" className="hover:text-white transition-colors">
                  導入の流れ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">会社情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2025 株式会社サンプル. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
