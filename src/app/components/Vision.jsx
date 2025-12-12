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
      // ปรับแก้: ลด min-h และเปลี่ยน py-24 เป็น pt-12 pb-16 เพื่อดันเนื้อหาขึ้นบน
      className={`${prompt.className} relative min-h-[50vh] pt-12 pb-16 flex items-center`}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full"> {/* ปรับแก้: max-w-6xl -> max-w-5xl ให้แคบลงนิดหน่อย */}

        {/* Header */}
        {/* ปรับแก้: ลด mb-16 -> mb-8 */}
        <div className="text-center mb-8">
          {/* ปรับแก้: ลด mb-5 -> mb-3 */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-yellow-200 text-yellow-700 text-[10px] font-bold tracking-wider shadow-sm mb-3">
            <Sparkles size={12} />
            <span>OUR DIRECTION</span>
          </div>

          {/* ปรับแก้: ลดขนาด font และ leading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
            มุ่งมั่นสร้างสรรค์
            <br className="block md:hidden" />
            <span className="text-emerald-600 relative ml-2 md:ml-0">
               สิ่งที่ดีที่สุด
              {/* ปรับแก้: ลดขนาดเส้นใต้ */}
              <span className="absolute left-0 bottom-[-4px] w-full h-[4px] bg-emerald-300/50 rounded-full" />
            </span>
          </h1>

          {/* ปรับแก้: ลด mt-5 -> mt-3 และ text-lg -> text-base */}
          <p className="text-slate-600 mt-3 max-w-xl mx-auto text-base">
            รากฐานที่แข็งแกร่ง นำพาองค์กรสู่ความสำเร็จด้วยวิสัยทัศน์ที่ชัดเจน
          </p>
        </div>

        {/* Cards */}
        {/* ปรับแก้: ลด gap-10 -> gap-6 */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              // ปรับแก้: ลด padding p-10 -> p-6
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100 text-center"
            >
              {/* ปรับแก้: ลดขนาด wrapper ไอคอน w-16 h-16 -> w-12 h-12 และ mb-6 -> mb-4 */}
              <div className="mb-4 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner mx-auto">
                {/* ปรับแก้: ลดขนาดไอคอน size={32} -> size={24} */}
                <item.icon size={24} strokeWidth={1.5} />
              </div>

              {/* ปรับแก้: ลดขนาด font text-xl -> text-lg และ mb-3 -> mb-2 */}
              <h2 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-700">
                {item.title}
              </h2>
              {/* ปรับแก้: เพิ่ม text-sm เพื่อลดขนาดตัวหนังสือเนื้อหา */}
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