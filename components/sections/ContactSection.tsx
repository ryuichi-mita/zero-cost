import OnlineConsultationForm from '@/components/OnlineConsultationForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            無料オンライン相談
          </h2>
          <p className="text-center text-gray-600 mb-12">
            サービスに関するご質問やご相談は、お気軽にお問い合わせください。
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <OnlineConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
