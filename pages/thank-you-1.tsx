import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import LPHeader from '@/components/LPHeader';
import Footer from '@/components/Footer';
import OnlineConsultationForm from '@/components/OnlineConsultationForm';

export default function ThankYou1() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const formSubmitted = sessionStorage.getItem('formSubmitted');
    if (formSubmitted === 'document-request') {
      setIsAuthorized(true);
      sessionStorage.removeItem('formSubmitted');
    } else {
      router.push('/');
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return (
    <>
      <Head>
        <title>資料請求ありがとうございます</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <LPHeader />

        <main className="flex-grow">
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      資料請求ありがとうございます
                    </h1>
                    <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                      <p>
                        ご入力いただいたメールアドレス宛に、資料のご案内をお送りします。
                      </p>
                      <p>
                        数分たっても届かない場合は、迷惑メールフォルダをご確認ください。
                        それでも見当たらない場合は、お手数ですが下記までご連絡ください。
                      </p>
                      <p className="font-semibold text-blue-600">
                        お問い合わせ: info@example.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      次ステップ
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
                      無料オンライン相談のご案内
                    </h3>
                    <p className="text-gray-600 mb-8">
                      さらに詳しい情報が必要な方は、無料オンライン相談をご利用ください。
                    </p>
                  </div>

                  <OnlineConsultationForm isEmbedded={true} />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
