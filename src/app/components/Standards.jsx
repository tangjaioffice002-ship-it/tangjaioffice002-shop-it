"use client";

import { useState } from "react";
import { X, ZoomIn, CheckCircle2, Award } from "lucide-react"; // เพิ่มไอคอน Award
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Standards() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      title: "ISO 14001",
      subtitle: "มาตรฐานระบบบริหารคุณภาพ",
      desc: "การรับรองมาตรฐานระดับสากลด้านการจัดการสิ่งแวดล้อม แสดงถึงความรับผิดชอบต่อสังคมและโลก",
      image: "/img/1111.jpg",
    },
    {
      title: "ISO 9001",
      subtitle: "มาตรฐานบริหารงานคุณภาพ",
      desc: "ระบบบริหารงานคุณภาพระดับสากลที่ทั่วโลกให้การยอมรับ มุ่งเน้นความพึงพอใจของลูกค้า",
      image: "/img/1112.jpg",
    },
  ];

  return (
    <section
      id="standards"
      className={`${prompt.className} scroll-mt-24 py-16 md:py-24 bg-slate-50 relative overflow-hidden`}
      style={{ fontFamily: "'Prompt', 'Sarabun', sans-serif" }}
    >
      {/* --- Animated Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[400px] h-[400px] bg-emerald-100/60 rounded-full blur-3xl mix-blend-multiply animate-float-slow"></div>
        <div className="absolute top-[40%] -left-[10%] w-[350px] h-[350px] bg-teal-100/60 rounded-full blur-3xl mix-blend-multiply animate-float-medium"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* --- Header with Animation --- */}
        <div className="text-center mb-12 max-w-2xl mx-auto animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <CheckCircle2 size={14} />
            <span>World-Class Certified</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
            การรับรอง<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">มาตรฐานสากล</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            เครื่องหมายยืนยันคุณภาพและความมุ่งมั่นในการพัฒนาอย่างต่อเนื่อง เพื่อส่งมอบสิ่งที่ดีที่สุดให้กับลูกค้าและสังคม
          </p>
        </div>

        {/* --- Certificates Grid with Hover Effects --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100 cursor-pointer flex flex-col md:flex-row gap-6 items-center md:items-stretch hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: `${i * 150}ms` }} // Staggered animation
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image Frame with Zoom Effect */}
              <div className="relative w-full md:w-2/5 aspect-3/4 md:aspect-auto overflow-hidden rounded-xl bg-slate-100 shadow-sm group-hover:shadow-md transition-all">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn size={24} className="text-emerald-600" />
                  </div>
                </div>
                 {/* Badge */}
                 <div className="absolute top-3 left-3 bg-emerald-500 text-white p-1.5 rounded-lg shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    <Award size={16} />
                 </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-3/5 text-center md:text-left flex flex-col justify-center py-2">
                <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <h4 className="text-emerald-600 text-sm font-semibold uppercase tracking-wide mb-3 relative inline-block">
                  {item.subtitle}
                  <span className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-1/2 h-0.5 bg-emerald-200 rounded-full"></span>
                </h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 hidden md:block opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider flex items-center gap-1 group-hover:text-emerald-500 transition-colors">
                    <ZoomIn size={12} /> Click to view certificate
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Modal / Lightbox --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-slate-900/80 backdrop-blur-md animate-fadeIn p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-auto flex items-center justify-center">
            
            {/* Close Button */}
            <button
              className="absolute -top-5 -right-5 z-50 bg-white hover:bg-red-50 text-slate-800 hover:text-red-600 rounded-full p-2.5 shadow-lg transition-all border border-slate-200 hover:rotate-90 duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Image Container */}
            <div 
                className="bg-white p-1.5 rounded-xl border-2 border-yellow-400/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-scaleIn overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full certificate"
                className="max-w-full max-h-[70vh] object-contain rounded-lg block"
              />
            </div>

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10 pointer-events-none">
                Click outside to close
            </div>
          </div>
        </div>
      )}

      {/* --- CSS Animations --- */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-float-medium { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}