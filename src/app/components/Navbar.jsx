"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  PackageSearch,
  Newspaper,
  Users,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // รายการเมนู
  const navItems = [
    { href: "#home", label: "หน้าแรก", icon: Home },
    { href: "#AboutExecutives", label: "เกี่ยวกับเรา", icon: Info },
    { href: "#Services", label: "สินค้า & บริการ", icon: PackageSearch },
    { href: "#News", label: "ข่าวสาร", icon: Newspaper },
    { href: "#TrustedClients", label: "ลูกค้าของเรา", icon: Users },
  ];

  // ตรวจจับการ Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ป้องกันการ Scroll หน้าเว็บหลักเมื่อเปิดเมนูมือถือ
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled || open
            ? "bg-white/90 backdrop-blur-md shadow-sm border-slate-200 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          
          {/* --- LOGO --- */}
          <a href="#home" className="flex items-center gap-3 group z-50 relative">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100 group-hover:shadow-md transition-all">
               <img
                src="/img/Logo.png"
                alt="TANGJAI"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              {/* ปรับสี Text ให้มองเห็นชัดใน Mobile Drawer ด้วย logic เช็ค scrolled หรือ open */}
              <span className={`font-bold text-base sm:text-lg leading-tight transition-colors ${scrolled || open ? 'text-slate-800' : 'text-slate-800 md:text-white md:mix-blend-difference'}`}>
                TANGJAI
              </span>
              <span className="text-[10px] sm:text-xs text-emerald-600 font-medium tracking-wide">
                CORPORATION
              </span>
            </div>
          </a>

          {/* --- DESKTOP MENU --- */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-white/20 shadow-sm mx-4">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-emerald-700 hover:bg-white transition-all duration-300 flex items-center gap-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* --- CTA BUTTON & MOBILE TOGGLE --- */}
          <div className="flex items-center gap-3">
            
            {/* Contact Button (Desktop Only) */}
            <a
              href="#Contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-0.5"
            >
              <PhoneCall size={18} />
              <span>ติดต่อเรา</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors z-50 relative"
              aria-label="Toggle Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================
          MOBILE MENU (DRAWER) - ตกแต่งใหม่ให้สวยงาม
      ========================================= */}
      
      {/* Overlay Background */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Drawer Container */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) lg:hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* 1. Drawer Header */}
        <div className="pt-24 pb-6 px-6 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
            <h2 className="text-xl font-bold text-slate-800 mb-1">เมนูหลัก</h2>
            <p className="text-sm text-slate-500 font-light">เลือกรายการที่ต้องการ</p>
        </div>

        {/* 2. Drawer Links List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scroll">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 hover:bg-emerald-50/50 transition-all duration-200 active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <item.icon size={20} />
                </div>
                <span className="font-semibold text-slate-600 group-hover:text-emerald-700 text-base">
                    {item.label}
                </span>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>

        {/* 3. Drawer Footer (Info & CTA) */}
        <div className="p-6 bg-slate-50 border-t border-slate-100">
            {/* Contact Info Text */}
            <div className="mb-4 text-center">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">ต้องการความช่วยเหลือ?</p>
                <p className="text-sm text-slate-600">ทีมงานพร้อมให้บริการตลอดเวลา</p>
            </div>

            {/* CTA Button */}
            <a
              href="#Contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-emerald-200 active:scale-[0.97] transition-all hover:shadow-xl"
            >
              <PhoneCall size={20} className="animate-pulse" />
              ติดต่อเราทันที
            </a>
        </div>
      </div>
    </>
  );
}