"use client";

import { useState } from "react";
import { Target, Compass, HeartHandshake, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Vision() {
  const items = [
    {
      title: "วิสัยทัศน์ (Vision)",
      icon: Target,
      desc: "มุ่งสู่การเป็นผู้นำด้านบริการและจัดหาครุภัณฑ์ที่ทันสมัย โดยยึดมั่นในคุณภาพและความซื่อสัตย์ เพื่อสร้างมาตรฐานใหม่ให้กับองค์กรทั่วประเทศ",
    },
    {
      title: "พันธกิจ (Mission)",
      icon: Compass,
      desc: "คัดสรรสินค้าคุณภาพเยี่ยม ส่งมอบบริการที่รวดเร็ว ตรงต่อเวลา และดูแลลูกค้าดุจพันธมิตร เพื่อความสำเร็จร่วมกันอย่างยั่งยืน",
    },
    {
      title: "ค่านิยม (Core Values)",
      icon: HeartHandshake,
      desc: "คุณภาพ • ความโปร่งใส • ความรับผิดชอบ • ความเป็นมืออาชีพ",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section
      className={`${prompt.className} relative min-h-[auto] md:min-h-[50vh] py-10 md:py-16 flex items-center`}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 w-full">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-yellow-200 text-yellow-700 text-[10px] font-bold tracking-wider shadow-sm mb-3">
            <Sparkles size={12} />
            <span>OUR DIRECTION</span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 leading-tight">
            มุ่งมั่นสร้างสรรค์
            <br className="block md:hidden" />
            <span className="text-emerald-600 relative ml-1 md:ml-2">
              สิ่งที่ดีที่สุด
              <span className="absolute left-0 bottom-[-4px] w-full h-[3px] md:h-[4px] bg-emerald-300/50 rounded-full" />
            </span>
          </h1>

          <p className="text-slate-600 mt-3 max-w-xl mx-auto text-sm md:text-base px-2">
            รากฐานที่แข็งแกร่ง นำพาองค์กรสู่ความสำเร็จด้วยวิสัยทัศน์ที่ชัดเจน
          </p>
        </div>

        {/* -------------------- Mobile Slider (No Scrollbar) -------------------- */}
        <div className="md:hidden relative flex flex-col items-center">

          {/* Slide Card */}
          <div className="w-full">
            <div
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/60
                         text-center flex flex-col items-center transition-all duration-500 min-h-[260px]"
            >
             

              <h2 className="text-lg font-bold text-slate-800 mb-2">
                {items[index].title}
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed">
                {items[index].desc}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between w-full mt-5 px-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md border border-slate-200 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md border border-slate-200 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-4">
            {items.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? "bg-emerald-600 w-4" : "bg-slate-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* -------------------- Desktop Grid -------------------- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 shadow-md border border-slate-200/60
                         text-center h-full flex flex-col items-center 
                         transition-all duration-500
                         hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-300/60"
            >
              <div className="mb-5 w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center 
                              text-emerald-600 shadow-inner group-hover:bg-emerald-100 transition">
                <item.icon size={32} strokeWidth={1.5} />
              </div>

              <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition">
                {item.title}
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
