import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import LogoSliderSection from '@/components/sections/LogoSliderSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import EvidenceSection from '@/components/sections/EvidenceSection';
import ProductSection from '@/components/sections/ProductSection';
import FlowSection from '@/components/sections/FlowSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import { getArticlesByLocation, Article } from '@/lib/markdown';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  hero1?: Article;
  hero2: Article[];
  hero3?: Article;
  logos: Article[];
  problem1?: Article;
  problem2: Article[];
  solution1?: Article;
  solution2: Article[];
  evidence1?: Article;
  evidence2: Article[];
  product1?: Article;
  product2: Article[];
}

export default function HomePage({
  hero1,
  hero2,
  hero3,
  logos,
  problem1,
  problem2,
  solution1,
  solution2,
  evidence1,
  evidence2,
  product1,
  product2,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>サービス名 - BtoBソリューション</title>
        <meta
          name="description"
          content="企業向けの最適なソリューションを提供します"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HeroSection hero1={hero1} hero2={hero2} hero3={hero3} />
        <LogoSliderSection logos={logos} />
        <ProblemSection problem1={problem1} problem2={problem2} />
        <SolutionSection solution1={solution1} solution2={solution2} />
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              お問い合わせください
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              お気軽にご相談ください。専任スタッフがご対応させていただきます。
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              無料相談する
            </Button>
          </div>
        </section>
        <EvidenceSection evidence1={evidence1} evidence2={evidence2} />
        <ProductSection product1={product1} product2={product2} />
        <FlowSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const hero1Articles = await getArticlesByLocation('hero1');
  const hero2Articles = await getArticlesByLocation('hero2');
  const hero3Articles = await getArticlesByLocation('hero3');
  const logoArticles = await getArticlesByLocation('logoslider');
  const problem1Articles = await getArticlesByLocation('problem1');
  const problem2Articles = await getArticlesByLocation('problem2');
  const solution1Articles = await getArticlesByLocation('solution1');
  const solution2Articles = await getArticlesByLocation('solution2');
  const evidence1Articles = await getArticlesByLocation('evidence1');
  const evidence2Articles = await getArticlesByLocation('evidence2');
  const product1Articles = await getArticlesByLocation('product1');
  const product2Articles = await getArticlesByLocation('product2');

  const sortByUpdatedDesc = (articles: Article[]) =>
    [...articles].sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());

  return {
    props: {
      hero1: hero1Articles[0] || null,
      hero2: hero2Articles,
      hero3: hero3Articles[0] || null,
      logos: logoArticles,
      problem1: problem1Articles[0] || null,
      problem2: sortByUpdatedDesc(problem2Articles),
      solution1: solution1Articles[0] || null,
      solution2: sortByUpdatedDesc(solution2Articles),
      evidence1: evidence1Articles[0] || null,
      evidence2: sortByUpdatedDesc(evidence2Articles),
      product1: product1Articles[0] || null,
      product2: sortByUpdatedDesc(product2Articles),
    },
  };
};
