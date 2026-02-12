'use client'

import Script from 'next/script'

export default function GoogleReviewsBadge() {
    return (
        <Script
            id="merchantWidgetScript"
            src="https://www.gstatic.com/shopping/merchant/merchantwidget.js"
            strategy="lazyOnload"
            onLoad={() => {
                if ((window as any).merchantwidget) {
                    (window as any).merchantwidget.start({
                        merchant_id: 5693889497,
                        position: 'BOTTOM_LEFT'
                    });
                }
            }}
        />
    )
}
