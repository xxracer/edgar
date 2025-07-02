'use client';

import Script from 'next/script';

export default function Analytics() {
    const gAdsId = 'AW-11119582439';

    if (!gAdsId) {
        return null;
    }

    // PASO 1: La etiqueta de conversión para llamadas se debe añadir aquí.
    // Google Ads te proporcionará esta etiqueta DESPUÉS de que el sitio esté en línea y verifique la instalación de la etiqueta global.
    // Se verá algo como esto: 'AW-11119582439/AbC-D_E_F-g123456789'.
    //
    // Reemplaza 'AW-11119582439/REEMPLAZAR_CON_ETIQUETA_DE_CONVERSION' con la etiqueta real.
    const conversionSnippet = `
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
              'send_to': 'AW-11119582439/gnyeCJu0g78aEOe5nbYp',
              'event_callback': callback
          });
          return false;
        }
    `;

    return (
        <>
            {/* PASO 2: Esta es la etiqueta global de Google. Ya está instalada correctamente. */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gAdsId}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${gAdsId}');

                    ${conversionSnippet}
                `,
                }}
            />
        </>
    );
}
