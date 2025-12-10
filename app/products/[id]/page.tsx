import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import productsData from '@/utils/products.json'
import AddToCartButton from '@/components/AddToCartButton'

// Generate fake reviews based on product ID to ensure variety
const generateReviews = (productId: string) => {
  const allReviews = [
    { name: 'أحمد محمد', comment: 'منتج رائع جداً! الجودة ممتازة والتوصيل كان سريعاً. أنصح الجميع بشرائه.' },
    { name: 'فاطمة علي', comment: 'جيد جداً، لكن السعر مرتفع قليلاً. بشكل عام راضية عن الشراء.' },
    { name: 'خالد عبدالله', comment: 'أفضل منتج اشتريته! الجودة ممتازة والتوصيل سريع. شكراً كاندي السعودية.' },
    { name: 'سارة أحمد', comment: 'خدمة عملاء ممتازة ومنتج أصلي. التوصيل كان خلال يومين فقط.' },
    { name: 'محمد سالم', comment: 'منتج جيد بجودة عالية. التغليف كان احترافياً والمنتج وصل بحالة ممتازة.' },
    { name: 'نورة سعد', comment: 'لذيذ جداً وطازج، أعجب العائلة كلها.' },
    { name: 'عبدالرحمن العزيز', comment: 'وصلني المنتج بحالة جيدة، لكن تأخر يوماً واحداً عن الموعد.' },
    { name: 'ريما القحطاني', comment: 'التغليف فاخر ومناسب جداً للهدايا.' },
    { name: 'سلطان الحربي', comment: 'الطعم خيالي ولا يقاوم، سأطلب مرة أخرى بالتأكيد.' },
    { name: 'منى الشمري', comment: 'تجربة ممتازة من الطلب للتوصيل، شكراً لكم.' },
    { name: 'فيصل العتيبي', comment: 'المنتج ممتاز ولكن ياليت توفرون أحجام أكبر.' },
    { name: 'عبير ناصر', comment: 'جودة عالمية وسعر منافس.' },
  ];

  // Simple string hash to number
  const hash = productId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  // Deterministic random generator based on hash
  const seededRandom = (seed: number) => {
    let t = seed;
    return () => {
      t = (t * 1664525 + 1013904223) % 4294967296;
      return t / 4294967296;
    };
  };

  const rand = seededRandom(hash);
  const numberOfReviews = Math.floor(rand() * 3) + 3; // 3 to 5 reviews
  const selectedReviews = [];
  const availableReviews = [...allReviews];

  for (let i = 0; i < numberOfReviews; i++) {
    if (availableReviews.length === 0) break;
    const index = Math.floor(rand() * availableReviews.length);
    const review = availableReviews.splice(index, 1)[0];

    // Generate a random date relative to now
    const daysAgo = Math.floor(rand() * 30) + 1;
    let dateStr = '';
    if (daysAgo === 1) dateStr = 'منذ يوم';
    else if (daysAgo === 2) dateStr = 'منذ يومين';
    else if (daysAgo <= 10) dateStr = `منذ ${daysAgo} أيام`;
    else if (daysAgo <= 30) dateStr = `منذ ${Math.floor(daysAgo / 7) || 1} أسابيع`;

    // Generate random rating 4 or 5
    const rating = rand() > 0.3 ? 5 : 4;

    selectedReviews.push({
      ...review,
      rating,
      date: dateStr,
    });
  }

  return selectedReviews;
}

