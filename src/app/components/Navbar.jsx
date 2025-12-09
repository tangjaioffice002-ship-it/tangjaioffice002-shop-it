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
  Sparkles // เพิ่มไอคอนตกแต่ง
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
              <span className={`font-bold text-base sm:text-lg leading-tight transition-colors ${scrolled || open ? 'text-slate-800' : 'text-slate-800 md:text-white md:mix-blend-difference'}`}>
                TANGJAI
              </span>
              <span className="text-[10px] sm:text-xs text-emerald-600 font-medium tracking-wide">
                CORPORATION
              </span>
            </div>
          </a>

          {/* --- DESKTOP MENU (Original Style) --- */}
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
            
            {/* Contact Button (Desktop) */}
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
          MOBILE MENU (DRAWER) - Colorful & Vibrant
      ========================================= */}
      
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Drawer Container */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) lg:hidden flex flex-col overflow-hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* ✨ เพิ่ม Background Decoration (ลูกเล่นสีสันด้านหลัง) ✨ */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        {/* 1. Drawer Header */}
        <div className="relative pt-24 pb-6 px-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-2">
                <Sparkles size={12} /> Menu
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 leading-tight">
              ยินดีต้อนรับสู่ <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">TANGJAI CORP.</span>
            </h2>
        </div>

        {/* 2. Drawer Links List */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 custom-scroll relative z-10">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group relative flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 overflow-hidden border border-slate-100 shadow-sm
                bg-white hover:border-transparent hover:shadow-lg hover:shadow-emerald-200/50 hover:-translate-y-0.5"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex items-center gap-4">
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                  <item.icon size={20} strokeWidth={2.5} />
                </div>
                {/* Text */}
                <span className="font-bold text-slate-600 text-base group-hover:text-white transition-colors duration-300">
                    {item.label}
                </span>
              </div>

              {/* Arrow */}
              <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 text-slate-300 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                 <ChevronRight size={18} />
              </div>
            </a>
          ))}
        </div>

        {/* 3. Drawer Footer */}
        <div className="p-6 relative z-10 bg-white/60 backdrop-blur-sm border-t border-slate-100">
            <a
              href="#Contact"
              onClick={() => setOpen(false)}
              className="relative flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-lg text-white shadow-lg shadow-emerald-200 overflow-hidden group active:scale-[0.98] transition-transform"
            >
              {/* Button Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-[length:200%_100%] animate-gradientMove"></div>
              
              <div className="relative z-10 flex items-center gap-2">
                <PhoneCall size={20} className="animate-pulse" />
                <span>ติดต่อเราทันที</span>
              </div>
            </a>
            
            <p className="text-center text-[10px] text-slate-400 mt-4">
                © 2025 Tangjai Corporation. All rights reserved.
            </p>
        </div>
      </div>
      
      {/* CSS Animation for Gradient Button */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradientMove {
          animation: gradientMove 3s linear infinite;
        }
      `}</style>
    </>
  );
}