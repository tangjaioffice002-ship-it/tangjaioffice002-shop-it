"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Calendar,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  Clock,
  X,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------- ข้อมูลจำลอง ------------------------- */
const news = [
  {
    id: 1,
    title: "โครงการปันน้ำใจ มอบอุปกรณ์การเรียนให้โรงเรียนขาดแคลน",
    date: "9 ธ.ค. 2568",
    image: "/img/88888.jpg",
    content:
      "เมื่อวันที่ 9 ธันวาคม 2568 เวลา 11.00 น. นายสนั่น สุตัญตั้งใจ ประธานบริษัท ทีเจซี คอร์ปอเรชั่น จำกัด และคณะผู้บริหาร พร้อมด้วย นายวีระพงษ์ ไตรศิวะกุล ที่ปรึกษาบริษัท ได้เดินทางไปมอบอุปกรณ์การเรียนการสอน สื่อเสริมพัฒนาการ และทุนการศึกษา ให้แก่นักเรียนระดับอนุบาล โรงเรียนเขื่องในเจริญราษฎร์ อ.เขื่องใน จ.อุบลราชธานี โดยมี นายสุริยา โทนุการ ผู้อำนวยการโรงเรียน เป็นผู้รับมอบด้วยความยินดีอย่างยิ่ง",
  },
   {
    id: 2,
    title: "ผู้บริหารมอบเงินช่วยเหลือพนักงานผู้ประสบอัคคีภัย",
    date: "8 ธ.ค. 2568",
    image: "/img/208574.jpg",
    content:
      "นายสนั่น สุตัญตั้งใจ ประธานบริษัททีเจซี คอร์ปอเรชั่น จำกัด และบริษัทในเครือทีเจซีกรุ๊ป มีความห่วงใยพนักงานที่ประสบความเดือดร้อน จึงได้มอบเงินช่วยเหลือฉุกเฉิน เครื่องอุปโภคบริโภค และน้ำดื่ม ให้แก่ครอบครัวของ นางสาวกัญญารัตน์ วงษ์แก้ว (น้องไอเดีย) พนักงานแผนกบัญชีและการเงิน ที่ประสบเหตุไฟไหม้บ้านเสียหายทั้งหลัง ณ อำเภอน้ำเกลี้ยง จังหวัดศรีสะเกษ เพื่อเป็นขวัญและกำลังใจในการดำเนินชีวิตต่อไป",
  },
  {
    id: 3,
    title: "กิจกรรมสานสัมพันธ์และเลี้ยงอาหารกลางวันพนักงาน ทีเจซีกรุ๊ป",
    date: "5 ธ.ค. 2568",
    image: "/img/1454.jpg",
    content:
      "บริษัท ทีเจซี คอร์ปอเรชั่น จำกัด และบริษัทในเครือ ขอขอบพระคุณ อาจารย์วีรพงษ์ ไตรศิวะกุล ที่ปรึกษาบริษัทฯ เป็นอย่างยิ่ง ที่ได้จัดกิจกรรมเลี้ยงอาหารกลางวันสุดพิเศษ ณ อาคาร 2 ชั้น 1 เมื่อวันพฤหัสบดีที่ 4 ธันวาคม 2568 เพื่อตอบแทนความทุ่มเทของพนักงานทุกท่าน บรรยากาศเต็มไปด้วยความอบอุ่น รอยยิ้ม และความเป็นกันเองระหว่างผู้บริหารและพนักงาน",
  },
  {
    id: 4,
    title: "พิธีลงนามบันทึกข้อตกลงความร่วมมือทางวิชาการ (MOU)",
    date: "14 พ.ย. 2568",
    image: "/img/aa1.jpg",
    content:
      "บริษัท ทีเจซี คอร์ปอเรชั่น จำกัด ได้จัดพิธีลงนามบันทึกข้อตกลงความร่วมมือ (MOU) ร่วมกับมหาวิทยาลัยชั้นนำ เพื่อแลกเปลี่ยนองค์ความรู้ทางวิชาการ พัฒนาหลักสูตรร่วมกัน และเปิดโอกาสให้นักศึกษาได้เข้ามาฝึกประสบการณ์วิชาชีพในสถานที่จริง",
  },
  {
    id: 5,
    title: "ร่วมสนับสนุนและส่งเสริมการแข่งขันกีฬาเยาวชนแห่งชาติ",
    date: "12 พ.ย. 2568",
    image: "/img/aa02.jpg",
    content:
      "บริษัทมีความมุ่งมั่นที่จะเป็นส่วนหนึ่งในการพัฒนาศักยภาพเยาวชนไทย ผ่านการสนับสนุนสมาคมกีฬาและกิจกรรมนันทนาการต่าง ๆ มุ่งเน้นการสร้างรากฐานที่มั่นคง ส่งเสริมสุขภาพที่ดี และปลูกฝังความมีน้ำใจนักกีฬาให้กับเยาวชนรุ่นใหม่ เพื่อเติบโตเป็นกำลังสำคัญของชาติต่อไป",
  },
  {
    id: 6,
    title: "ร่วมแสดงความยินดีและสนับสนุนทีมนักกีฬาปิงปองทีมชาติ",
    date: "6 มี.ค. 2568",
    image: "/img/aa3.png",
    content:
      "ขอแสดงความยินดีกับตัวแทนพนักงานและนักกีฬาในสังกัด ที่ได้รับคัดเลือกเป็นตัวแทนทีมชาติไทยในการแข่งขันระดับนานาชาติ บริษัทพร้อมสนับสนุนอุปกรณ์การฝึกซ้อมและงบประมาณอย่างเต็มที่เพื่อคว้าชัยชนะกลับมา",
  },
  {
    id: 7,
    title: "ประกาศผลการประกวดราคาอิเล็กทรอนิกส์ (E-Bidding)",
    date: "6 มิ.ย. 2567",
    image: "/img/aa2.jpg",
    content:
      "ประกาศรายละเอียดผลการจัดซื้อจัดจ้างประจำไตรมาสที่ 2 ผ่านระบบอิเล็กทรอนิกส์ เพื่อความโปร่งใสและตรวจสอบได้ สามารถดูรายชื่อผู้ชนะการเสนอราคาและรายละเอียดโครงการทั้งหมดได้ที่เอกสารแนบ",
  },
];


