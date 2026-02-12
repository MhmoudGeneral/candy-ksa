'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'


import { useCart } from '@/contexts/CartContext'

declare global {
  interface Window {
    renderOptIn: any
    gapi: any
  }
}

function ThankYouContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const [orderData, setOrderData] = useState<any>(null)
  const { clearCart } = useCart()

  useEffect(() => {
    // Try to get order data from localStorage if available
    const savedOrder = localStorage.getItem('candy-last-order')
    if (savedOrder) {
      // Clean up the processing flag from checkout
      localStorage.removeItem('candy-last-order-processing')

      try {
        const parsedOrder = JSON.parse(savedOrder)
        setOrderData(parsedOrder)

        // Clear the cart here once we successfully loaded the order
        clearCart()

        // Estimated delivery date (current date + 3 days)
        const deliveryDate = new Date()
        deliveryDate.setDate(deliveryDate.getDate() + 3)
        const deliveryDateString = deliveryDate.toISOString().split('T')[0]

        // Prepare products array for the survey
        const products = parsedOrder.items?.map((item: any) => ({
          "gtin": item.id // Using ID as GTIN/MPN since we don't have separate GTIN, hope this matches feed
        })) || []

        // Load Google Customer Reviews script
        window.renderOptIn = function () {
          window.gapi.load('surveyoptin', function () {
            window.gapi.surveyoptin.render(
              {
                "merchant_id": 5693889497,
                "order_id": parsedOrder.orderId,
                "email": parsedOrder.email,
                "delivery_country": "SA",
                "estimated_delivery_date": deliveryDateString,
                "products": products
              });
          });
        }

        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/platform.js?onload=renderOptIn'
        script.async = true
        script.defer = true
        document.body.appendChild(script)

        return () => {
          // Cleanup if needed, though usually fine to leave for page lifetime
          try {
            document.body.removeChild(script)
          } catch (e) { }
          delete window.renderOptIn
        }

      } catch (error) {
        console.error('Error loading order data:', error)
      }
    }
  }, [])

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 mb-6">
              <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">شكراً لك!</h1>
            <p className="text-xl text-emerald-600 font-semibold mb-6">
              تم استلام طلبك بنجاح
            </p>
            {orderId && (
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 inline-block min-w-[300px]">
                <p className="text-gray-600 text-sm mb-2">رقم الطلب</p>
                <p className="text-3xl font-black text-emerald-700 tracking-wider font-mono select-all">
                  {orderId}
                </p>
                <p className="text-xs text-emerald-600/70 mt-2">يرجى الاحتفاظ برقم الطلب</p>
              </div>
            )}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6 text-right">
            <h3 className="text-xl font-bold text-emerald-800 mb-4">ماذا بعد؟</h3>
            <div className="space-y-3 text-gray-700 text-right">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">تأكيد الطلب</p>
                  <p className="text-sm text-gray-600">
                    سنتواصل معك خلال ساعات لتأكيد العنوان وترتيب عملية التوصيل
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">التوصيل</p>
                  <p className="text-sm text-gray-600">
                    سيتم توصيل طلبك خلال 1-2 يوم عمل في المدن الرئيسية، و2-4 أيام لباقي المناطق
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">الدفع</p>
                  <p className="text-sm text-gray-600">
                    يمكنك الدفع نقداً عند استلام الطلب
                  </p>
                </div>
              </div>
            </div>
          </div>

          {orderData && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 text-right">
              <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات الطلب</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">الاسم:</p>
                  <p className="font-semibold text-gray-800">{orderData.fullName}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">الهاتف:</p>
                  <p className="font-semibold text-gray-800">{orderData.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">البريد الإلكتروني:</p>
                  <p className="font-semibold text-gray-800">{orderData.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">المدينة:</p>
                  <p className="font-semibold text-gray-800">{orderData.city}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-1">العنوان:</p>
                  <p className="font-semibold text-gray-800">
                    {orderData.district}، {orderData.street}، مبنى {orderData.building}
                    {orderData.apartment && `، شقة ${orderData.apartment}`}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">معلومات مهمة</h3>
            <ul className="text-sm text-gray-700 text-right space-y-2">
              <li>• سيتم إرسال رسالة تأكيد إلى بريدك الإلكتروني</li>
              <li>• يمكنك تتبع حالة طلبك من خلال رقم الطلب</li>
              <li>• للاستفسارات، يمكنك التواصل معنا على +966532864369</li>
              <li>• ساعات العمل: من الأحد إلى الخميس: 9 صباحًا - 10 مساءً</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              العودة للرئيسية
            </Link>
            <Link
              href="/categories"
              className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              متابعة التسوق
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="py-12 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}

