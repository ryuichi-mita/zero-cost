import { CircleAlert as AlertCircle } from 'lucide-react';

const problems = [
  {
    title: '施策がバラバラで成果が出ない',
    description:
      '広告・SEO・SNSなど複数の施策を個別に運用しているため、一貫したメッセージを届けられずリードが獲得できていない。',
  },
  {
    title: 'リソース不足で手が回らない',
    description:
      '社内にマーケティング専任担当がいないため、継続的な施策の実行・改善ができず、競合他社に差をつけられてしまっている。',
  },
  {
    title: '成果の見える化ができていない',
    description:
      '広告費やコンテンツ制作のコストに対して、どの施策が売上に貢献しているのか分からず、投資対効果が不透明なまま。',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Problem</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
            こんな課題、抱えていませんか？
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            多くのBtoB企業が、マーケティングに関して同じ壁にぶつかっています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mb-5">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
