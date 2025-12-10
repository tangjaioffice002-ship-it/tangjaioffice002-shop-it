"use client";

import { Target, Compass, HeartHandshake, Sparkles } from "lucide-react";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function VisionPage() {
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
      className={`${prompt.className} relative min-h-[80vh] py-20 bg-slate-50 overflow-hidden flex items-center`}
    >
      {/* --- Background Decoration (Consistent Theme) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-60 mask-[linear-gradient(to_bottom,black_60%,transparent)]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider shadow-sm mb-5">
            <Sparkles size={14} />
            <span>Our Direction</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            มุ่งมั่นสร้างสรรค์
            <span className="text-emerald-600"> สิ่งที่ดีที่สุด</span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-light text-base md:text-lg">
            รากฐานที่แข็งแกร่ง นำพาองค์กรสู่ความสำเร็จด้วยวิสัยทัศน์ที่ชัดเจน
          </p>
        </div>

        {/* --- Cards Layout --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-4xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col items-center text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Decorative Gradient on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-400 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Icon */}
              <div className="mb-6 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shadow-inner">
                <item.icon size={32} strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h2 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}