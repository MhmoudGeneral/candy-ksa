'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const cartItemsCount = getTotalItems()

  const navLinkClass =
    'text-gray-700 hover:text-emerald-600 font-medium transition'

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-14 md:h-16 md:w-16">
              <Image
                src="/logo.png"
                alt="شعار كاندي السعودية"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-emerald-600">
                كاندي السعودية
              </span>
              <span className="text-xs text-gray-600">
                متجر الحلويات والشوكولاتة الأول في المملكة
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className={navLinkClass}>
              الرئيسية
            </Link>
            <Link href="/categories" className={navLinkClass}>
              الحلويات
            </Link>
            <Link href="/about" className={navLinkClass}>
              عن كاندي
            </Link>
            <Link href="/sell" className={navLinkClass}>
              توريد بالجملة
            </Link>
            <Link href="/join-us" className={navLinkClass}>
              شركاء كاندي
            </Link>
          </nav>

          {/* Cart & Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse text-sm">
            <Link href="/cart" className="relative text-gray-600 hover:text-emerald-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <a href="tel:+966532864369" className="text-gray-600 hover:text-emerald-600">
              +966532864369            </a>
            <a href="mailto:support@candyksa.com" className="text-gray-600 hover:text-emerald-600">
              support@candyksa.com
            </a>
          </div>

          {/* Mobile Cart & Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative text-gray-700 hover:text-emerald-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600"
              aria-label="قائمة"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={navLinkClass}>
                الرئيسية
              </Link>
              <Link href="/categories" className={navLinkClass}>
                الحلويات
              </Link>
              <Link href="/about" className={navLinkClass}>
                عن كاندي
              </Link>
              <Link href="/sell" className={navLinkClass}>
                توريد بالجملة
              </Link>
              <Link href="/join-us" className={navLinkClass}>
                شركاء كاندي
              </Link>
              <a href="tel:+966532864369" className="text-gray-600 hover:text-emerald-600">
                +966532864369                  </a>
              <a href="mailto:support@candyksa.com" className="text-gray-600 hover:text-emerald-600">
                support@candyksa.com
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

