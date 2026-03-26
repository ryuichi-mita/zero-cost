import DocumentRequestForm from '@/components/DocumentRequestForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              資料を無料請求する
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              サービスの詳細資料をお送りします。お気軽にご請求ください。
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <DocumentRequestForm />
          </div>
        </div>
      </div>
    </section>
  );
}
