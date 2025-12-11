"use client";

import { MapPin, Phone, Mail, ArrowRight, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 pt-16 pb-10 border-t border-slate-200 overflow-hidden font-sans">

      {/* BG Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[16px_16px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* Grid Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 mb-14">

          {/* --- Column 1: Brand --- */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
            <img
              src="/img/Logo.png"
              alt="Tangjai Logo"
              className="w-32 sm:w-36 object-contain"
            />

            <div>
              <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                TANGJAI
              </h2>
              <p className="text-xs font-semibold text-emerald-600 tracking-wider uppercase">
                Corporation
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              มุ่งมั่นให้บริการจัดหาครุภัณฑ์การศึกษาคุณภาพเยี่ยม พร้อมบริการหลังการขายที่ใส่ใจในทุกรายละเอียด
            </p>
          </div>

          {/* --- Column 2: Menu (Mobile = same, Desktop = vertical list) --- */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">
              เมนูหลัก
            </h3>

            {/* --- MOBILE (แบบเดิม 2 คอลัมน์) --- */}
            <div
              className="
                w-full grid grid-cols-2 gap-3 
                p-4 rounded-xl bg-white/60 shadow-sm 
                sm:hidden
              "
            >
              {[
                { label: "หน้าแรก", href: "#home" },
                { label: "สินค้าและบริการ", href: "#Services" },
                { label: "เกี่ยวกับเรา", href: "#AboutExecutives" },
                { label: "ข่าวสาร", href: "#News" },
                { label: "ติดต่อเรา", href: "#Contact" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="
                    flex items-center gap-2
                    text-sm text-slate-700 font-medium
                    hover:text-emerald-600
                    transition-all duration-300 group
                  "
                >
                  <ArrowRight
                    size={14}
                    className="
                      text-emerald-500 opacity-0 
                      -translate-x-2 group-hover:translate-x-0 
                      group-hover:opacity-100 transition-all duration-300
                    "
                  />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

            {/* --- DESKTOP (ใหม่ เรียงลงมาเป็นแถว) --- */}
            <ul className="hidden sm:flex flex-col space-y-3 w-full max-w-xs">
              {[
                { label: "หน้าแรก", href: "#home" },
                { label: "สินค้าและบริการ", href: "#Services" },
                { label: "เกี่ยวกับเรา", href: "#AboutExecutives" },
                { label: "ข่าวสาร", href: "#News" },
                { label: "ติดต่อเรา", href: "#Contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="
                      flex items-center gap-3
                      p-2 rounded-lg
                      text-sm text-slate-700 font-medium
                      hover:text-emerald-600 hover:bg-emerald-50
                      transition-all duration-300 group
                    "
                  >
                    <ArrowRight
                      size={15}
                      className="
                        text-emerald-500 opacity-0 
                        -translate-x-3 group-hover:translate-x-0 
                        group-hover:opacity-100 transition-all
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

          {/* --- Column 3: Contact --- */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">
              ข้อมูลติดต่อ
            </h3>

            <ul className="space-y-3 text-sm w-full max-w-xs">

              <li className="flex items-start gap-3 p-3 bg-white/70 sm:bg-transparent rounded-lg shadow-sm sm:shadow-none">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  311 หมู่ 4 บ้านเพียเพ้า ต.คำน้ำแซบ <br />
                  อ.วารินชำราบ จ.อุบลราชธานี 34190
                </span>
              </li>

              <li className="flex items-center gap-3 p-3 bg-white/70 sm:bg-transparent rounded-lg shadow-sm sm:shadow-none">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <a href="tel:0824740111" className="hover:text-emerald-600 transition">
                  082-4740111
                </a>
              </li>

              <li className="flex items-center gap-3 p-3 bg-white/70 sm:bg-transparent rounded-lg shadow-sm sm:shadow-none">
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
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">
              ช่องทางออนไลน์
            </h3>

            <p className="text-sm text-slate-500 mb-4 max-w-xs">
              ติดตามข่าวสารและโปรโมชั่นล่าสุดผ่านช่องทางโซเชียลมีเดียของเรา
            </p>

            <div className="flex flex-col space-y-3 w-full max-w-xs">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/Tangjaicorporation/?locale=th_TH"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 p-3 rounded-xl 
                  bg-white border border-slate-200 shadow-sm 
                  hover:shadow-md hover:border-blue-100 hover:bg-blue-50 
                  transition-all duration-300 group
                "
              >
                <div className="p-1.5 rounded-full bg-[#1877F2] text-white shrink-0 flex items-center justify-center">
                  <Facebook size={16} fill="currentColor" />
                </div>

                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold text-slate-700 group-hover:text-[#1877F2]">
                    Facebook
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Tangjai Corporation
                  </span>
                </div>
              </a>

              {/* LINE */}
              <a
                href="https://lin.ee/twVZIGO"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 p-3 rounded-xl 
                  bg-white border border-slate-200 shadow-sm 
                  hover:shadow-md hover:border-green-100 hover:bg-green-50 
                  transition-all duration-300 group
                "
              >
                <div className="p-1.5 rounded-full bg-[#06C755] text-white shrink-0 flex items-center justify-center">
                  <img src="/img/1234.png" className="w-4 h-4" alt="Line" />
                </div>

                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold text-slate-700 group-hover:text-[#06C755]">
                    Line Official
                  </span>
                  <span className="text-[11px] text-slate-500">
                    ติดต่อสอบถาม
                  </span>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 text-center text-xs text-slate-500 flex flex-col items-center gap-4">
          <p>© {new Date().getFullYear()} TANGJAI Corporation Co., Ltd. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600 transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
