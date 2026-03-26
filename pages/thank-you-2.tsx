import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import LPHeader from '@/components/LPHeader';
import Footer from '@/components/Footer';

export default function ThankYou2() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const formSubmitted = sessionStorage.getItem('formSubmitted');
    if (formSubmitted === 'consultation') {
      setIsAuthorized(true);
      sessionStorage.removeItem('formSubmitted');
      sessionStorage.removeItem('documentRequestData');
      sessionStorage.removeItem('consultationData');
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
        <title>お申込ありがとうございます</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <LPHeader />

        <main className="flex-grow">
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    お申込を承りました
                  </h1>

                  <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                    <p>
                      担当者より折り返しご連絡いたします。
                    </p>
                    <p>
                      今しばらくお待ちいただけますと幸いです。
                    </p>
                  </div>

                  <div className="mt-12">
                    <a
                      href="/"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                    >
                      トップページへ戻る
                    </a>
                  </div>
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
