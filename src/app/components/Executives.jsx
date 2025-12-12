"use client";

import { useState } from "react";
import { Users, Award } from "lucide-react";

// ตรวจสอบข้อมูลตรงนี้
const executives = [
  {
    name: "นายสนั่น สุตัญตั้งใจ",
    title: "ประธานบริษัท",
    photo: "/img/01.jpg", // เช็คว่ามีรูปนี้ในโฟลเดอร์ public/img จริงไหม
    quote: "วิสัยทัศน์ที่กว้างไกล นำพาองค์กรสู่ความเป็นเลิศอย่างยั่งยืน",
  },
];

export default function Executives() {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-slate-50 font-sans">
      
      {/* --- BG Decoration --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30 mask-[linear-gradient(to_bottom,black_60%,transparent)]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
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
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path d="M2.5 7.5C25 2.5 75 -2.5 197.5 7.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            ขับเคลื่อนองค์กรด้วยวิสัยทัศน์และความมุ่งมั่น เพื่อสร้างการเติบโตที่ยั่งยืน
          </p>
        </div>

        {/* --- Cards Container --- */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pb-10">
          {executives.map((e, i) => (
            <div
              key={i}
              className="group relative w-full max-w-[400px] bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-emerald-100/60 hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] flex flex-col items-center text-center overflow-hidden"
            >
              {/* Decorative Gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-100 transition-opacity duration-500 -z-20"></div>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

              {/* Image Container */}
              <div className="relative mb-8 sm:mb-10 group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-300/40 to-emerald-300/40 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                <div
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full overflow-hidden ring-[6px] ring-white shadow-lg cursor-pointer mx-auto bg-slate-200"
                  onClick={() => setPreviewImg(e.photo)}
                >
                  {/* รูปภาพ - ตรวจสอบ path ดีๆ */}
                  <img
                    src={e.photo}
                    alt={e.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'; // ซ่อนรูปถ้าโหลดไม่ได้
                    }}
                  />
                  {/* Fallback กรณีรูปไม่ขึ้น จะได้ไม่โล่ง */}
                  <div className="absolute inset-0 flex items-center justify-center -z-10 text-slate-400">
                    No Image
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full">
                <h4 className="font-bold text-2xl sm:text-3xl text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors duration-300">
                  {e.name}
                </h4>

                <div className="inline-block px-5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-base font-semibold mb-6 border border-amber-100/80 shadow-sm">
                  {e.title}
                </div>
                
                {e.quote && (
                  <div className="relative px-2">
                    <p className="text-slate-600 italic text-base sm:text-lg leading-relaxed relative z-10">
                       "{e.quote}"
                    </p>
                  </div>
                )}
              </div>
              
              {/* Bottom Decorative Line */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400 rounded-t-full opacity-30 group-hover:w-2/3 group-hover:opacity-80 transition-all duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Modal --- */}
     

      {/* --- Styles --- */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-zoomIn { animation: zoomIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); }
      `}</style>
    </section>
  );
}