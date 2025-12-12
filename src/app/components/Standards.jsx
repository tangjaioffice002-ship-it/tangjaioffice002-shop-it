"use client";

import { useState } from "react";
import { X, ZoomIn, CheckCircle2, Award } from "lucide-react";
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
      className={`${prompt.className} scroll-mt-24 py-24 relative overflow-hidden`}
      style={{
        fontFamily: "'Prompt', sans-serif",
        background: "linear-gradient(to bottom, #ffffff, #e8f7ef)",
      }}
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-[15%] -right-[10%] w-[450px] h-[450px] bg-emerald-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[15%] w-[380px] h-[380px] bg-teal-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <CheckCircle2 size={14} />
            <span>LEADERSHIP TEAM</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-snug mb-4">
            การรับรอง{" "}
            <span className="text-emerald-600 underline underline-offset-[10px] decoration-emerald-300 decoration-4">
              มาตรฐานสากล
            </span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto">
            เครื่องหมายยืนยันคุณภาพและความมุ่งมั่นในการพัฒนาอย่างต่อเนื่อง
            เพื่อส่งมอบสิ่งที่ดีที่สุดให้กับลูกค้าและสังคม
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(item.image)}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

                {/* Image Block */}
                <div className="relative w-full md:w-2/5 aspect-[3/4] overflow-hidden rounded-xl shadow-sm bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full shadow-md">
                      <ZoomIn size={22} className="text-emerald-600" />
                    </div>
                  </div>

                  {/* Award Badge */}
                  <div className="absolute top-3 left-3 bg-amber-500 text-white p-1.5 rounded-lg shadow">
                    <Award size={16} />
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-3/5 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-800 leading-tight mb-1 group-hover:text-emerald-600 transition">
                    {item.title}
                  </h3>

                  <h4 className="text-emerald-600 text-sm font-semibold tracking-wide mb-3">
                    {item.subtitle}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl mx-auto">
            <button
              className="absolute -top-5 -right-5 bg-white border border-slate-200 rounded-full p-2 shadow-lg hover:bg-red-50 hover:text-red-600 transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-2 rounded-xl border-2 border-amber-300 shadow-2xl"
            >
              <img
                src={selectedImage}
                alt="certificate"
                className="max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm">
              Click outside to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
