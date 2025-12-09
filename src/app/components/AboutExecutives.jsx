"use client";

import { useState } from "react";
import { Users, Eye, Award, History } from "lucide-react";
import HistoryPage from "../components/History";
import ExecutivesPage from "../components/Executives";
import StandardsPage from "../components/Standards";
import VisionPage from "../components/Vision";

export default function AboutExecutives() {
  const [activeTab, setActiveTab] = useState("history");

  const tabContent = {
    history: <HistoryPage />,
    executives: <ExecutivesPage />,
    vision: <VisionPage />,
    standards: <StandardsPage />,
  };

  const tabs = [
    { id: "history", label: "ประวัติความเป็นมา", icon: History },
    { id: "executives", label: "ผู้บริหาร", icon: Users },
    { id: "vision", label: "วิสัยทัศน์", icon: Eye },
    { id: "standards", label: "มาตรฐาน", icon: Award },
  ];

  return (
    <section
      id="AboutExecutives"
      // ✅ แก้ไข: เปลี่ยนจาก Gradient เขียว เป็นสีพื้น Slate-50 เหมือนหน้า News
      className="relative w-full min-h-screen overflow-hidden font-sans bg-slate-50"
    >
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">

        {/* BG decoration */}
        <div className="absolute inset-0 pointer-events-none">
          {/* ✅ แก้ไข: เปลี่ยนสีจุดจากเขียว (#d1fae5) เป็นเทา (#cbd5e1) เพื่อให้เข้ากับ bg-slate-50 */}
          <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-60 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"></div>
        </div>

        {/* BG soft glows (ยังคงแสงสีเขียวจางๆ ไว้เพื่อคุมโทน Brand แต่ปรับให้เข้ากับพื้นเทา) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[120px] mix-blend-multiply"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10 md:mb-16">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-600 text-xs md:text-sm font-bold mb-5 shadow-sm">
              <History className="w-4 h-4" />
              <span>เกี่ยวกับ TANGJAI</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
              โครงสร้างองค์กร
              <span className="text-emerald-600">
                {" "}และความเป็นมา
              </span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-wrap justify-center gap-2 w-full max-w-md md:max-w-4xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative flex items-center justify-center gap-2 px-5 py-3
                    rounded-full text-sm md:text-base font-medium transition-all duration-300
                    flex-1 sm:flex-none whitespace-nowrap
                    ${
                      activeTab === tab.id
                        ? "text-white scale-[1.02] shadow-md shadow-emerald-200"
                        : "text-slate-500 hover:text-emerald-600 hover:bg-slate-50"
                    }
                  `}
                >
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-emerald-500 rounded-full -z-10 animate-fadeScale"></div>
                  )}

                  <tab.icon
                    className={`w-4 h-4 md:w-5 md:h-5 ${
                      activeTab === tab.id ? "text-white" : "opacity-70"
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Box */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative min-h-[400px] transition-all duration-500">

              {/* Animated Border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-[length:200%_100%] animate-gradientMove"></div>

              <div className="p-5 sm:p-8 md:p-12">
                <div key={activeTab} className="animate-fadeInUp">
                  {tabContent[activeTab]}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeScale {
          animation: fadeScale 0.3s ease-out forwards;
        }
        .animate-gradientMove {
          animation: gradientMove 4s linear infinite;
        }
      `}</style>
    </section>
  );
}