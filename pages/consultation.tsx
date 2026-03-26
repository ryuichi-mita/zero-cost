import Head from 'next/head';
import LPHeader from '@/components/LPHeader';
import Footer from '@/components/Footer';
import OnlineConsultationForm from '@/components/OnlineConsultationForm';

export default function ConsultationPage() {
  return (
    <>
      <Head>
        <title>無料オンライン相談 - MarkeShiten</title>
        <meta
          name="description"
          content="貴社のご状況やご予算をヒアリングし、最適なプランをご提案させていただきます。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <LPHeader />

      <main className="bg-gray-50 min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                無料オンライン相談
              </h1>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                弊社サービスにご興味をお持ちいただき、ありがとうございます。<br />
                貴社のご状況やご予算をヒアリングし、最適なプランをご提案させていただいております。つきましては下記フォームよりお問い合わせください。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <OnlineConsultationForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
