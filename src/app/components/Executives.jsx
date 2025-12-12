"use client";

import { useState } from "react";
import { Award } from "lucide-react";

const executives = [
  {
    name: "นายสนั่น สุตัญตั้งใจ",
    title: "ประธานบริษัท",
    photo: "/img/01.jpg",
    quote: "วิสัยทัศน์ที่กว้างไกล นำพาองค์กรสู่ความเป็นเลิศอย่างยั่งยืน",
  },
];

export default function Executives() {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    
    <section className="relative w-full py-2 md:py-8 font-sans bg-white">
           
      {/* --- Header --- */}
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200/60 text-amber-700 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
          <Award size={16} className="text-amber-500" />
          <span>Leadership Team</span>
        </div>

        <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          ผู้นำที่มี
          <span className="relative whitespace-nowrap text-emerald-700 ml-3">
            <span className="relative z-10">ประสบการณ์</span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-emerald-300/60 -z-10"
              viewBox="0 0 200 10"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2.5 7.5C25 2.5 75 -2.5 197.5 7.5"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h3>

        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          ขับเคลื่อนองค์กรด้วยวิสัยทัศน์และความมุ่งมั่น เพื่อสร้างการเติบโตที่ยั่งยืน
        </p>
      </div>

      {/* --- Horizontal Cards --- */}
<div className="w-full flex justify-center py-01 px-3">
  <div className="group relative flex flex-col md:flex-row items-center gap-5 bg-white rounded-[1.5rem] p-6 shadow-md hover:shadow-xl transition-all duration-500 max-w-2xl w-full overflow-hidden border border-slate-100">

    {/* --- Decorative Background Gradient on Hover --- */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

    {/* --- Image Section (เล็กลง) --- */}
    <div className="relative shrink-0">
      {/* Decorative Rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-300 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-105"></div>

      <div
        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-white shadow-sm cursor-pointer transition-transform duration-500 group-hover:scale-[1.02] ring-1 ring-slate-100 group-hover:ring-emerald-200"
        onClick={() => setPreviewImg(executives[0].photo)}
      >
        <img
          src={executives[0].photo}
          alt={executives[0].name}
          className="w-full h-full object-cover object-top rounded-full"
          onError={(e) => (e.target.style.display = 'none')}
        />
      </div>
    </div>

    {/* --- Text Section --- */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10 w-full">

      {/* Name & Title (ปรับ Font เล็กลง) */}
      <div className="mb-3">
        <h4 className="font-bold text-xl md:text-2xl text-slate-800 group-hover:text-emerald-900 transition-colors duration-300 leading-tight">
          {executives[0].name}
        </h4>
        <div className="inline-block mt-1.5 px-3 py-1 rounded-full bg-amber-100/60 text-amber-800 text-xs font-bold tracking-wide border border-amber-200/50">
          {executives[0].title}
        </div>
      </div>

      {/* Quote Area (Compact) */}
      <div className="relative max-w-lg">
         {/* Quote Icon (ปรับขนาดลง) */}
         <svg className="absolute -top-3 -left-4 w-10 h-10 text-emerald-100/60 transform -scale-x-100 -z-10 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
         </svg>

        <p className="text-slate-600 italic text-sm leading-relaxed relative z-10 font-medium">
          "{executives[0].quote}"
        </p>
      </div>

    </div>

  </div>
</div>
    </section>
  );
}
