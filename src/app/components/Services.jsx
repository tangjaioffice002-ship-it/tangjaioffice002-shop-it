import React from 'react';

const services = [
  {
    id: 1,
    name: "เก้าอี้ครู",
    img: "https://image.makewebcdn.com/makeweb/r_300x300/kpR4VNIEl/DefaultData/84_%E0%B9%80%E0%B8%81%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%B5%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9.jpg?v=202405291424",
    category: "เฟอร์นิเจอร์",
    description: "บริการจัดหาและติดตั้งเฟอร์นิเจอร์สำหรับบุคลากรครู"
  },
  {
    id: 2,
    name: "เครื่องพิมพ์เลเซอร์ สี (Network)",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/19_%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD_LED_%E0%B8%AA%E0%B8%B5%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B8%94_Network_%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%88_2__27_%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2_%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5_.jpg?v=202405291424",
    category: "เครื่องใช้สำนักงาน",
    description: "บริการให้เช่าและซ่อมบำรุงเครื่องพิมพ์สำนักงาน"
  },
  {
    id: 3,
    name: "เครื่องขยายเสียง (Power Amp)",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87__Power_Amp_%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%A5%E0%B8%B3%E0%B9%82%E0%B8%9E%E0%B8%87.png?v=202405291424",
    category: "เครื่องเสียง",
    description: "ติดตั้งระบบเสียงห้องประชุมและกลางแจ้ง"
  },
  {
    id: 4,
    name: "โต๊ะเก้าอี้นักเรียน (ก่อนประถม)",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/3_%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%B5%E0%B9%89%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99_%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2.jpg?v=202405291424",
    category: "เฟอร์นิเจอร์",
    description: "จัดหาครุภัณฑ์การศึกษาตามมาตรฐานกระทรวง"
  },
  {
    id: 5,
    name: "เครื่องมัลติมิเดียโปรเจคเตอร์",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/8_%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%B1%E0%B8%A5%E0%B8%95%E0%B8%B4%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2_%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C_1.jpg?v=202405291424",
    category: "อุปกรณ์ภาพและเสียง",
    description: "บริการติดตั้งโปรเจคเตอร์และระบบภาพห้องเรียน"
  },
  {
    id: 6,
    name: "พิณโปร่ง 4 สาย",
    img: "https://image.makewebcdn.com/makeweb/r_409x409/kpR4VNIEl/DefaultData/%E0%B8%9E%E0%B8%B4%E0%B8%93%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%88%E0%B8%87_4_%E0%B8%AA%E0%B8%B2%E0%B8%A2.png?v=202405291424",
    category: "เครื่องดนตรี",
    description: "จำหน่ายและซ่อมบำรุงเครื่องดนตรีไทย-สากล"
  },
];

export default function Services() {
  return (

    <section id="Services" className="max-w-7xl mx-auto px-6 py-16 js-animate opacity-100 transition duration-700">
      <div className="text-center mb-14">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-200">
            Products & Services
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
          สินค้าและบริการของเรา
        </h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          เราคัดสรรครุภัณฑ์คุณภาพเพื่อสถานศึกษาและหน่วยงานราชการ พร้อมบริการครบวงจร
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((item) => (
          <article
            key={item.id}
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 border border-gray-100"
          >
            {/* Image Cover */}
            <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-white relative group">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full mb-3">
                {item.category}
              </span>
              <h4 className="font-bold text-lg text-gray-800 leading-snug min-h-[56px] mb-2">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {item.description || "สินค้าคุณภาพมาตรฐาน พร้อมบริการหลังการขาย"}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <a
                  href="#contact"
                  className="w-full text-center text-sm bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  สอบถามเพิ่มเติม
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}