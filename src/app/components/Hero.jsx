"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 1. Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 2. Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
        bg-white/10 backdrop-blur-sm border border-white/20 
        text-emerald-300 text-sm font-semibold tracking-wide mb-7">
          <svg
            className="w-4 h-4 animate-pulse"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          ครบจบทุกครุภัณฑ์การศึกษา
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.2] 
        text-white mb-6 drop-shadow-xl">
          TANGJAI —{" "}
          <span className="text-emerald-400 font-extrabold">
            ครุภัณฑ์การศึกษาคุณภาพ
          </span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-200 
        max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          TANGJAI ก่อตั้งโดยทีมงานผู้เชี่ยวชาญด้านการศึกษาและงานติดตั้ง
          เรามุ่งส่งมอบอุปกรณ์ที่ได้มาตรฐาน ใช้งานได้จริง
          พร้อมบริการหลังการขายที่เชื่อถือได้
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#products"
            className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 
            text-white font-semibold shadow-lg hover:shadow-emerald-500/30 
            transition transform hover:-translate-y-1 text-base tracking-wide"
          >
            ดูสินค้าของเรา
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full border-2 border-white text-white 
            font-semibold hover:bg-white hover:text-emerald-900 transition 
            transform hover:-translate-y-1 text-base tracking-wide"
          >
            ขอใบเสนอราคา
          </a>
        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg 
          text-center transform hover:scale-105 transition duration-300">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
              มาตรฐาน
            </p>
            <p className="font-bold text-gray-900 text-lg mt-1">
              ISO 9001
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg 
          text-center transform hover:scale-105 transition duration-300">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
              ลูกค้าหลัก
            </p>
            <p className="font-bold text-gray-900 text-lg mt-1">
              โรงเรียนรัฐบาล
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg 
          text-center transform hover:scale-105 transition duration-300">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
              บริการ
            </p>
            <p className="font-bold text-gray-900 text-lg mt-1">
              ติดตั้งครบวงจร
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
