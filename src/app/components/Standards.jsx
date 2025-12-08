"use client";

import { useState } from "react";
import { X, ZoomIn, CheckCircle2 } from "lucide-react";
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
      desc: "การรับรองมาตรฐานระดับสากลด้านการจัดการ",
      image: "/img/1111.jpg",
    },
    {
      title: "ISO 9001",
      subtitle: "มาตรฐานด้านสิ่งแวดล้อม",
      desc: "ความใส่ใจและรับผิดชอบต่อสิ่งแวดล้อมอย่างยั่งยืน",
      image: "/img/1112.jpg",
    },
  ];

  return (
    <section
      id="standards"
      className={`${prompt.className} scroll-mt-24 py-12 bg-slate-50 relative overflow-hidden`}
      style={{ fontFamily: "'Prompt', 'Sarabun', sans-serif" }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[350px] h-[350px] bg-emerald-100 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-[40%] -left-[10%] w-[300px] h-[300px] bg-teal-100 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-3">
            <CheckCircle2 size={13} />
            <span>Certified Standards</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 tracking-tight">
            การรับรองมาตรฐานสากล
          </h2>
          <p className="text-slate-500 text-sm font-light">
            เครื่องหมายยืนยันคุณภาพและความมุ่งมั่นในการพัฒนาอย่างต่อเนื่องของเรา
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 cursor-pointer flex flex-col md:flex-row gap-4 items-center"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image Frame */}
              <div className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm text-white border border-white/30">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-emerald-600 text-sm font-medium mb-2">
                  {item.subtitle}
                </h4>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 hidden md:block">
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    Click to view certificate
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 animate-fadeIn p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full h-auto flex items-center justify-center">

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 z-50 bg-white/70 hover:bg-white text-slate-900 rounded-full p-2 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>

            {/* Very Thin Light Gold Border (ติดขอบภาพเลย) */}
            <div className="rounded-lg border-[2px] border-yellow-300">
              <img
                src={selectedImage}
                alt="Full certificate"
                className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </section>
  );
}
