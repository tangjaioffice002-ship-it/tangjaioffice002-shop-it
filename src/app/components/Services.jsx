"use client";

import React from "react";
import { Sparkles, Package } from "lucide-react";

const services = [
 {
    id: 1,
    name: "เก้าอี้ครู",
    img: "https://image.makewebcdn.com/makeweb/r_300x300/kpR4VNIEl/DefaultData/84_%E0%B9%80%E0%B8%81%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%B5%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9.jpg?v=202405291424",
    category: "เฟอร์นิเจอร์",
    description: "เก้าอี้เพื่อสุขภาพ ออกแบบตามหลักสรีรศาสตร์ ทนทาน รองรับการใช้งานยาวนาน",
  },
  {
    id: 2,
    name: "เครื่องพิมพ์เลเซอร์ สี (Network)",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/19_%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD_LED_%E0%B8%AA%E0%B8%B5%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B8%94_Network_%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%88_2__27_%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2_%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5_.jpg?v=202405291424",
    category: "Office Automation",
    description: "โซลูชันงานพิมพ์ครบวงจร เชื่อมต่อ Network ได้รวดเร็ว ประหยัดต้นทุน",
  },
  {
    id: 3,
    name: "เครื่องขยายเสียง (Power Amp)",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87__Power_Amp_%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%A5%E0%B8%B3%E0%B9%82%E0%B8%9E%E0%B8%87.png?v=202405291424",
    category: "ระบบเสียง",
    description: "ระบบเสียงคุณภาพสูง สำหรับห้องประชุมและลานอเนกประสงค์ คมชัดทุกมิติ",
  },
  {
    id: 4,
    name: "โต๊ะเก้าอี้นักเรียน (ก่อนประถม)",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/3_%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%B5%E0%B9%89%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99_%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2.jpg?v=202405291424",
    category: "ครุภัณฑ์การศึกษา",
    description: "ได้รับมาตรฐาน มอก. แข็งแรง ปลอดภัย สีสันสดใส เหมาะสำหรับเด็ก",
  },
  {
    id: 5,
    name: "เครื่องมัลติมิเดียโปรเจคเตอร์",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/8_%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%B1%E0%B8%A5%E0%B8%95%E0%B8%B4%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2_%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C_1.jpg?v=202405291424",
    category: "Visual System",
    description: "ภาพคมชัด รองรับความละเอียดสูง เปลี่ยนห้องเรียนให้เป็น Smart Classroom",
  },
  {
    id: 6,
    name: "พิณโปร่ง 4 สาย",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/%E0%B8%9E%E0%B8%B4%E0%B8%93%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%88%E0%B8%87_4_%E0%B8%AA%E0%B8%B2%E0%B8%A2.png?v=202405291424",
    category: "ดนตรีและศิลปะ",
    description: "งานฝีมือประณีต เสียงไพเราะ สืบสานวัฒนธรรมไทยด้วยเครื่องดนตรีคุณภาพ",
  },
];

export default function Services() {
  return (
    <section
      id="Services"
      className="relative py-16 md:py-24 lg:py-28 font-sans overflow-hidden bg-slate-50 animate-sectionSlideIn"
    >
      {/* --- Background --- */}
      <div className="absolute inset-0 pointer-events-none animate-fadeInSlow">
        <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-50"></div>
      </div>

      {/* Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16 animate-slideDown">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-600 text-sm font-bold mb-4 shadow-sm">
            <Package size={16} />
            <span>OUR PRODUCTS</span>
          </div>

          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight">
            คัดสรร
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400">
              {" "}สิ่งที่ดีที่สุด
            </span>
            <br /> เพื่อการศึกษาไทย
          </h3>

          <p className="mt-6 text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            เราให้บริการจัดหาครุภัณฑ์และติดตั้งระบบ <br />ครบวงจร ด้วยมาตรฐานระดับมืออาชีพ
          </p>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full animate-cardStagger"
              style={{ animationDelay: `${index * 180}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />

                <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur border border-slate-100 text-emerald-600 text-xs font-bold rounded-lg">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 border-t border-slate-50">
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition">
                  {item.name}
                </h4>
                <p className="text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Animations --- */}
      <style jsx>{`
        @keyframes sectionSlideIn {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-sectionSlideIn {
          animation: sectionSlideIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }

        @keyframes cardStagger {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-cardStagger {
          animation: cardStagger 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInSlow {
          0% { opacity: 0; }
          100% { opacity: 0.6; }
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 1.8s ease-out;
        }
      `}</style>
    </section>
  );
}
