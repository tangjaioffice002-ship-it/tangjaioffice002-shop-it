"use client";

import { useState } from "react";
import { Users, Eye, Award, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import HistoryPage from "../components/History";
import Executives from "../components/Executives";
import StandardsPage from "../components/Standards";
import Vision from "../components/Vision";

export default function AboutExecutives() {
  const [activeTab, setActiveTab] = useState("history");

  const tabContent = {
    history: <HistoryPage />,
    executives: <Executives />,
    vision: <Vision />,
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
      className="relative w-full min-h-screen overflow-hidden font-sans bg-slate-50"
    >
      {/* Floating Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-150px] right-[-100px] w-[450px] h-[450px] bg-emerald-200/40 rounded-full blur-[110px] animate-floatSlow"></div>
        <div className="absolute bottom-[-150px] left-[-100px] w-[450px] h-[450px] bg-teal-200/40 rounded-full blur-[110px] animate-floatSlowDelay"></div>
      </div>

      <div className="pt-32 pb-16 md:pt-40 md:pb-24 relative z-10">

        {/* Dot Background */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[32px_32px] mask-[linear-gradient(to_bottom,black_80%,transparent)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10 md:mb-16 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-600 text-xs md:text-sm font-bold mb-5 shadow-sm">
              <History className="w-4 h-4" />
              <span>เกี่ยวกับ TANGJAI</span>
            </div>

            <h2 className="text-center text-3xl md:text-4xl font-bold leading-snug">
              โครงสร้างองค์กร
              <br className="block md:hidden" />
              <span className="text-emerald-600 md:ml-2">และความเป็นมา</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 animate-fadeInUp">
            <div className="flex flex-wrap justify-center gap-3 w-full max-w-2xl mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative flex items-center justify-center gap-2 px-5 py-3 rounded-full
                    text-sm md:text-base font-medium transition-all duration-300
                    whitespace-nowrap border 
                    ${
                      activeTab === tab.id
                        ? "text-white border-transparent scale-[1.07] shadow-md shadow-emerald-200"
                        : "text-slate-600 bg-white border-slate-200 shadow-sm hover:bg-slate-100"
                    }
                  `}
                >
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full -z-10"></div>
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
          <div className="max-w-7xl mx-auto animate-fadeInUp">

            <div
             className="bg-white rounded-3xl shadow-xl p-1 md:p-5 max-w-4xl mx-auto h-150">
              {/* Content */}
              <div className="px-2 py-5 sm:px-3 sm:py-8 md:px-4 md:py-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {tabContent[activeTab]}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
