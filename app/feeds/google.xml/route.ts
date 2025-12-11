import products from '@/utils/products.json'
import { getProductImage } from '@/utils/imagePlaceholders'
import type { Product } from '@/types/product'

const BASE_URL = 'https://candyksa.com'


const categoryToGoogle = (categorySlug: string): string => {
  switch (categorySlug) {
    case 'chocolates':
      return 'Food, Beverages & Tobacco > Food Items > Candy & Chocolate'
    case 'candy':
      return 'Food, Beverages & Tobacco > Food Items > Candy & Chocolate'
    case 'gummies':
      return 'Food, Beverages & Tobacco > Food Items > Candy & Chocolate'
    case 'biscuits':
      return 'Food, Beverages & Tobacco > Food Items > Snack Foods'
    default:
      return 'Food, Beverages & Tobacco > Food Items'
  }
}

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const imageUrl = (productId: string): string => {
  const candidate = getProductImage(productId)
  if (candidate.startsWith('http')) return candidate
  return `${BASE_URL}${candidate}`
}

const renderItem = (product: Product): string => {
  const productUrl = escapeXml(`${BASE_URL}/products/${product.id}`)
  const img = escapeXml(imageUrl(product.id))
  const googleCategory = escapeXml(categoryToGoogle(product.categorySlug))
  const priceValue = `${product.price} SAR`

  return `
    <item>
      <g:id>${escapeXml(product.id)}</g:id>
      <g:title>${escapeXml(product.nameAr)}</g:title>
      <g:description>${escapeXml(product.shortDescription)}</g:description>
      <g:link>${productUrl}</g:link>
      <g:image_link>${img}</g:image_link>
      <g:availability>${product.availability === 'in_stock' ? 'in stock' : 'out of stock'}</g:availability>
      <g:condition>new</g:condition>
      <g:price>${priceValue}</g:price>
      <g:brand>${escapeXml(product.brand)}</g:brand>
      <g:mpn>${escapeXml(product.mpn)}</g:mpn>
      <g:google_product_category>${googleCategory}</g:google_product_category>
      <g:product_type>${escapeXml(product.category)}</g:product_type>
      <g:tax>
        <g:country>SA</g:country>
        <g:rate>15</g:rate>
        <g:tax_ship>yes</g:tax_ship>
      </g:tax>
    </item>
  `
}

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>كاندي السعودية - Candy Feed</title>
    <link>${BASE_URL}/</link>
    <description>كاندي السعودية - تشكيلة مختارة من الشوكولاتة والحلويات مع توصيل سريع.</description>
    ${(products as Product[]).map(renderItem).join('\n')}
  </channel>
</rss>`

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
    },
  })
}

