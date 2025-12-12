"use client";

import { Building2, Award, History } from "lucide-react";

export default function HistoryPage() {
  return (
    <main
      // ปรับแก้: เพิ่ม min-h เพื่อให้ดูเต็มจอ และปรับ padding บนล่างให้เหมาะกับมือถือและคอม
      className="relative max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 min-h-[60vh]"
    >
      {/* Soft Background Glow - ปรับขนาด Blob ให้เล็กลงในมือถือ */}
      <div className="absolute inset-0 pointer-events-none opacity-40 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[250px] h-[250px] md:w-[420px] md:h-[420px] bg-emerald-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] -left-[10%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-teal-100/50 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      {/* ปรับแก้: ลดระยะห่างด้านล่างในมือถือ (mb-10) และเพิ่มในคอม (md:mb-16) */}
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-700 px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-sm font-medium text-xs md:text-sm">
          <History className="w-3 h-3 md:w-4 md:h-4" />
          ประวัติความเป็นมา
        </div>

        {/* ปรับแก้: ขนาดตัวหนังสือ Responsive (text-3xl -> md:text-4xl) */}
        <h1 className="text-3xl md:text-4xl font-extrabold mt-4 md:mt-6 text-slate-800 tracking-tight leading-snug">
          เกี่ยวกับ{" "}
          <span className="text-emerald-600 underline underline-offset-[6px] md:underline-offset-[10px] decoration-emerald-300 decoration-4 block md:inline mt-1 md:mt-0">
            TANGJAI CORPORATION
          </span>
        </h1>

        {/* ปรับแก้: ขนาดตัวหนังสือคำบรรยาย (text-base -> md:text-lg) */}
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed text-base md:text-lg px-2">
          เราเริ่มต้นจากความตั้งใจในการคัดสรรอุปกรณ์สำนักงานและเทคโนโลยีคุณภาพสูง
          เพื่อรองรับการใช้งานของหน่วยงานราชการและสถานศึกษา
          โดยเน้นความโปร่งใส คุณภาพ และบริการที่เชื่อถือได้
        </p>
      </div>

      {/* Section */}
      <section className="space-y-8 md:space-y-12">
        {/* Card */}
        {/* ปรับแก้: ลด Padding ในมือถือ (p-6) ขยายในคอม (md:p-10) และปรับ rounded */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-10 border border-slate-100 transition hover:shadow-2xl hover:-translate-y-1 duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-6 h-6 md:w-7 md:h-7 text-emerald-600" />
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
              จุดเริ่มต้น
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            บริษัท TANGJAI ก่อตั้งขึ้นด้วยแนวคิดที่จะเป็นผู้นำด้านอุปกรณ์สำนักงาน
            ที่ได้มาตรฐานและตอบโจทย์การใช้งานจริงในองค์กรภาครัฐ สถานศึกษา
            และหน่วยงานต่าง ๆ โดยให้ความสำคัญกับคุณภาพ ราคาเป็นธรรม
            และการบริการหลังการขายที่รวดเร็ว
          </p>
        </div>
      </section>
    </main>
  );
}