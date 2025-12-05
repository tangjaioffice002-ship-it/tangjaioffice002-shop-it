"use client";

import React, { useEffect, useRef, useState } from "react";

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
  className="py-20 bg-white font-sans"
>

      {/* Custom Scrollbar */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #d9d9d9; /* เทาอ่อนจากโลโก้ */
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #A4C78E; /* เขียวอ่อนเหมือนคำว่า Corporation */
          border-radius: 10px;
          border: 2px solid #E8E8E8;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #8BC34A; /* เขียวสดเหมือนขีดโลโก้ */
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center mt-20 mb-12 text-gray-700 tracking-wide">
          ลูกค้าที่ไว้วางใจเรา
        </h3>

        <div
          ref={ref}
          className="flex space-x-6 md:space-x-8 overflow-x-auto items-center cursor-grab custom-scroll pb-4"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false);
            setActiveIndex(null);
          }}
        >
          {clients.map((c, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 h-36 sm:h-40 md:h-44 lg:h-48 
                bg-white border rounded-2xl shadow-md flex items-center justify-center 
                transition-all duration-300 hover:scale-105 hover:shadow-xl
                ${
                  activeIndex === index
                    ? "border-[#8BC34A]" /* ขอบเขียวสด */
                    : "border-[#C7C7C7]"   /* ขอบเทา */
                }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-28 sm:max-h-32 md:max-h-36 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
