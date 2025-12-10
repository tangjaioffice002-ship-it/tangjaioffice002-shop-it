"use client";

import { useState } from "react";
import { Users } from "lucide-react";

const executives = [
  { name: "นายสนั่น สุตัญตั้งใจ", title: "ประธานบริษัท", photo: "/img/01.jpg" },
  { name: "นางประนอม สุตัญตั้งใจ", title: "รองประธานบริษัท", photo: "/img/02.jpg" },
];

export default function ExecutivesSection() {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-slate-50 font-sans">
      
      {/* --- Background Decoration --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"></div>
        
        {/* Soft Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
            <Users size={14} />
            <span>Executive Team</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight leading-tight">
            ผู้นำที่มี
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500"> ประสบการณ์</span>
          </h3>

          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto opacity-80"></div>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {executives.map((e, i) => (
            <div
              key={i}
              className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-100/40 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col items-center md:flex-row md:items-start gap-8"
            >
              {/* Image Section */}
              <div className="relative shrink-0">
                {/* Glow Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300 to-teal-300 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                {/* Rotating Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-[1.5rem] rotate-3 group-hover:rotate-12 transition-transform duration-500 ease-out opacity-100 border border-emerald-50"></div>

                <div
                  className="relative w-32 h-32 rounded-[1.5rem] overflow-hidden ring-4 ring-white shadow-md group-hover:scale-105 transition-transform duration-500 cursor-pointer bg-slate-200"
                  onClick={() => setPreviewImg(e.photo)}
                >
                  <img
                    src={e.photo}
                    alt={e.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1 text-center md:text-left mt-2">
                <h4 className="font-bold text-2xl text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {e.name}
                </h4>

                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium mb-5 border border-emerald-100">
                  {e.title}
                </div>

                {/* Progress Bar Decoration */}
                <div className="h-1.5 w-12 mx-auto md:mx-0 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 w-1/3 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Preview Modal --- */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-md flex justify-center items-center z-[999] animate-fadeIn p-4"
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-2 shadow-2xl border-2 border-yellow-400/80 max-w-[90vw] md:max-w-[65vw] max-h-[70vh] overflow-hidden animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewImg}
              alt="Preview"
              className="w-auto h-auto max-h-[60vh] object-contain rounded-xl block mx-auto"
            />

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-white/90 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10 pointer-events-none whitespace-nowrap">
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
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-zoomIn { animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </section>
  );
}