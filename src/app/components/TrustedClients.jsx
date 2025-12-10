"use client";

import React, { useEffect, useRef, useState } from "react";
import { Handshake } from "lucide-react";

const clients = [
  { name: "Client A", logo: "/img/0001.jpg" },
  { name: "Client B", logo: "/img/0002.jpg" },
  { name: "Client C", logo: "/img/0003.jpg" },
  { name: "Client D", logo: "/img/0004.jpg" },
  { name: "Client E", logo: "/img/0005.jpg" },
  { name: "Client F", logo: "/img/0006.jpg" },
  { name: "Client G", logo: "/img/0007.jpg" },
  { name: "Client H", logo: "/img/0008.jpg" },
  { name: "Client I", logo: "/img/0009.jpg" },
  { name: "Client J", logo: "/img/0010.jpg" },
];

export default function TrustedClients() {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const box = ref.current;
    if (!box) return;

    let speed = 0.5;
    let anim;

    const scroll = () => {
      if (!hover) {
        box.scrollLeft += speed;
        if (box.scrollLeft + box.clientWidth >= box.scrollWidth) {
          box.scrollLeft = 0;
        }
      }
      anim = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(anim);
  }, [hover]);

  return (
    <section
      id="TrustedClients"
      // ✅ แก้ไข 1: เปลี่ยนพื้นหลังเป็น bg-slate-50 (เทาอ่อน) ให้เหมือนหน้าอื่นๆ
      className="relative py-20 font-sans overflow-hidden bg-slate-50"
    >
      
      {/* ✅ แก้ไข 2: ปรับลวดลายพื้นหลัง (Pattern) เป็นสีเทา (#cbd5e1) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-60 mask-[linear-gradient(to_bottom,black_80%,transparent)]"></div>
        {/* Glow สีเขียวจางๆ ยังคงไว้เพื่อให้เข้ากับ Theme หลัก (ถ้าไม่ชอบลบ 2 บรรทัดล่างนี้ออกได้ครับ) */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>
      </div>

      {/* Custom Scrollbar Styling */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #f1f5f9; /* slate-100 */
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1; /* slate-300 */
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #10b981; /* emerald-500 */
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ✅ แก้ไข 3: เพิ่มส่วน Header และ Badge ตามภาพที่ต้องการ */}
        <div className="text-center mb-12">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-600 text-xs sm:text-sm font-bold mb-6 shadow-sm">
            <Handshake size={16} />
            <span>TRUSTED BY</span>
          </div>

          {/* Heading */}
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            ลูกค้าที่ <span className="text-emerald-600">ไว้วางใจ</span> เรา
          </h3>
        </div>

        {/* Scrolling Box */}
        <div
          ref={ref}
          className="flex space-x-6 md:space-x-8 overflow-x-auto items-center cursor-grab custom-scroll pb-8 pt-2 px-2"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false);
            setActiveIndex(null);
          }}
        >
          {clients.map((c, index) => (
            <div
              key={index}
              className={`shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 h-36 sm:h-40 md:h-44 lg:h-48 
              bg-white border rounded-2xl flex items-center justify-center 
              transition-all duration-300
              ${
                activeIndex === index
                  ? "border-emerald-400 shadow-xl shadow-emerald-100 scale-105"
                  : "border-slate-100 shadow-sm shadow-slate-200/50 hover:border-emerald-200"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* ✅ แก้ไข 4: เอา filter grayscale ออก เพื่อให้โลโก้เป็นสีปกติตลอดเวลา */}
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-24 sm:max-h-28 md:max-h-32 object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}