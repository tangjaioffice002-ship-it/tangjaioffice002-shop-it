"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
            bg-white/10 backdrop-blur-sm border border-white/20 
            text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          ครบจบทุกครุภัณฑ์การศึกษา
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight md:leading-[1.2] 
            text-white mb-4 sm:mb-6 drop-shadow-xl wrap-break-word"
        >
          TANGJAI —{" "}
          <span className="block sm:inline text-emerald-400">
            ครุภัณฑ์การศึกษาคุณภาพ
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm sm:text-base md:text-lg text-gray-200 
            max-w-xl md:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-2"
        >
          TANGJAI ก่อตั้งโดยทีมงานผู้เชี่ยวชาญด้านการศึกษาและงานติดตั้ง
          เรามุ่งส่งมอบอุปกรณ์ที่ได้มาตรฐาน ใช้งานได้จริง
          พร้อมบริการหลังการขายที่เชื่อถือได้
        </motion.p>

        {/* Stats Boxes */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
        >
          {[ 
            { label: "มาตรฐาน", value: "ISO 9001", value2: "ISO 14001" },
            { label: "ลูกค้าหลัก", value: "โรงเรียนรัฐบาล", value2: "" },
            { label: "บริการ", value: "ติดตั้งครบวงจร", value2: "บริการจัดส่งถึงที่" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 
                p-3 sm:p-4 rounded-xl shadow-lg text-center"
            >
              <p className="text-[10px] sm:text-xs text-emerald-200/80 uppercase tracking-wider font-semibold mb-1">
                {stat.label}
              </p>
              <p className="font-bold text-white text-base sm:text-lg">
                {stat.value}
              </p>
              <p className="font-bold text-white text-base sm:text-lg">
                {stat.value2}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}