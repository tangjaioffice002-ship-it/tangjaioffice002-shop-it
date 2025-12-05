"use client";

import React, { useRef, useState, useEffect } from "react";

/* ------------------------- รูปข่าวด้านล่าง ------------------------- */
const news = [
  { id: 1, title: "ร่วมสนับสนุนแข่งขันกีฬา", date: "12 พ.ย. 2025", image: "/img/aa02.jpg" },
  { id: 2, title: "ประกวดราคาอิเล็กทรอนิกส์", date: "6 มิ.ย. 2567", image: "/img/aa2.jpg" },
  { id: 3, title: "บันทึกข้อตกลงความร่วมมือ", date: "14 พ.ย. 2568", image: "/img/aa1.jpg" },
  { id: 4, title: "สนับสนุนทีมปิงปอง", date: "6 มี.ค. 2568", image: "/img/aa3.png" },
];

/* ------------------------- รูปสไลด์ด้านบน (เปลี่ยนได้) ------------------------- */
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
  const [loaded, setLoaded] = useState(false);

  /* ------------------------- Auto Slide ------------------------- */
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* ------------------------- Drag Scroll ------------------------- */
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <section id="News" className="bg-slate-50 py-16 font-sans">

      {/* ------------------------- TOP NEWS ------------------------- */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-green-500">

          {/* --- สไลด์หลายรูปด้านซ้าย --- */}
          <div className="w-full lg:w-1/2 h-80 lg:h-auto overflow-hidden relative bg-gray-200">
            <img
              src={topSlides[currentSlide]}
              onLoad={() => setLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            />

            {/* จุดบอกสถานะสไลด์ */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {topSlides.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>

          {/* --- เนื้อหาขวา --- */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-amber-600 text-sm font-semibold mb-2">ข่าวใหม่</span>

            <h2 className="text-3xl font-bold text-gray-800 leading-snug mb-4">
              กิจกรรมเลี้ยงอาหารกลางวันพนักงาน ที่เจซีกรุ๊ป
            </h2>

            <p className="text-gray-500 text-sm mb-6">พฤหัสบดี 4 ธ.ค. 2025</p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              บริษัท ทีเจซี คอร์ปอเรชั่น จำกัด ได้จัดกิจกรรมเลี้ยงอาหารกลางวันให้กับพนักงานทุกคน
              เพื่อสร้างความสุข ความอบอุ่นภายในองค์กร
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------- CAROUSEL ข่าวด้านล่าง ------------------------- */}
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800 text-center tracking-wide">
          ข่าวสาร & กิจกรรม
        </h3>

        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {news.map((item) => (
            <article
              key={item.id}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-80 xl:w-96 bg-white p-5 rounded-3xl shadow-md border border-green-400 hover:border-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative snap-start"
            >
              <div className="h-44 sm:h-48 md:h-56 w-full mb-4 rounded-xl overflow-hidden shadow-inner">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h4 className="font-semibold text-lg sm:text-xl mb-2 text-gray-800">{item.title}</h4>
              <p className="text-xs sm:text-sm text-gray-400">{item.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