export async function generateStaticParams() {
  return productsData.map((product: any) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = productsData.find((p: any) => p.id === id)

  if (!product) {
    return notFound()
  }

  const reviews = generateReviews(product.id)
  const relatedProducts = productsData
    .filter((p: any) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="bg-gradient-to-br from-white via-pink-50 to-emerald-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <Link href="/categories" className="text-emerald-700 hover:text-emerald-800 font-semibold">
            ← العودة للحلويات
          </Link>
          <div className="flex gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-white border border-pink-100 text-pink-700">حلا مختار</span>
            <span className="px-3 py-1 rounded-full bg-white border border-emerald-100 text-emerald-700">توصيل مبرد</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative bg-white/90 backdrop-blur rounded-3xl border border-pink-100 shadow-[0_24px_70px_-40px_rgba(16,185,129,0.4)] overflow-hidden">
            <div className="relative h-[420px] bg-gradient-to-br from-pink-50 via-white to-emerald-50">
              <Image
                src={product.image}
                alt={product.nameAr}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-emerald-700 shadow">
                  {product.category}
                </span>
                {product.availability === 'in_stock' ? (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow">
                    متوفر
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white shadow">
                    غير متوفر
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white/95 backdrop-blur rounded-3xl border border-pink-100 shadow-[0_24px_70px_-40px_rgba(16,185,129,0.4)] p-8 space-y-6">
            <div className="space-y-3">
              <p className="text-sm text-emerald-700 font-semibold">كاندي السعودية</p>
              <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">{product.nameAr}</h1>
              <p className="text-gray-600 leading-relaxed">{product.shortDescription}</p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-4xl font-bold text-emerald-600">
                  {new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(product.price)}
                </span>
                <p className="text-sm text-gray-500 mt-1">شامل ضريبة القيمة المضافة (15%)</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-sm text-gray-500">العلامة التجارية</p>
                <p className="font-semibold text-gray-900">{product.brand}</p>
                <p className="text-xs text-gray-500">رمز المنتج: {product.mpn}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                <h3 className="font-semibold text-emerald-800 mb-2">الشحن والتخزين</h3>
                <p className="text-sm text-gray-700">
                  🚚 توصيل مبرد 1-2 يوم للمدن الرئيسية، و2-4 أيام لباقي المناطق. شحن مجاني للطلبات 150 ريال+.
                </p>
              </div>
              <div className="rounded-2xl bg-pink-50 border border-pink-100 p-4">
                <h3 className="font-semibold text-pink-800 mb-2">النكهة والجودة</h3>
                <p className="text-sm text-gray-700">
                  تغليف يحافظ على القوام والنكهة، ويتم فحص الدفعات دورياً للتأكد من الطزاجة.
                </p>
              </div>
            </div>

            {product.ingredients && product.ingredients.length > 0 && (
              <div className="rounded-2xl bg-white border border-pink-100 p-4 space-y-2">
                <h3 className="font-semibold text-gray-900">المكونات</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex items-center justify-between border border-pink-100 rounded-xl px-4 py-3 bg-white">
                <span className="font-semibold">الفئة</span>
                <Link href={`/categories/${product.categorySlug}`} className="text-emerald-700 hover:text-emerald-800">
                  {product.category}
                </Link>
              </div>
              <div className="flex items-center justify-between border border-pink-100 rounded-xl px-4 py-3 bg-white">
                <span className="font-semibold">التوفر</span>
                <span className="text-emerald-700">{product.availability === 'in_stock' ? 'جاهز للشحن' : 'غير متوفر'}</span>
              </div>
            </div>

            <AddToCartButton
              product={{
                id: product.id,
                nameAr: product.nameAr,
                price: product.price,
                image: product.image,
                category: product.category,
              }}
            />
            <Link
              href="/cart"
              className="block w-full text-center px-6 py-4 bg-gray-200 text-gray-800 rounded-xl font-semibold text-lg hover:bg-gray-300 transition"
            >
              عرض السلة
            </Link>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-white rounded-3xl border border-pink-100 shadow-[0_24px_70px_-40px_rgba(16,185,129,0.4)] p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">الوصف التفصيلي</h2>
          <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
            {product.description}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-3xl border border-pink-100 shadow-[0_24px_70px_-40px_rgba(16,185,129,0.4)] p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">التقييمات</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="border-b pb-6 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{review.comment}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">منتجات مشابهة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct: any) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-2xl border border-pink-100 shadow hover:shadow-lg transition overflow-hidden group"
                >
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.nameAr}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition">
                      {relatedProduct.nameAr}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedProduct.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-emerald-600">
                        {new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(
                          relatedProduct.price
                        )}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                        متوفر
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

