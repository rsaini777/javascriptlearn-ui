'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  GA_TRACKING_ID: string;
}

export default function GoogleAnalytics({ GA_TRACKING_ID }: GoogleAnalyticsProps) {
  useEffect(() => {
    if (GA_TRACKING_ID) {
      console.log('Google Analytics Tracking ID:', GA_TRACKING_ID);
    }
  }, [GA_TRACKING_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        onLoad={() => {
          console.log('Google Analytics script loaded successfully');
        }}
        onError={() => {
          console.error('Failed to load Google Analytics script');
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });

            console.log('Google Analytics initialized with ID: ${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  );
}
