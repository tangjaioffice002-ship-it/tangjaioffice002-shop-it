"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Standards() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      title: "ISO 9001",
      subtitle: "มาตรฐานระบบบริหารคุณภาพ",
      image: "/img/1111.jpg",
    },
    {
      title: "ISO 24001",
      subtitle: "มาตรฐานด้านสิ่งแวดล้อม",
      image: "/img/1112.jpg",
    },
  ];

  return (
    <section
      id="standards"
      className={`${prompt.className} scroll-mt-32 py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50`}
      style={{ fontFamily: "'Prompt', 'Sarabun', sans-serif" }}
    >
      {/* Container ย่อให้สมดุล */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            การรับรองมาตรฐานสากล
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-600 text-sm font-light">
            เครื่องหมายยืนยันคุณภาพและความมุ่งมั่นของเรา
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center cursor-pointer group h-[400px]" // กำหนดความสูงเต็ม
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image Box */}
              <div className="relative w-full max-w-xs flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-white to-emerald-50 shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-green-400/5"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative w-full h-full object-cover p-4 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="font-bold text-xl text-gray-800 tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1 font-light">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal แสดงแบบเต็มขนาด */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[999] animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ปุ่ม X */}
            <button
              className="absolute -top-3 -right-3 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-emerald-50 hover:rotate-90 transition-all duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* รูปใหญ่เต็มขนาด */}
            <img
              src={selectedImage}
              alt="certificate"
              className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
      `}</style>
    </section>
  );
}
