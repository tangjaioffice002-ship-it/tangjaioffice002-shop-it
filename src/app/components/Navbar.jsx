"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  PackageSearch,
  BadgeCheck,
  Newspaper,
  Users,
  PhoneCall,   // ← เพิ่มไอคอนโทรศัพท์
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm bg-white/90 border-b" : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/img/Logo.png"
            alt="TANGJAI"
            className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-bold text-emerald-700 text-sm sm:text-base">
              Tangjai Corporation
            </p>
            <p className="text-xs text-slate-500">ครุภัณฑ์การศึกษา</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium flex-1 justify-center">
          {[
            { href: "#home", label: "หน้าแรก", icon: Home },
            { href: "#AboutExecutives", label: "เกี่ยวกับ", icon: Info },
            { href: "#Services", label: "สินค้า", icon: PackageSearch },
            { href: "#News", label: "ข่าว", icon: Newspaper },
            { href: "#TrustedClients", label: "ลูกค้า", icon: Users },
            { href: "#Contact", label: "ติดต่อ", icon: PhoneCall }, // ← เพิ่ม
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-1 relative group"
            >
              <item.icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              <span className="transition-transform duration-200 group-hover:scale-105">
                {item.label}
              </span>

              {/* underline hover effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-white px-6 py-4 gap-4 border-t">
          {[
            { href: "#home", label: "หน้าแรก" },
            { href: "#AboutExecutives", label: "เกี่ยวกับ" },
            { href: "#Services", label: "สินค้า" },
            { href: "#News", label: "ข่าว" },
            { href: "#TrustedClients", label: "ลูกค้า" },
            { href: "#Contact", label: "ติดต่อ" }, // ← เพิ่ม
          ].map((item, i) => (
            <a key={i} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}