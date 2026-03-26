'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

interface OnlineConsultationFormProps {
  isEmbedded?: boolean;
}

export default function OnlineConsultationForm({ isEmbedded = false }: OnlineConsultationFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'contact',
          event_label: 'consultation',
          value: 1,
        });
      }

      sessionStorage.setItem('formSubmitted', 'consultation');
      sessionStorage.setItem('consultationData', JSON.stringify(formData));

      await router.push('/thank-you-2');
    } catch (error) {
      console.error('Error:', error);
      alert('送信に失敗しました。もう一度お試しください。');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-2xl mx-auto">
      <div>
        <label htmlFor={`company-${isEmbedded ? 'embedded' : 'main'}`} className="block text-sm font-medium text-gray-700 mb-1">
          会社名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`company-${isEmbedded ? 'embedded' : 'main'}`}
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor={`name-${isEmbedded ? 'embedded' : 'main'}`} className="block text-sm font-medium text-gray-700 mb-1">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`name-${isEmbedded ? 'embedded' : 'main'}`}
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor={`email-${isEmbedded ? 'embedded' : 'main'}`} className="block text-sm font-medium text-gray-700 mb-1">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id={`email-${isEmbedded ? 'embedded' : 'main'}`}
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor={`phone-${isEmbedded ? 'embedded' : 'main'}`} className="block text-sm font-medium text-gray-700 mb-1">
          電話番号 <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id={`phone-${isEmbedded ? 'embedded' : 'main'}`}
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor={`message-${isEmbedded ? 'embedded' : 'main'}`} className="block text-sm font-medium text-gray-700 mb-1">
          ご相談内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id={`message-${isEmbedded ? 'embedded' : 'main'}`}
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '送信中...' : '無料相談を申し込む'}
      </button>
    </form>
  );
}
