'use client';

import Script from 'next/script';

export default function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    if (!gaId) {
        // In a production environment, you might want to log a warning.
        // For this example, we'll just return null to not render anything.
        return null;
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaId}', {
                        page_path: window.location.pathname,
                    });
                `,
                }}
            />
        </>
    );
}
