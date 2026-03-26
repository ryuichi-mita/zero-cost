import DocumentRequestForm from '@/components/DocumentRequestForm';
import { Article } from '@/lib/markdown';

interface ContactSectionProps {
  hero3?: Article;
}

export default function ContactSection({ hero3 }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            資料請求
          </h2>
          <p className="text-center text-gray-600 mb-12">
            サービスに関する資料をご請求いただけます。お気軽にお申し込みください。
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <DocumentRequestForm
              docTitle={hero3?.title}
              docContent={hero3?.content}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
