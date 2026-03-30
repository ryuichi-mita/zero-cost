import { Wallet, CircleHelp as HelpCircle, MapPin, ChevronDown } from 'lucide-react';

const problems = [
  {
    icon: Wallet,
    title: '費用をかけたくない',
    description: '開業したばかりで、ホームページ制作や広告にかけられる費用が少ない',
  },
  {
    icon: HelpCircle,
    title: '集客方法が分からない',
    description: 'インターネットでの集客の具体的な方法や効果的な手段が分からない',
  },
  {
    icon: MapPin,
    title: '地域で見つけてほしい',
    description: '地元のお客様に知ってもらい、来店・利用に繋げたい',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-blue-600 font-semibold text-base tracking-wide mb-4">
            ホームページ制作でお悩みはありませんか？
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            <span className="md:hidden">
              <span className="block">開業初期の資金と</span>
              <span className="block">集客の不安を解決します</span>
            </span>
            <span className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
              開業初期の資金と集客の<br />不安を解決します
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mb-5">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center mt-12 gap-4">
          <ChevronDown className="w-8 h-8 text-blue-400 animate-bounce" />
          <p className="text-center text-gray-700 font-semibold text-sm md:text-lg max-w-xl leading-relaxed">
            月額無料＋地域名・業種検索に強いホームページで、<br />開業初期のビジネスを支えます
          </p>
        </div>
      </div>
    </section>
  );
}
