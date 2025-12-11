import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import productsData from '@/utils/products.json'

const categories: Record<string, { name: string; icon: string; description: string }> = {
  chocolates: {
    name: 'شوكولاتة',
    icon: '🍫',
    description: 'ألواح، بارات، ومحشيات بنكهات متعددة',
  },

  gummies: {
    name: 'جيلي وعلك',
    icon: '🐻',
    description: 'حلوى جيلي ودببة وعلك بنكهات الفواكه',
  },
  biscuits: {
    name: 'بسكويت وبارات',
    icon: '🍪',
    description: 'بسكويت، ويفر، وبارات حلوة وخفيفة',
  },
  'oriental-sweets': {
    name: 'حلويات شرقية',
    icon: '🌰',
    description: 'بقلاوة، معمول، وحلويات عربية فاخرة',
  },
}

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }))
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories[slug]

  if (!category) {
    return notFound()
  }

  const categoryProducts = productsData.filter((product: any) => product.categorySlug === slug)

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/categories" className="text-emerald-600 hover:text-emerald-700 mb-4 inline-block">
            ← العودة للفئات
          </Link>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{category.name}</h1>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg">لا توجد منتجات في هذه الفئة حالياً.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product: any) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <span className="text-sm text-gray-500">متوفر</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
