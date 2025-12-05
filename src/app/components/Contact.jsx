"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50 font-sans">

      {/* CONTACT CONTENT */}
      <section id="Contact" className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* CONTACT METHODS */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-wide">
            ช่องทางการติดต่อ
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* PHONE CARD */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="p-5 bg-emerald-100 rounded-3xl group-hover:bg-emerald-600 transition-all duration-300 mb-6">
                  <Phone className="w-9 h-9 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">โทรศัพท์</h3>
                <a
                  href="tel:082-4740111"
                  className="text-emerald-600 font-bold text-2xl hover:text-emerald-700 transition-colors mb-2"
                >
                  082-4740111
                </a>
                <p className="text-sm text-gray-500">จันทร์-เสาร์ | 8:00-17:00 น.</p>
              </div>
            </div>

            {/* EMAIL CARD */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="p-5 bg-emerald-100 rounded-3xl group-hover:bg-emerald-600 transition-all duration-300 mb-6">
                  <Mail className="w-9 h-9 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">อีเมล</h3>
                <a
                  href="mailto:tangjai.office002@gmail.com"
                  className="text-emerald-600 font-semibold text-lg hover:text-emerald-700 transition-colors whitespace-nowrap mb-2"
                >
                  tangjai.office002@gmail.com
                </a>
                <p className="text-sm text-gray-500">ตอบกลับภายใน 24 ชั่วโมง</p>
              </div>
            </div>

            {/* ADDRESS CARD */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="p-5 bg-emerald-100 rounded-3xl group-hover:bg-emerald-600 transition-all duration-300 mb-6">
                  <MapPin className="w-9 h-9 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">ที่ตั้งสำนักงาน</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  เลขที่ 311 หมู่ 4<br />
                  บ้านเพียเพ้า ต.คำน้ำแซบ<br />
                  อ.วารินชำราบ<br />
                  จ.อุบลราชธานี 34190
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-wide">
            แผนที่ตั้งสำนักงาน
          </h2>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <iframe
              title="บริษัท TANGJAI Location"
              src="https://www.google.com/maps?q=15.2034409,104.8142970&hl=th&z=18&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

      </section>
    </main>
  );
}
