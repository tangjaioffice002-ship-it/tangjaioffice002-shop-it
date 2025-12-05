export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-emerald-50 via-slate-100 to-amber-50 text-slate-700 py-14 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div className="flex flex-col space-y-4">
          <img
            src="/img/Logo.png"
            alt="logo"
            className="w-36 sm:w-40"
          />
          <p className="text-sm text-slate-600 leading-relaxed">
            บริษัทของเรามุ่งมั่นในการให้บริการที่ดีที่สุด
            <span className="block mt-1">พร้อมความใส่ใจในทุกรายละเอียด</span>
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-emerald-700">เมนูหลัก</h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li><a href="#home" className="hover:text-emerald-600 transition">หน้าแรก</a></li>
            <li><a href="#services" className="hover:text-emerald-600 transition">บริการ</a></li>
            <li><a href="#about" className="hover:text-emerald-600 transition">เกี่ยวกับเรา</a></li>
            <li><a href="#contact" className="hover:text-emerald-600 transition">ติดต่อเรา</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-6">

          {/* Title */}
          <h3 className="text-lg font-semibold text-emerald-700">ติดต่อ</h3>

          {/* Contact Info */}
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-lg">📍</span>
              <p>311 หมู่ 4 บ้านเพียเพ้า ต.คำน้ำแซบ อ.วารินชำราบ จ.อุบลราชธานี 34190</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg">📞</span>
              <p>082-4740111</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg">✉️</span>
              <p>tangjai.office002@gmail.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="space-y-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Tangjaicorporation/?locale=th_TH"
              target="_blank"
              className="flex items-start gap-3 hover:text-emerald-600 transition"
            >
              <img src="/img/1112233.png" className="w-6 h-6" alt="facebook" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Facebook</span>
                <span className="text-xs text-slate-500">
                  บริษัท ตั้งใจคอร์ปอเรชั่น จำกัด
                </span>
              </div>
            </a>

            {/* Line */}
            <a
              href="https://line.me/R/ti/p/yourlineid"
              target="_blank"
              className="flex items-center gap-3 hover:text-emerald-600 transition"
            >
              <img src="/img/1234.png" className="w-6 h-6" alt="line" />
              <span className="text-sm font-medium">Line</span>
            </a>

          </div>
        </div>


        {/* Additional Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-emerald-700">เพิ่มเติม</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            เรานำเสนอสินค้าคุณภาพและบริการที่ครบวงจร เพื่อตอบสนองความต้องการของลูกค้าอย่างมืออาชีพ
            <span className="block mt-1">พร้อมความเอาใจใส่ในทุกขั้นตอน</span>
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-300 mt-12 pt-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} TANGJAI Corporation. All rights reserved.
      </div>
    </footer>
  );
}
