'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItems, getTotalPrice, clearCart } = useCart()
  const totalPrice = getTotalPrice()
  const shippingFee = 0
  const finalTotal = totalPrice + shippingFee

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/cart')
    }
  }, [cartItems, router])
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    district: '',
    street: '',
    building: '',
    apartment: '',
    postalCode: '',
    additionalNotes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const saudiCities = [
    'الرياض',
    'جدة',
    'مكة المكرمة',
    'المدينة المنورة',
    'الدمام',
    'الخبر',
    'الطائف',
    'بريدة',
    'خميس مشيط',
    'حائل',
    'جازان',
    'نجران',
    'أبها',
    'تبوك',
    'الباحة',
    'سكاكا',
    'عرعر',
    'جازان',
    'الجبيل',
    'ينبع',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Save order data to localStorage for thank you page
    const orderData = {
      ...formData,
      items: cartItems,
      total: finalTotal,
      orderId: `CND-${Date.now()}`,
    }
    localStorage.setItem('candy-last-order', JSON.stringify(orderData))

    setIsSubmitting(false)
    clearCart() // Clear cart after successful order

    // Redirect to thank you page
    router.push(`/thank-you?orderId=${orderData.orderId}`)
  }

  if (cartItems.length === 0) {
    router.push('/cart')
    return null
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">إتمام الطلب</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">معلومات التوصيل</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="05xxxxxxxx"
                    pattern="[0-9]{10}"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="example@email.com"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    المدينة <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">اختر المدينة</option>
                    {saudiCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">
                    الحي / المنطقة <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    required
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="أدخل اسم الحي أو المنطقة"
                  />
                </div>

                {/* Street */}
                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">
                    اسم الشارع <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    required
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="أدخل اسم الشارع"
                  />
                </div>

                {/* Building and Apartment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="building" className="block text-sm font-medium text-gray-700 mb-2">
                      رقم المبنى <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="building"
                      name="building"
                      required
                      value={formData.building}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="رقم المبنى"
                    />
                  </div>
                  <div>
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الشقة (اختياري)
                    </label>
                    <input
                      type="text"
                      id="apartment"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="رقم الشقة"
                    />
                  </div>
                </div>

                {/* Postal Code */}
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                    الرمز البريدي (اختياري)
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="12345"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                    ملاحظات إضافية (اختياري)
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows={4}
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="أي ملاحظات إضافية للموصل..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                </button>
              </form>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-gray-800">ملخص الطلب</h2>

              {/* Cart Items Summary */}
              <div className="mb-4 max-h-64 overflow-y-auto space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 pb-3 border-b">
                    <div className="relative w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.nameAr} fill className="object-cover" sizes="64px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{item.nameAr}</p>
                      <p className="text-xs text-gray-600">الكمية: {item.quantity}</p>
                      <p className="text-sm font-bold text-emerald-600">
                        {new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(
                          item.price * item.quantity
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>المجموع الفرعي</span>
                  <span>
                    {new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(totalPrice)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>الشحن</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-600 font-semibold">مجاني</span>
                    ) : (
                      new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(shippingFee)
                    )}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-800">
                    <span>الإجمالي</span>
                    <span>
                      {new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(finalTotal)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">طريقة الدفع</h3>
                <div className="flex items-center p-4 bg-emerald-50 border-2 border-emerald-500 rounded-lg shadow-sm">
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    checked // Always checked since it's the only option
                    readOnly // Make it read-only
                    className="w-5 h-5 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="cod" className="mr-3 text-gray-800 font-bold flex items-center gap-2">
                    الدفع عند الاستلام (شامل الضريبة)
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </label>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>ملاحظة:</strong> سنتواصل معك بعد إرسال الطلب لتأكيد العنوان وترتيب عملية التوصيل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

