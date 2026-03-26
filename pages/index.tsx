import Head from 'next/head';
import LPHeader from '@/components/LPHeader';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import FlowSection from '@/components/sections/FlowSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>MarkeShiten - BtoBマーケティング支援サービス</title>
        <meta
          name="description"
          content="施策の立案から実行・分析まで、貴社専任のチームが伴走。成果にコミットするBtoBマーケティング支援サービスです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LPHeader />

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FlowSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
