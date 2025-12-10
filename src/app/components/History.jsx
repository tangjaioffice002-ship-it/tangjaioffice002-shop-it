"use client";

import { Building2, Award, History } from "lucide-react";

export default function HistoryPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium shadow-sm">
          <History className="w-4 h-4" />
          ประวัติความเป็นมา
        </div>

        <h1 className="text-4xl font-bold mt-6 text-green-700 tracking-tight">
          เกี่ยวกับ TANGJAI CORPORATION
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          เราเริ่มต้นจากความตั้งใจในการคัดสรรอุปกรณ์สำนักงานและเทคโนโลยีคุณภาพสูง
          เพื่อรองรับการใช้งานของหน่วยงานราชการและสถานศึกษา
          โดยเน้นความโปร่งใส คุณภาพ และบริการที่เชื่อถือได้
        </p>
      </div>

      {/* Section */}
      <section className="space-y-12">

        {/* ประวัติ */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-green-100">
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-7 h-7 text-green-600" />
            <h2 className="text-2xl font-semibold text-green-700">จุดเริ่มต้น</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
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
