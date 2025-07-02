'use client';

import Script from 'next/script';

export default function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const gAdsId = 'AW-11119582439';

    // gtag.js can be loaded with either ID. We'll use the Ads ID since it was provided.
    const tagId = gAdsId || gaId;

    if (!tagId) {
        return null;
    }

    // Build the config strings for each service
    const configs = [];
    if (gaId) {
        configs.push(`gtag('config', '${gaId}', { page_path: window.location.pathname });`);
    }
    if (gAdsId) {
        configs.push(`gtag('config', '${gAdsId}');`);
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    ${configs.join('\n                    ')}
                `,
                }}
            />
        </>
