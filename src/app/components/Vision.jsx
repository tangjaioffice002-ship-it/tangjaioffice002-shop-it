"use client";

import { Target, Compass, HeartHandshake, Sparkles } from "lucide-react";
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

  return (
    <section
      className={`${prompt.className} relative min-h-[80vh] py-24 flex items-center overflow-hidden`}
    >
      {/* BG NEW — soft gradient, no hard dots */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-green-50 to-emerald-50" />

      {/* Soft glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-yellow-200 text-yellow-700 text-xs font-bold tracking-wider shadow-sm mb-5">
            <Sparkles size={14} />
            <span>OUR DIRECTION</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            มุ่งมั่นสร้างสรรค์  
            <br className="block md:hidden" />
            <span className="text-emerald-600 relative">
              สิ่งที่ดีที่สุด
              <span className="absolute left-0 bottom-[-6px] w-full h-[6px] bg-emerald-300/50 rounded-full" />
            </span>
          </h1>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto text-lg">
            รากฐานที่แข็งแกร่ง นำพาองค์กรสู่ความสำเร็จด้วยวิสัยทัศน์ที่ชัดเจน
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100 text-center"
            >
              {/* Icon */}
              <div className="mb-6 w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner">
                <item.icon size={32} strokeWidth={1.5} />
              </div>

              <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700">
                {item.title}
              </h2>
              <p className="text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
