"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Calendar, 
  ArrowRight, 
  Megaphone, 
  ChevronLeft, 
  ChevronRight, 
  Clock 
} from "lucide-react";

/* ------------------------- ข้อมูลจำลอง ------------------------- */
const news = [
  { id: 1, title: "ร่วมสนับสนุนแข่งขันกีฬาเยาวชน", date: "12 พ.ย. 2025", category: "CSR", image: "/img/aa02.jpg" },
  { id: 2, title: "ประกาศผลประกวดราคาอิเล็กทรอนิกส์", date: "6 มิ.ย. 2567", category: "ประกาศ", image: "/img/aa2.jpg" },
  { id: 3, title: "ลงนามบันทึกข้อตกลงความร่วมมือ (MOU)", date: "14 พ.ย. 2568", category: "องค์กร", image: "/img/aa1.jpg" },
  { id: 4, title: "สนับสนุนทีมนักกีฬาปิงปองทีมชาติ", date: "6 มี.ค. 2568", category: "CSR", image: "/img/aa3.png" },
  { id: 5, title: "อบรมพนักงานประจำปี 2025", date: "20 ธ.ค. 2025", category: "HR", image: "/img/aa02.jpg" },
];

const topSlides = [
  "/img/1240.jpg",
  "/img/bb312.jpg",
  "/img/bb313.jpg",
];

export default function News() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  /* ------------------------- Auto Slide Hero ------------------------- */
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  /* ------------------------- Drag Scroll Logic ------------------------- */
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  /* ------------------------- ปุ่มเลื่อนซ้าย-ขวา ------------------------- */
  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 350;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  /* ------------------------- Auto Scroll (มือถือ + คอม) ------------------------- */
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(autoScrollInterval);
  }, []);

  return (
    <section id="News" className="relative bg-slate-50 py-20 font-sans overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-60"></div>
        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold mb-4 border border-emerald-200 shadow-sm">
            <Megaphone size={14} />
            <span>News & Activities</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            ข่าวสารและ<span className="text-emerald-600">กิจกรรม</span>
          </h3>
        </div>

        {/* --- FEATURED NEWS HERO --- */}
        <div className="mb-20">
          <div className="bg-white rounded-4xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100 group">
            
            {/* Left: Slider */}
            <div className="w-full lg:w-3/5 h-[300px] lg:h-[450px] relative overflow-hidden bg-slate-200">
              {topSlides.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={src}
                    alt="Featured News"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-2000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                </div>
              ))}

              {/* Indicators */}
              <div className="absolute bottom-6 left-6 flex gap-2 z-10">
                {topSlides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === i ? "w-8 bg-emerald-400" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                 <Megaphone size={120} />
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-4">
                  ไฮไลท์ประจำสัปดาห์
                </span>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight mb-4">
                  กิจกรรมเลี้ยงอาหารกลางวันพนักงาน ประจำปี 2568
                </h2>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                  <Calendar size={16} />
                  <span>4 ธันวาคม 2025</span>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 font-light">
                  บริษัท ทีเจซี คอร์ปอเรชั่น จำกัด ได้จัดกิจกรรมเลี้ยงอาหารกลางวันให้กับพนักงานทุกคน
                  เพื่อกระชับความสัมพันธ์และสร้างบรรยากาศที่อบอุ่น
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- CAROUSEL SECTION --- */}
        <div className="relative">

          {/* Heading + Buttons */}
          <div className="flex justify-between items-end mb-8 px-2">
            <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Clock size={20} className="text-emerald-500"/>
              อัปเดตล่าสุด
            </h4>

            <div className="flex gap-2">
              <button 
                onClick={() => scrollContainer("left")}
                className="p-2 rounded-full border border-slate-200 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition"
              >
                <ChevronLeft size={20} />
              </button>

              <button 
                onClick={() => scrollContainer("right")}
                className="p-2 rounded-full border border-slate-200 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Draggable / Auto-scroll Container */}
          <div
            ref={containerRef}
            className={`
              flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-2
              ${isDragging ? "cursor-grabbing" : "cursor-grab"}
            `}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
          >
            {news.map((item) => (
              <article
                key={item.id}
                className="shrink-0 w-72 sm:w-80 snap-start bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden group h-full flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <div className="absolute top-3 left-3 z-10">
                     <span className="px-2 py-1 bg-white/90 text-[10px] font-bold text-slate-700 rounded-md shadow-sm uppercase">
                        {item.category}
                     </span>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    draggable="false"
                  />
                </div>

                <div className="p-5 flex flex-col grow">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                  
                  <h4 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
