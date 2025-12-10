import { MetadataRoute } from 'next'
import productsData from '@/utils/products.json'

const BASE_URL = 'https://candyksa.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/about',
        '/categories',
        '/sell',
        '/join-us',
        '/cart',
        '/policies/privacy',
        '/policies/shipping',
        '/policies/returns',
        '/policies/terms',
        '/policies/use-policy',
        '/policies/cancel-policy',
        '/policies/points-po',
        '/policies/refund-policy',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 1,
    }))

    const products = productsData.map((product) => ({
        url: `${BASE_URL}/products/${product.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const categories = Array.from(new Set(productsData.map((p) => p.categorySlug))).map((slug) => ({
        url: `${BASE_URL}/categories/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [...routes, ...products, ...categories]
}
