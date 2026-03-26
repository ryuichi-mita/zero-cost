import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30" aria-hidden="true" />

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-blue-300 font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
            BtoBマーケティング支援
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            マーケティングの
            <br />
            課題を、
            <span className="text-blue-400">一気通貫</span>で
            <br />
            解決します。
          </h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            施策の立案から実行・分析まで、貴社専任のチームが伴走。
            成果にコミットするBtoBマーケティング支援サービスです。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-base text-center transition-colors duration-200 shadow-lg"
            >
              資料を無料請求する
            </Link>
            <Link
              href="/consultation"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/40 font-semibold px-8 py-4 rounded-lg text-base text-center transition-colors duration-200 backdrop-blur-sm"
            >
              無料オンライン相談
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
