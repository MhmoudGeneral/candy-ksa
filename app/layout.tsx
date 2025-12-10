import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/CartContext'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'كاندي السعودية - متجر الحلويات والشوكولاتة الأول',
  description:
    'كاندي السعودية وجهتك لكل ما لذ وطاب من شوكولاتة، حلوى، علك وجيلي مع توصيل سريع داخل المملكة.',
  keywords: 'كاندي, كاندي السعودية, حلويات, شوكولاتة, ام اند امز, جالاكسي, كادبوري, السعودية',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

