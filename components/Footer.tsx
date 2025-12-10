import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#050505] text-white mt-auto pt-20 pb-10 overflow-hidden border-t-[3px] border-emerald-500/20 shadow-[0_-10px_40px_-15px_rgba(16,185,129,0.3)]">

      {/* Background Glows */}
      <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-600/5 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative h-20 w-20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <Image src="/logo.png" alt="شعار كاندي السعودية" fill sizes="80px" className="object-contain" />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:text-emerald-400 transition-colors duration-300">
                  كاندي <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">السعودية</span>
                </h3>
                <p className="text-xs font-semibold tracking-widest text-emerald-500/80 uppercase mt-1">Candy KSA Store</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-7 pr-2 border-r-2 border-gray-800">
              استكشف عالماً من السعادة مع تشكيلتنا الفاخرة من الحلويات المستوردة والمحلية.
              <br />
              <span className="text-emerald-400/80 text-xs">جودة مضمونة • توصيل مبرد • خدمة مميزة</span>
            </p>

            <div className="flex gap-3 pt-6">
              {/* WhatsApp Button */}
              <a
                href="https://api.whatsapp.com/send/?phone=966594386234&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:-translate-y-1 group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>تواصل معنا عبر واتساب</span>
              </a>
            </div>
          </div>

          {[
            { title: 'روابط هامة', links: ['الرئيسية', 'الحلويات', 'الهدايا', 'عن كاندي'] },
            { title: 'خدمة العملاء', links: ['تتبع الطلب', 'أسئلة شائعة', 'اتصل بنا', 'الفروع'] },
            { title: 'السياسات', links: ['شروط وأحكام', 'سياسة الخصوصية', 'الاسترجاع والاستبدال', 'سياسة الإلغاء'] }
          ].map((section, idx) => (
            <div key={idx} className="lg:col-span-2">
              <h4 className="text-lg font-bold text-white mb-6 relative inline-block pb-2">
                {section.title}
                <span className="absolute bottom-0 right-0 w-2/3 h-[3px] bg-gradient-to-l from-emerald-500 to-transparent rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 text-sm hover:text-emerald-300 transition-all duration-300 hover:tracking-wide hover:translate-x-[-5px] flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_#34d399] transition-all duration-300"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block pb-2">
              تواصل معنا
              <span className="absolute bottom-0 right-0 w-2/3 h-[3px] bg-gradient-to-l from-emerald-500 to-transparent rounded-full"></span>
            </h4>
            <a href="tel:+966532864369" className="block bg-gray-900/50 hover:bg-gray-800 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-4 transition-all duration-300 group">
              <p className="text-xs text-gray-500 mb-1">مركز المساعدة</p>
              <div className="flex items-center gap-3 text-emerald-400 font-bold">
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span dir="ltr">+966 53 286 4369</span>
              </div>
            </a>
            <a href="mailto:support@candyksa.com" className="block bg-gray-900/50 hover:bg-gray-800 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-4 transition-all duration-300 group">
              <p className="text-xs text-gray-500 mb-1">الدعم الفني</p>
              <div className="flex items-center gap-3 text-emerald-400 font-bold">
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>support@candyksa.com</span>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800/50 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <span className="text-gray-500 text-sm">© {currentYear} كاندي السعودية. جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <Image src="/logos/Vision 2030-01.png" alt="Vision 2030" width={60} height={35} className="object-contain invert brightness-0 hover:brightness-100 hover:invert-0 transition-all" />
            <div className="w-px h-6 bg-gray-800"></div>
            <Image src="/logos/Mada-01.png" alt="Mada" width={40} height={25} className="object-contain" />
            <Image src="/logos/Visa-01.png" alt="Visa" width={40} height={25} className="object-contain" />
            <Image src="/logos/Mastercard-01.png" alt="Mastercard" width={40} height={25} className="object-contain" />
          </div>
        </div>
      </div>
    </footer>
  )
}
