export default function FlowSection() {
  const steps = [
    {
      number: '1',
      label: 'オンボーディング',
      title: '基礎設定',
      description: '基本的な分析を実施するための設定や、チームの業務効率化の項目を一緒に設定します',
    },
    {
      number: '2',
      label: '設定勉強会',
      title: '発展的な設定',
      description: '弊社技術担当主催の設定勉強会。更に深い分析を行っていただくための設定をご案内します',
    },
    {
      number: '3',
      label: '活用勉強会',
      title: 'データの見方・活用法',
      description: 'データの読み解き方から改善方法の考え方まで実例を用いてご案内します',
    },
    {
      number: '4',
      label: '個社別活用法提案',
      title: '活用法のご案内',
      description: '専任のカスタマーサクセス担当が、新機能や更なる活用法をご案内します',
    },
  ];

  return (
    <section id="flow" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          導入の流れ
        </h2>

        <div className="max-w-7xl mx-auto">
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <li key={index} className="relative bg-gradient-to-r from-blue-50 to-cyan-50 p-6 pr-8 arrow-tag">
                <h3 className="mb-3">
                  <span className="inline-block bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded mr-2">
                    STEP {step.number}
                  </span>
                  <span className="text-[13px] text-gray-700">
                    {step.label}
                  </span>
                </h3>
                <h4 className="text-base font-bold text-gray-900 mb-2 mt-2">
                  {step.title}
                </h4>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style jsx>{`
        .arrow-tag {
          position: relative;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%);
        }

        @media (max-width: 1023px) {
          .arrow-tag {
            clip-path: none;
            border-radius: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
