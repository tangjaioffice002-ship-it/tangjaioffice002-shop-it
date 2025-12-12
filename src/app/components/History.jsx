"use client";

import { Building2, Award, History } from "lucide-react";

export default function HistoryPage() {
  return (
    <main
      className="relative max-w-4xl mx-auto px-6 py-4"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 -z-10">
        <div className="absolute -top-[20%] -right-[15%] w-[420px] h-[420px] bg-emerald-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-[45%] -left-[20%] w-[350px] h-[350px] bg-teal-100/50 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-700 px-4 py-1.5 rounded-full shadow-sm font-medium">
          <History className="w-4 h-4" />
          ประวัติความเป็นมา
        </div>

        <h1 className="text-4xl font-extrabold mt-6 text-slate-800 tracking-tight leading-snug">
          เกี่ยวกับ{" "}
          <span className="text-emerald-600 underline underline-offset-[10px] decoration-emerald-300 decoration-4">
            TANGJAI CORPORATION
          </span>
        </h1>

        <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed text-lg">
          เราเริ่มต้นจากความตั้งใจในการคัดสรรอุปกรณ์สำนักงานและเทคโนโลยีคุณภาพสูง
          เพื่อรองรับการใช้งานของหน่วยงานราชการและสถานศึกษา
          โดยเน้นความโปร่งใส คุณภาพ และบริการที่เชื่อถือได้
        </p>
      </div>

      {/* Section */}
      <section className="space-y-12">
        <div className="bg-white rounded-3xl shadow-lg p-10 border border-slate-100 transition hover:shadow-2xl hover:-translate-y-1 duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-7 h-7 text-emerald-600" />
            <h2 className="text-2xl font-semibold text-slate-800">
              จุดเริ่มต้น
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed text-base">
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