export default function News() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [clickStart, setClickStart] = useState(0);

  const [selectedNews, setSelectedNews] = useState(null);

  /* ------------------------- Drag Scroll Logic ------------------------- */
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setClickStart(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  const handleCardClick = (e, item) => {
    // ป้องกันการเปิด Modal หากมีการลากเกิน 5px
    if (Math.abs(e.pageX - clickStart) < 5) {
      setSelectedNews(item);
    }
  };

  /* ------------------------- Scroll Buttons ------------------------- */
  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 340;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  /* ------------------------- Auto Scroll ------------------------- */
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      if (selectedNews || isDragging) return;

      if (containerRef.current) {
        const container = containerRef.current;
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 20
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 4500);

    return () => clearInterval(autoScrollInterval);
  }, [selectedNews, isDragging]);

  return (
    <section
      id="News"
      className="relative bg-slate-50 py-16 md:py-24 font-sans overflow-hidden"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-60"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HEADER (ใช้ Motion แทน class custom) --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold mb-4 shadow-sm hover:shadow-md transition-shadow">
            <Megaphone size={16} className="text-emerald-500" />
            <span>ข่าวประชาสัมพันธ์</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            ข่าวสารและ
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              กิจกรรมล่าสุด
            </span>
          </h3>
        </motion.div>

        {/* --- CONTROLS --- */}
        <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-6 px-2 gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => scrollContainer("left")}
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollContainer("right")}
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL TRACK --- */}
        <div
          ref={containerRef}
          className={`
            flex space-x-6 overflow-x-auto pb-8 pt-2 px-2
            scroll-smooth snap-x snap-mandatory
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
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
              onMouseUp={(e) => handleCardClick(e, item)}
              className="
                relative shrink-0 w-[280px] sm:w-[320px] h-[350px] 
                snap-start bg-white rounded-3xl shadow-lg shadow-slate-200/50 
                hover:shadow-xl hover:shadow-emerald-100/50 hover:-translate-y-2 
                transition-all duration-300 border border-slate-100 
                overflow-hidden group flex flex-col cursor-pointer
              "
            >
              {/* Image Area */}
              <div className="h-[200px] w-full overflow-hidden relative shrink-0">
               
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1 p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-3">
                  <Calendar size={14} className="text-emerald-500" />
                  <span>{item.date}</span>
                </div>

                {/* Title */}
                <h4 className="font-bold text-[1.05rem] text-slate-800 mb-3 line-clamp-3 leading-snug group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* --- MODAL / POPUP --- */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="
                relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden 
                flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-white/90 rounded-full text-slate-500 hover:text-red-500 hover:bg-white shadow-md transition-all duration-200"
              >
                <X size={24} />
              </button>

              {/* Left: Image (Mobile=Top, Desktop=Left) */}
              <div className="w-full md:w-1/2 h-56 md:h-auto relative bg-slate-100 shrink-0">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                    {selectedNews.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Calendar size={12} /> {selectedNews.date}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                  {selectedNews.title}
                </h2>

                <div className="prose prose-slate prose-sm md:prose-base text-slate-600 leading-relaxed">
                  {selectedNews.content || selectedNews.title}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}