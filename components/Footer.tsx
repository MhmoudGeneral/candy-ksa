import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-[#0f172a] text-white mt-auto">
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-16 w-16">
                <Image src="/logo.png" alt="شعار كاندي السعودية" fill sizes="64px" className="object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-emerald-300">كاندي السعودية</h3>
                <p className="text-sm text-gray-300">حلا أصلي بتوصيل سريع</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              متجر سعودي للحلويات والشوكولاتة المختارة بعناية. تغليف مبرد، شحن سريع، وباقات هدايا جاهزة
              للمناسبات.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-600 text-xs font-semibold">توصيل مبرد</span>
              <span className="px-3 py-1 rounded-full bg-pink-600 text-xs font-semibold">منتجات أصلية</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-emerald-100 border border-white/10">
                دعم واتساب
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-300">روابط</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link href="/categories" className="hover:text-emerald-300 transition">الفئات</Link></li>
              <li><Link href="/sell" className="hover:text-emerald-300 transition">توريد بالجملة</Link></li>
              <li><Link href="/join-us" className="hover:text-emerald-300 transition">الانضمام للفريق</Link></li>
              <li><Link href="/about" className="hover:text-emerald-300 transition">عن كاندي</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-300">السياسات</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link href="/policies/terms" className="hover:text-emerald-300 transition">شروط وأحكام</Link></li>
              <li><Link href="/policies/privacy" className="hover:text-emerald-300 transition">سياسة الخصوصية</Link></li>
              <li><Link href="/policies/refund-policy" className="hover:text-emerald-300 transition">الاسترجاع والاستبدال</Link></li>
              <li><Link href="/policies/cancel-policy" className="hover:text-emerald-300 transition">سياسة الإلغاء</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-1 text-emerald-300">تواصل معنا</h4>
            <p className="text-sm text-gray-200">يومياً 9 صباحاً - 10 مساءً</p>
            <div className="space-y-2 text-sm text-gray-200">
              <a href="mailto:support@candyksa.com" className="flex items-center gap-2 hover:text-emerald-300 transition">
                <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
                support@candyksa.com
              </a>
              <a href="tel:+966532864369" className="flex items-center gap-2 hover:text-emerald-300 transition">
                <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
                +966532864369
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=966594386234&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-300 transition"
              >
                <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
                دعم واتساب
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Image src="/logos/Visa-01.png" alt="Visa" width={50} height={28} className="object-contain" />
              <Image src="/logos/Mastercard-01.png" alt="Mastercard" width={50} height={28} className="object-contain" />
              <Image src="/logos/Mada-01.png" alt="Mada" width={50} height={28} className="object-contain" />
              <Image src="/logos/Apple Pay-01.png" alt="Apple Pay" width={50} height={28} className="object-contain" />
              <Image src="/logos/STC-pay-01.png" alt="STC Pay" width={50} height={28} className="object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-3">
            <Image src="/logos/Vision 2030-01.png" alt="Vision 2030" width={70} height={40} className="object-contain" />
            <Image src="/logos/VAT.png" alt="VAT" width={45} height={40} className="object-contain" />
            <Image src="/logos/bus.svg" alt="Business" width={40} height={40} className="object-contain" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-semibold text-emerald-300">حلاكم يوصل بطعم جديد كل يوم</p>
            <p className="text-gray-400 text-xs">© {currentYear} كاندي السعودية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

