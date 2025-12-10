import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import productsData from '@/utils/products.json'
import categoriesData from '@/utils/categories.json'

export default function HomePage() {
  const featuredProducts = productsData.slice(0, 8)

  return (
    <div>
      <Hero />

      {/* Categories */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-emerald-700 font-semibold">التصنيفات</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">اختر ذوقك المفضل</h2>
            </div>
            <Link href="/categories" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              عرض الكل →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categoriesData.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="rounded-2xl p-5 bg-white/70 backdrop-blur shadow-[0_20px_60px_-30px_rgba(219,39,119,0.45)] border border-pink-100 hover:-translate-y-1 hover:shadow-[0_25px_70px_-40px_rgba(16,185,129,0.55)] transition duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl">{category.icon}</div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    جديد يومياً
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-600 transition">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{category.hint}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-emerald-700 font-semibold">مختارات الشيف</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">اختياراتنا اللذيذة</h2>
            </div>
            <Link href="/categories" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              عرض الكل →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product: any) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden group"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.nameAr}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-emerald-600 transition">
                    {product.nameAr}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-emerald-600">
                      {new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(product.price)}
                    </span>
                    <span className="text-sm text-emerald-600">متوفر</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Candy Saudi */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
            لماذا كاندي السعودية؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-emerald-700">تشكيلة ماركات أصلية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                كل ما تحبه من M&M's، جالاكسي، كادبوري، سنيكرز وأوريو مع ضمان مصدر موثوق وتخزين مبرد.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-emerald-700">توصيل سريع ومعبأ بعناية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                نحافظ على درجة حرارة مناسبة ونستخدم تغليف يحافظ على الطراوة، مع تتبع للطلب حتى بابك.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-emerald-700">عروض وهدايا لكل مناسبة</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                صناديق هدايا، توزيعات، وحزم توفيرية للأعياد والمناسبات الخاصة، مع بطاقات إهداء مجانية.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Delivery & Freshness */}
      <section className="py-14 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                توصيل آمن ونكهات طازجة
              </h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                نغلف الشوكولاتة والحلويات بعناية، ونحافظ على برودة الشحن في الأجواء الحارة. اختر التوصيل
                السريع أو المجدول، واستمتع بتجربة سلسة من العربة حتى باب المنزل.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• تغليف مضاد للرطوبة يحافظ على القرمشة والطراوة</li>
                <li>• تتبع مباشر للحالة من التحضير وحتى التسليم</li>
                <li>• دعم عبر الواتساب لأي استفسار أو تعديل في الطلب</li>
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">شهادات واعتمادات</h3>
                  <div className="flex flex-wrap gap-3 items-center">
                    <Image src="/logos/Vision 2030-01.png" alt="Vision 2030" width={80} height={40} className="object-contain" />
                    <Image src="/logos/Saudi Tech-En-01.png" alt="Saudi Tech" width={80} height={40} className="object-contain" />
                    <Image src="/logos/VAT.png" alt="VAT" width={60} height={40} className="object-contain" />
                    <Image src="/logos/bus.svg" alt="Business" width={40} height={40} className="object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">وسائل الدفع المدعومة</h3>
                  <div className="flex flex-wrap gap-3 items-center">
                    <Image src="/logos/Visa-01.png" alt="Visa" width={60} height={30} className="object-contain" />
                    <Image src="/logos/Mastercard-01.png" alt="Mastercard" width={60} height={30} className="object-contain" />
                    <Image src="/logos/Mada-01.png" alt="Mada" width={60} height={30} className="object-contain" />
                    <Image src="/logos/Apple Pay-01.png" alt="Apple Pay" width={60} height={30} className="object-contain" />
                    <Image src="/logos/STC-pay-01.png" alt="STC Pay" width={60} height={30} className="object-contain" />
                    <Image src="/logos/Tamara.png" alt="Tamara" width={60} height={30} className="object-contain" />
                    <Image src="/logos/Madfu.png" alt="Madfu" width={60} height={30} className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

