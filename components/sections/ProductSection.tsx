import Link from 'next/link';

const plans = [
  {
    name: 'ライトプラン',
    price: '150,000',
    description: '小規模なBtoB企業向け。コアとなる施策に集中し、低コストで成果を目指します。',
    features: [
      'マーケティング戦略策定',
      'SEO／コンテンツ施策',
      '月次レポーティング',
      '月2回定例MTG',
    ],
    highlight: false,
  },
  {
    name: 'スタンダードプラン',
    price: '300,000',
    description: '中堅BtoB企業向け。複数チャネルを横断した統合的なマーケティング施策を実行します。',
    features: [
      'ライトプランの全内容',
      '広告運用（リスティング／SNS）',
      'ホワイトペーパー制作',
      'ウェビナー企画・運営',
      '週次進捗確認MTG',
    ],
    highlight: true,
  },
  {
    name: 'エンタープライズプラン',
    price: 'お見積もり',
    description: '大規模組織向け。専任チームをフルアサインし、あらゆるマーケティング課題に対応します。',
    features: [
      'スタンダードプランの全内容',
      '営業支援ツール連携（SFA／MA）',
      'ABMへの対応',
      'カスタマイズ対応',
      '専任PM配置',
    ],
    highlight: false,
  },
];

export default function ProductSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
            料金プラン
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            貴社のフェーズやご予算に合わせて最適なプランをご提案します。詳しくはお気軽にご相談ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-blue-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 shadow-sm border border-gray-100'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                  人気 No.1
                </span>
              )}
              <h3 className={`text-lg font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                {plan.price === 'お見積もり' ? (
                  <span className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                ) : (
                  <span>
                    <span className={`text-3xl font-black ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      ¥{plan.price}
                    </span>
                    <span className={`text-sm ml-1 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                      /月〜
                    </span>
                  </span>
                )}
              </div>
              <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`text-sm flex items-start gap-2 ${plan.highlight ? 'text-white' : 'text-gray-700'}`}>
                    <span className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-blue-200' : 'text-blue-500'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/consultation"
                className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                無料相談する
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          ※ 表示価格はすべて税抜きです。詳細はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
