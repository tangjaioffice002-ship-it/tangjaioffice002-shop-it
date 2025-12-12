"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white to-emerald-100 flex flex-col justify-center items-center z-[9999] px-6">

      {/* Logo */}
      <div className="mb-6 drop-shadow-xl">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={140}
          height={140}
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
          priority
        />
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-emerald-900 text-center leading-tight">
        Tangjai <span className="text-yellow-600">Corporation</span>
      </h1>

      <p className="text-emerald-700/70 text-sm sm:text-base mt-3 text-center">
        SYSTEM LOADING...
      </p>

      <div className="w-56 sm:w-64 md:w-72 h-2 bg-emerald-300/40 mt-8 overflow-hidden rounded-full shadow-inner">
        <div className="bg-yellow-500 h-full animate-loading-bar"></div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
