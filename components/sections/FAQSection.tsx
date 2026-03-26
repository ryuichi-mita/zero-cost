import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: '導入にはどのくらいの期間がかかりますか？',
      answer: '基本的な設定であれば、お申し込みから1週間程度で導入が完了します。お客様の環境や要件に応じて、より詳細な設定が必要な場合は、2〜3週間ほどお時間をいただく場合がございます。',
    },
    {
      question: '料金体系について教えてください',
      answer: 'お客様のご利用規模やニーズに応じて、複数のプランをご用意しております。詳細な料金については、お問い合わせフォームよりご連絡いただければ、担当者より最適なプランをご提案させていただきます。',
    },
    {
      question: 'サポート体制はどのようになっていますか？',
      answer: '専任のカスタマーサクセス担当が、導入から運用まで一貫してサポートいたします。また、メールやチャットでのお問い合わせにも対応しており、平日9:00〜18:00の間にご連絡をいただければ、迅速に対応させていただきます。',
    },
    {
      question: '無料トライアルはありますか？',
      answer: 'はい、14日間の無料トライアルをご用意しております。トライアル期間中は、全ての機能をお試しいただけます。お申し込みは、お問い合わせフォームよりご連絡ください。',
    },
    {
      question: '既存のシステムとの連携は可能ですか？',
      answer: '多くの主要なシステムとの連携が可能です。API連携やデータインポート機能により、既存のシステムとスムーズに統合できます。具体的な連携方法については、個別にご相談ください。',
    },
    {
      question: 'セキュリティ対策はどのようになっていますか？',
      answer: 'データの暗号化、定期的なバックアップ、アクセス制御など、業界標準のセキュリティ対策を実施しております。また、ISO27001の認証を取得しており、お客様のデータを安全に管理しています。',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          よくある質問
        </h2>
        <p className="text-center text-gray-600 mb-12">
          お客様からよくいただくご質問をまとめました
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-5">
                  <span className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">Q</span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 pl-8">
                  <span className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">A</span>
                    <span>{faq.answer}</span>
                  </span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
