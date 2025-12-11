# كاندي السعودية - Candy KSA E-commerce Website

موقع إلكتروني متكامل للتجارة الإلكترونية باللغة العربية مع دعم RTL (من اليمين لليسار).

## المميزات

- ✅ موقع 100% باللغة العربية مع دعم RTL
- ✅ 15 منتج في 3 فئات (لاب توب، تلفزيونات، هواتف وإكسسوارات)
- ✅ صفحات سياسات قانونية كاملة (800+ كلمة لكل صفحة)
- ✅ Google Merchant Center XML Feed متوافق 100%
- ✅ تصميم عصري ومتجاوب مع Tailwind CSS
- ✅ Next.js 14+ مع App Router

## التقنيات المستخدمة

- **Next.js 14+** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS v3+**
- **Cairo Font** (خط عربي)

## التثبيت والتشغيل

### 1. تثبيت المتطلبات

```bash
pnpm install
```

### 2. تشغيل المشروع

```bash
pnpm dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

### 3. بناء المشروع للإنتاج

```bash
pnpm build
pnpm start
```

## هيكل المشروع

```
├── app/
│   ├── about/              # صفحة من نحن
│   ├── categories/         # صفحات الفئات
│   ├── feeds/              # Google Merchant Center Feed
│   ├── policies/           # صفحات السياسات القانونية
│   ├── products/           # صفحات المنتجات
│   ├── globals.css         # الأنماط العامة
│   ├── layout.tsx          # التخطيط الرئيسي
│   └── page.tsx            # الصفحة الرئيسية
├── components/
│   ├── Footer.tsx          # التذييل
│   ├── Header.tsx          # الرأس
│   ├── Hero.tsx            # البانر الرئيسي
│   ├── ProductCard.tsx     # بطاقة المنتج
│   └── ReviewSection.tsx   # قسم التقييمات
├── public/
│   ├── images/
│   │   └── products/       # صور المنتجات
│   └── feeds/
│       └── google.xml      # XML Feed
├── scripts/
│   └── generate-static-feed.ts  # سكريبت توليد Feed
├── types/
│   └── product.ts          # أنواع TypeScript
└── utils/
    ├── products.json        # بيانات المنتجات
    └── generateFeed.ts      # دالة توليد Feed
```

## الصفحات المتاحة

### الصفحات الرئيسية
- `/` - الصفحة الرئيسية
- `/about` - من نحن
- `/categories/laptops` - لاب توب
- `/categories/tvs` - تلفزيونات
- `/categories/phones` - هواتف وإكسسوارات

### صفحات المنتجات
- `/products/[id]` - صفحة تفاصيل المنتج

### صفحات السياسات
- `/policies/privacy` - سياسة الخصوصية
- `/policies/shipping` - سياسة الشحن والتوصيل
- `/policies/returns` - سياسة الإرجاع والاسترداد
- `/policies/terms` - الشروط والأحكام

### Google Merchant Center Feed
- `/feeds/google.xml` - XML Feed للمنتجات

## معلومات المتجر

- **الاسم:** كاندي السعودية (Candy KSA)
- **البلد:** المملكة العربية السعودية
- **العملة:** ريال سعودي (SAR)
- **البريد الإلكتروني:** support@candyksa.com
- **الهاتف:** +966532864369
- **ساعات العمل:** من الأحد إلى الخميس: 9 صباحًا - 10 مساءً

## Google Merchant Center

الـ XML Feed متوافق 100% مع متطلبات Google Merchant Center ويتضمن:

- ✅ جميع الحقول المطلوبة والموصى بها
- ✅ معلومات الشحن (توصيل مجاني في السعودية)
- ✅ معلومات الضرائب (15% VAT)
- ✅ توفر المنتجات
- ✅ العلامات التجارية و MPN
- ✅ فئات Google للمنتجات

### إضافة Feed إلى Google Merchant Center

1. سجل الدخول إلى [Google Merchant Center](https://merchants.google.com)
2. اذهب إلى **Products** > **Feeds**
3. أضف Feed جديد
4. أدخل الرابط: `https://candyksa.com/feeds/google.xml`
5. اختر **Scheduled fetch** أو **Upload**

## التخصيص

### تعديل المنتجات

عدّل ملف `utils/products.json` لإضافة أو تعديل المنتجات.

### تعديل الألوان

عدّل ملف `tailwind.config.js` لتغيير الألوان والتصميم.

### تعديل المحتوى

جميع النصوص العربية موجودة في:
- `app/about/page.tsx` - صفحة من نحن
- `app/policies/[slug]/page.tsx` - صفحات السياسات
- `components/` - المكونات

## الترخيص

هذا المشروع خاص ومملوك لـ كاندي السعودية.

## الدعم

للدعم الفني، يرجى التواصل:
- البريد الإلكتروني: support@candyksa.com
- الهاتف: +966532864369

