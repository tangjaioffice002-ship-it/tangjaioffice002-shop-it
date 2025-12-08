"use client";

import { useState } from "react";
// ถ้ามี icon library สามารถ import เพิ่มได้ แต่ถ้าไม่เปลี่ยนโครงสร้าง ใช้ code เดิมได้เลยครับ

const executives = [
  { name: "นายสนั่น สุตัญตั้งใจ", title: "ประธานบริษัท", photo: "/img/01.jpg" },
  { name: "นางประนอม สุตัญตั้งใจ", title: "รองประธานบริษัท", photo: "/img/02.jpg" },
];

export default function ExecutivesSection() {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <section
      className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden"
      style={{ fontFamily: "'Prompt', 'Sarabun', sans-serif" }}
    >
      {/* --- เพิ่ม Background Decoration (โดยไม่กระทบโครงสร้างหลัก) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-lime-100/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-teal-100/40 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="text-center mb-16 relative">
        {/* ป้าย Badge: เปลี่ยนเป็นสีเขียวใบไม้อ่อนๆ สบายตา */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-lime-50 border border-lime-200 text-lime-700 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
          Executive Team
        </div>

        {/* หัวข้อ: ใช้สี Slate ผสม Gradient เขียวใบไม้ */}
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
          ผู้นำที่มี
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500"> ประสบการณ์</span>
        </h3>

        {/* เส้นขีด: ปรับให้เรียวเล็กและสีละมุนขึ้น */}
        <div className="w-20 h-1.5 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full mx-auto opacity-80"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {executives.map((e, i) => (
          <div
            key={i}
            // Card: พื้นขาวสะอาด ตัดขอบจางๆ และเงาฟุ้งๆ (Soft Glow)
            className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(132,204,22,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out"
          >
            {/* ใช้ flex-col บน mobile, flex-row บน desktop */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

              {/* รูปภาพ */}
              <div className="relative flex-shrink-0">
                {/* Background หลังรูป: เปลี่ยนเป็นสี Lime/Teal สดใส */}
                <div className="absolute inset-0 bg-gradient-to-tr from-lime-300 to-teal-300 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-emerald-400 rounded-[1.5rem] rotate-3 group-hover:rotate-12 transition-transform duration-500 ease-out opacity-80"></div>

                <div
                  className="relative w-32 h-32 md:w-32 md:h-32 rounded-[1.5rem] overflow-hidden ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => setPreviewImg(e.photo)}
                >
                  <img
                    src={e.photo}
                    alt={e.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                  {/* Overlay ตอน Hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* ข้อความ */}
              <div className="flex-1 text-center md:text-left mt-4 md:mt-2">
                <h4 className="  font-bold 
                  text-xl        /* มือถือ */
                  md:text-xl    /* เดสก์ท็อป */
                  text-slate-800 
                  mb-2 
                  group-hover:text-lime-600 
                  transition-colors 
                  duration-300 
                  whitespace-nowrap">
                  {e.name}
                </h4>
                {/* ตำแหน่ง: สีเขียวใบไม้อ่อน */}
                <p className="text-sm font-medium text-emerald-600/80 mb-5 bg-emerald-50/50 inline-block px-3 py-1 rounded-lg">
                  {e.title}
                </p>

                {/* เส้นตกแต่ง: วิ่งยาวขึ้นเมื่อ Hover */}
                <div className="h-1 w-12 mx-auto md:mx-0 bg-gradient-to-r from-lime-400 to-teal-400 rounded-full group-hover:w-full max-w-[120px] transition-all duration-500 ease-out"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {previewImg && (
        <div
          className="fixed inset-0 bg-white/80 backdrop-blur-md flex items-center justify-center z-50 transition-all duration-300"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative p-2 bg-white rounded-2xl shadow-2xl shadow-lime-500/20 animate-in fade-in zoom-in duration-300">
            <img
              src={previewImg}
              alt="Preview"
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-light bg-white/90 px-3 py-1 rounded-full shadow-sm">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
}