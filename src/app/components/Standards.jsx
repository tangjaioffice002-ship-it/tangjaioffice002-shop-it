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
      className={`${prompt.className} scroll-mt-24 py-4 md:py-4 relative overflow-hidden bg-white`}
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-[15%] -right-[10%] w-[450px] h-[450px] bg-emerald-50/60 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[15%] w-[380px] h-[380px] bg-teal-50/60 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 leading-snug mb-4 whitespace-nowrap">
            การรับรอง{" "}
            <span className="text-emerald-600 underline underline-offset-[10px] decoration-emerald-300 decoration-4">
              มาตรฐานสากล
            </span>
          </h2>
        </div>
{/* 🔥 Certificates Grid (คอมเล็กลง + อยู่ในกรอบมากขึ้น) */}
<div className="w-full max-w-3xl md:max-w-1xl mx-auto 
                grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
  {data.map((item, i) => (
    <div
  key={i}
  onClick={() => setSelectedImage(item.image)}
  className="group bg-white rounded-3xl p-4 md:p-5 shadow-lg hover:shadow-2xl 
             transition-all duration-500 border border-slate-100 cursor-pointer 
             hover:-translate-y-1 mx-auto max-w-[300px] md:max-w-[280px]"
>

      <div className="flex flex-col gap-4">

        {/* Image Block */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-sm bg-slate-50 border border-slate-100">
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
        </div>

        {/* Text Section */}
        <div className="w-full text-center">
          <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight mb-1 group-hover:text-emerald-600 transition">
            {item.title}
          </h3>

          <h4 className="text-emerald-600 text-xs md:text-sm font-semibold tracking-wide mb-3">
            {item.subtitle}
          </h4>

          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
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
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-fit max-w-full max-h-full mt-24">

            <button
              className="absolute -top-4 -right-4 bg-white text-slate-700 border-2 border-slate-100 rounded-full p-2 shadow-lg hover:bg-red-50 hover:text-red-600 hover:scale-110 transition-all z-20"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-1 rounded-xl border-[3px] border-yellow-400 shadow-[0_0_50px_-5px_rgba(250,204,21,0.6)] w-fit mx-auto overflow-hidden animate-in zoom-in-95 duration-300"
            >
              <img
                src={selectedImage}
                alt="certificate"
                className="max-h-[75vh] w-auto object-contain block"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
