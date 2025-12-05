"use client";

import { Target, Compass, Star } from "lucide-react";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Header */}
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full shadow-sm font-medium">
          <Star className="w-4 h-4" />
          วิสัยทัศน์ & พันธกิจ
        </div>

        <h1 className="text-4xl font-bold mt-6 text-green-700 tracking-tight">
          วิสัยทัศน์ของ TANGJAI Corporation
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          มุ่งยกระดับการบริการและการจัดหาสินค้าให้มีมาตรฐานสูงสุด
          พร้อมพัฒนาคุณภาพงานด้วยเทคโนโลยีและความเชื่อใจจากลูกค้า
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">

        {/* Vision */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-green-100">
          <Target className="w-10 h-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-green-700">Vision</h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            เป็นผู้นำด้านบริการและอุปกรณ์สำนักงานคุณภาพสูง 
            ที่หน่วยงานไว้วางใจ และสร้างมาตรฐานใหม่ของความโปร่งใสและความเป็นมืออาชีพ
          </p>
        </div>

        {/* Mission */}
        <div className="bg-green-50 rounded-2xl p-8 shadow border border-green-200">
          <Compass className="w-10 h-10 text-green-700 mb-4" />
          <h2 className="text-2xl font-semibold text-green-700">Mission</h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            คัดสรรสินค้าอย่างมีคุณภาพ ส่งมอบบริการที่รวดเร็ว
            และสนับสนุนลูกค้าด้วยความจริงใจและความรับผิดชอบ
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-green-100">
          <Star className="w-10 h-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-green-700">Core Values</h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            คุณภาพ • ความโปร่งใส • ความเชื่อมั่น • ความเป็นมืออาชีพ
          </p>
        </div>

      </div>
    </main>
  );
}
