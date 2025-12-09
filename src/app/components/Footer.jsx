"use client";

import { MapPin, Phone, Mail, ArrowRight, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 pt-16 pb-8 border-t border-slate-200 overflow-hidden font-sans">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* --- Column 1: Brand Info --- */}
          <div className="flex flex-col space-y-6 items-center text-center md:items-start md:text-left">
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <img
                src="/img/Logo.png"
                alt="Tangjai Logo"
                className="w-32 sm:w-36 object-contain mx-auto md:mx-0"
              />
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-800 tracking-tight">TANGJAI</h2>
                <p className="text-xs font-semibold text-emerald-600 tracking-wider uppercase">Corporation</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              มุ่งมั่นให้บริการจัดหาครุภัณฑ์การศึกษาคุณภาพเยี่ยม พร้อมบริการหลังการขายที่ใส่ใจในทุกรายละเอียด
            </p>
          </div>

{/* --- Column 2: Quick Links (ปรับ Responsive มือถือ) --- */}
<div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
    เมนูหลัก
  </h3>

  <ul className="w-full space-y-2">
    {[
      { label: "หน้าแรก", href: "#home" },
      { label: "สินค้าและบริการ", href: "#Services" },
      { label: "เกี่ยวกับเรา", href: "#AboutExecutives" },
      { label: "ข่าวสาร", href: "#News" },
      { label: "ติดต่อเรา", href: "#Contact" },
    ].map((link, i) => (
      <li key={i} className="w-full">
        <a
          href={link.href}
          className="
            flex items-center gap-3
            p-2 rounded-lg
            justify-center md:justify-start
            text-sm text-slate-600
            hover:text-emerald-600 hover:bg-emerald-50
            transition-all duration-300 group
          "
        >
          <ArrowRight
            className="
              w-4 h-4 text-emerald-500
              opacity-0 -ml-4 
              group-hover:opacity-100 group-hover:ml-0
              transition-all duration-300
            "
          />
          <span className="group-hover:translate-x-1 transition-transform">
            {link.label}
          </span>
        </a>
      </li>
    ))}
  </ul>
</div>



{/* --- Column 3: Contact Info (ปรับ Responsive มือถือ) --- */}
<div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
    ข้อมูลติดต่อ
  </h3>

  <ul className="w-full space-y-3 text-sm text-slate-600">

    {/* Address */}
    <li
      className="
        flex items-start gap-3
        p-3 rounded-lg
        bg-white/50 md:bg-transparent
        shadow-sm md:shadow-none
        justify-center md:justify-start
      "
    >
      <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
      <span className="leading-relaxed">
        311 หมู่ 4 บ้านเพียเพ้า ต.คำน้ำแซบ <br />
        อ.วารินชำราบ จ.อุบลราชธานี 34190
      </span>
    </li>

    {/* Phone */}
    <li
      className="
        flex items-center gap-3
        p-3 rounded-lg
        bg-white/50 md:bg-transparent
        shadow-sm md:shadow-none
        justify-center md:justify-start
      "
    >
      <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
      <a href="tel:0824740111" className="hover:text-emerald-600 transition">
        082-4740111
      </a>
    </li>

    {/* Email */}
    <li
      className="
        flex items-center gap-3
        p-3 rounded-lg
        bg-white/50 md:bg-transparent
        shadow-sm md:shadow-none
        justify-center md:justify-start
      "
    >
      <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
      <a
        href="mailto:tangjaisut441@gmail.com"
        className="hover:text-emerald-600 transition break-all"
      >
        tangjaisut441@gmail.com
      </a>
    </li>

  </ul>
</div>

          {/* --- Column 4: Social --- */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
              ช่องทางออนไลน์
            </h3>

            <p className="text-sm text-slate-500 mb-4 max-w-xs">
              ติดตามข่าวสารและโปรโมชั่นล่าสุดผ่านช่องทางโซเชียลมีเดียของเรา
            </p>

            <div className="flex flex-col space-y-3 w-full max-w-xs">

              <a
                href="https://www.facebook.com/Tangjaicorporation/?locale=th_TH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-100 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="bg-[#1877F2] p-1.5 rounded-full text-white">
                  <Facebook size={16} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-700 group-hover:text-[#1877F2]">
                    Facebook 
                  </span>
                  <span className="text-[10px] text-slate-400">Tangjai Corporation</span>
                </div>
              </a>

              <a
                href="https://line.me/R/ti/p/yourlineid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-green-100 hover:bg-green-50 transition-all duration-300 group"
              >
                <img src="/img/1234.png" className="w-7 h-7" alt="Line" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-700 group-hover:text-[#06C755]">Line Official</span>
                  <span className="text-[10px] text-slate-400">ติดต่อสอบถาม</span>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 mt-8 flex flex-col justify-center items-center gap-3 text-xs text-slate-400 text-center">
          <p>
            © {new Date().getFullYear()} TANGJAI Corporation Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600 transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
