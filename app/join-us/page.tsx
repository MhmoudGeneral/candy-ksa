export default function JoinUsPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">انضم إلى كاندي السعودية</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              نبحث عن مواهب شغوفة بالحلوى والتجارة الإلكترونية لنقدم تجربة تسوق لذيذة وآمنة لعملائنا في المملكة.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">لماذا تعمل معنا؟</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>بيئة عمل محفزة:</strong> بيئة عمل إيجابية ومحفزة للإبداع والابتكار</li>
              <li><strong>نمو مهني:</strong> فرص للنمو والتطوير المهني المستمر</li>
              <li><strong>فريق متميز:</strong> العمل مع فريق من المحترفين المتميزين</li>
              <li><strong>تأثير حقيقي:</strong> المساهمة في بناء منصة تؤثر على آلاف المستخدمين</li>
              <li><strong>مزايا تنافسية:</strong> راتب تنافسي ومزايا عديدة</li>
              <li><strong>التوازن:</strong> توازن بين العمل والحياة الشخصية</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">الوظائف المتاحة</h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-emerald-800">مطور برمجيات</h3>
                <p className="text-gray-700 mb-2">
                  نبحث عن مطورين متمكنين في تطوير الويب والتطبيقات لتحسين تجربة التسوق والدفع.
                </p>
                <p className="text-sm text-gray-600">
                  المهارات المطلوبة: React, Next.js, Node.js, TypeScript
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-emerald-800">مصمم واجهات المستخدم</h3>
                <p className="text-gray-700 mb-2">
                  نبحث عن مصممين مبدعين لتصميم تجارب مستخدم مميزة تعكس روح الحلوى.
                </p>
                <p className="text-sm text-gray-600">
                  المهارات المطلوبة: UI/UX Design, Figma, Adobe Creative Suite
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-emerald-800">أخصائي تسويق رقمي</h3>
                <p className="text-gray-700 mb-2">
                  نبحث عن خبراء في التسويق الرقمي لإطلاق الحملات والعروض الموسمية.
                </p>
                <p className="text-sm text-gray-600">
                  المهارات المطلوبة: Digital Marketing, Social Media, Content Creation
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-emerald-800">أخصائي خدمة عملاء</h3>
                <p className="text-gray-700 mb-2">
                  نبحث عن أشخاص محبين لمساعدة العملاء وتقديم خدمة ممتازة حول الطلبات والتوصيل.
                </p>
                <p className="text-sm text-gray-600">
                  المهارات المطلوبة: Communication Skills, Customer Service, Arabic & English
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">كيف تتقدم؟</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">الخطوة 1: إرسال السيرة الذاتية</h3>
                <p className="text-gray-700">
                  أرسل سيرتك الذاتية مع خطاب تغطية يوضح لماذا تريد الانضمام إلى فريق كاندي السعودية.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">الخطوة 2: المقابلة الأولية</h3>
                <p className="text-gray-700">
                  سنراجع طلبك ونتواصل معك لإجراء مقابلة أولية للتعرف عليك بشكل أفضل.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">الخطوة 3: المقابلة النهائية</h3>
                <p className="text-gray-700">
                  إذا نجحت في المقابلة الأولية، سندعوك لمقابلة نهائية مع فريق الإدارة.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-emerald-800">تواصل معنا</h3>
              <p className="mb-4 text-gray-700">
                إذا كنت مهتماً بالانضمام إلى فريقنا، نرجو إرسال سيرتك الذاتية إلى:
              </p>
              <div className="space-y-2">
                <p className="mb-2">
                  <strong>البريد الإلكتروني:</strong>{' '}
                  <a href="mailto:careers@candyksa.com" className="text-emerald-600 hover:underline">
                    careers@candyksa.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>الهاتف:</strong>{' '}
                  <a href="tel:+966532864369" className="text-emerald-600 hover:underline">
                    +966532864369
                  </a>
                </p>
                <p>
                  <strong>ساعات العمل:</strong> من الأحد إلى الخميس: 9 صباحًا - 10 مساءً
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-800">ملاحظة</h3>
              <p className="text-gray-700">
                نحن نؤمن بالتنوع والشمول. نرحب بجميع المتقدمين المؤهلين بغض النظر عن الجنس أو العرق أو الدين.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

