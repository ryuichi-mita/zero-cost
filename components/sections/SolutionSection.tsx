import { CircleCheck as CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    number: '01',
    title: '開業初期の資金負担を最小限に',
    description:
      '最新の技術で公開するからサーバーが必要ありません。月額無用～ご利用いただけるのでスモールスタートしたい事業主様にピッタリ。',
    points: ['相場より安価な制作費', 'ランニングコストが０', 'サーバー費用もなし'],
  },
  {
    number: '02',
    title: '専門的な技術力で集客をサポート',
    description:
      'コード生成AIを活用し、地域名・業種で上位検索が狙えるような構成で美しいコーディングを行います。AI検索にも強くなるようスキーマを生成します。',
    points: ['ローカルSEOの設定', 'GEOに強いスキーマ構造', '美しいコーディング'],
  },
  {
    number: '03',
    title: '専任チームによる伴走サポート',
    description:
      'ディレクター・デザイナー・ライター・エンジニアが一体となり、貴社のビジネス成長をサポート。対話を重ねながら、最適な施策を柔軟に実行します。',
    points: ['専任プロジェクトマネージャー配置', '定例MTGによる密なコミュニケーション', '柔軟なプラン変更対応'],
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">スタートダッシュWebが選ばれる理由</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
            費用対効果の高い集客を実現
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            戦略・実行・分析をワンチームで担うことで、<wbr />スピーディーかつ一貫した成果を提供します。
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <span className="text-5xl font-black text-blue-500 select-none">{solution.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-5">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-900">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
