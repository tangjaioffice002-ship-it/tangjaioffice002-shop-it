"use client";
import React from "react";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section
      id="Contact"
      className="relative min-h-screen bg-slate-50 font-sans py-20 overflow-hidden"
    >
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-60"></div>

        {/* Glow Blobs Floating */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-40"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-40"
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* --- HEADER --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
<div className="inline-flex items-center gap-2 px-2.5 py-0.5 
  rounded-full bg-emerald-100 text-emerald-700 
  text-xs sm:text-sm font-semibold mb-6 border border-emerald-200 
  shadow-sm mx-auto">
  <Phone size={14} />
  <span>Contact Us</span>
</div>

<h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4 relative">
  ช่องทางการ
  
  <span className="text-emerald-600 relative md:ml-2">
    ติดต่อ
  </span>
</h2>


          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-light">
            พร้อมให้คำปรึกษาและบริการข้อมูลสินค้า สอบถามได้ทุกช่องทาง
          </p>
        </motion.div>

        {/* --- CONTACT CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">

          {/* CARD TEMPLATE */}
          {[
            {
              icon: Phone,
              title: "โทรศัพท์",
              desc: "ติดต่อสอบถามข้อมูลด่วน",
              info: "082-4740111",
              href: "tel:082-4740111",
              sub: "จันทร์-เสาร์ | 8:00 - 17:00 น.",
            },
            {
              icon: Mail,
              title: "อีเมล",
              desc: "สำหรับขอใบเสนอราคา",
              info: "tangjaisut441@gmail.com",
              href: "mailto:tangjaisut441@gmail.com",
              sub: "ตอบกลับภายใน 24 ชม.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-300 hover:-translate-y-2 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-600 transition-colors duration-300 mb-6 ring-4 ring-emerald-50/50">
                <item.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
              <a
                href={item.href}
                className="text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors break-all"
              >
                {item.info}
              </a>
              <div className="mt-4 flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
                <Clock size={12} />
                <span>{item.sub}</span>
              </div>
            </motion.div>
          ))}

          {/* ADDRESS CARD */}
          <motion.div
            className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-300 hover:-translate-y-2 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-600 transition-colors duration-300 mb-6 ring-4 ring-emerald-50/50">
              <MapPin className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-2">ที่ตั้งสำนักงาน</h3>
            <p className="text-slate-400 text-sm mb-4">สำนักงานใหญ่</p>
            <p className="text-slate-600 leading-relaxed text-base">
              311 หมู่ 4 บ้านเพียเพ้า <br />
              ต.คำน้ำแซบ อ.วารินชำราบ <br />
              จ.อุบลราชธานี 34190
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
