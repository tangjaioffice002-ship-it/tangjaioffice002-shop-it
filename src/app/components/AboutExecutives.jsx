"use client";

import { useState } from "react";
import { Users, Eye, Award, History } from "lucide-react";
import HistoryPage from "../components/History";
import ExecutivesPage from "../components/Executives"
import StandardsPage from "../components/Standards";
import VisionPage from "../components/Vision";


export default function AboutExecutives() {
  const [activeTab, setActiveTab] = useState("history");

  // เนื้อหาของแต่ละหน้า
  const tabContent = {
    history: (
      <div>
        <HistoryPage/>
      </div>
    ),

    executives: (
      <div>
       <ExecutivesPage/>
      </div>
    ),

    vision: (
      <div>
      <VisionPage/>
      </div>
    ),

    standards: (
      <div>
       <StandardsPage/>
      </div>
    ),
  };

  return (
    <>
      {/* Section Header */}
      <div id="AboutExecutives" className="text-center mb-16 mt-16">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-100 text-emerald-700 text-lg md:text-xl font-bold mb-6 shadow-sm">
          <History className="w-6 h-6" />
          เกี่ยวกับ TANGJAI
        </div>
        <div className="h-1.5 w-28 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto"></div>
      </div>

      {/* Navigation Tabs */}
      <div className="w-full flex justify-center mt-8 mb-10">
        <div className="flex flex-wrap gap-4 justify-center">

          {/* ปุ่ม 1 */}
          <button
            onClick={() => setActiveTab("history")}
            className={`px-6 py-3 flex items-center gap-2 rounded-full border transition-all shadow-sm ${
              activeTab === "history"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-emerald-600 hover:text-white"
            }`}
          >
            <History className="w-5 h-5" />
            ประวัติความเป็นมา
          </button>

          {/* ปุ่ม 2 */}
          <button
            onClick={() => setActiveTab("executives")}
            className={`px-6 py-3 flex items-center gap-2 rounded-full border transition-all shadow-sm ${
              activeTab === "executives"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-emerald-600 hover:text-white"
            }`}
          >
            <Users className="w-5 h-5" />
            ผู้บริหาร
          </button>

          {/* ปุ่ม 3 */}
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-6 py-3 flex items-center gap-2 rounded-full border transition-all shadow-sm ${
              activeTab === "vision"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-emerald-600 hover:text-white"
            }`}
          >
            <Eye className="w-5 h-5" />
            วิสัยทัศน์
          </button>

          {/* ปุ่ม 4 */}
          <button
            onClick={() => setActiveTab("standards")}
            className={`px-6 py-3 flex items-center gap-2 rounded-full border transition-all shadow-sm ${
              activeTab === "standards"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-emerald-600 hover:text-white"
            }`}
          >
            <Award className="w-5 h-5" />
            มาตรฐาน
          </button>
        </div>
      </div>

      {/* Content Box (กรอบเนื้อหา) */}
      <div className="max-w-4xl mx-auto mt-6 mb-20">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-emerald-100">
          {tabContent[activeTab]}
        </div>
      </div>
    </>
  );
}
