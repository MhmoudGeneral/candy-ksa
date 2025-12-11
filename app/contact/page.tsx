import Link from 'next/link'

export const metadata = {
    title: 'تواصل معنا - كاندي السعودية',
    description: 'صفحة التواصل مع خدمة عملاء كاندي السعودية',
}

export default function ContactPage() {
    return (
        <div className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">تواصل معنا</h1>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-pink-100">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                        يسعدنا تواصلكم مع كاندي السعودية في أي وقت، ونحن دائمًا جاهزون للرد على استفساراتكم ومساعدتكم في الطلبات والدعم الفني وخدمة العملاء.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transition hover:bg-white hover:shadow-sm">
                            <span className="text-3xl">📧</span>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">البريد الإلكتروني</h3>
                                <Link
                                    href="mailto:support@candyksa.com"
                                    className="text-emerald-600 hover:text-emerald-700 font-medium dir-ltr block text-left"
                                >
                                    support@candyksa.com
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transition hover:bg-white hover:shadow-sm">
                            <span className="text-3xl">📞</span>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">رقم الهاتف</h3>
                                <Link
                                    href="tel:+966532864369"
                                    className="text-emerald-600 hover:text-emerald-700 font-medium dir-ltr block text-left"
                                >
                                    +966532864369
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transition hover:bg-white hover:shadow-sm">
                            <span className="text-3xl">🕒</span>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">ساعات العمل</h3>
                                <p className="text-gray-700">
                                    من الأحد إلى الخميس
                                </p>
                                <p className="text-gray-500 text-sm mt-1">9:00 صباحاً - 10:00 مساءً</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-gray-700 text-sm text-center mt-12">
                    تاريخ آخر تحديث: 2025/12/10
                </div>
            </div>
        </div>
    )
}
