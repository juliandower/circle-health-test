import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Viewport meta tag for proper mobile rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Explicitly include Be Vietnam Pro font */}
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Preload Tiempos Text font */}
        <link rel="preload" href="/fonts/tiempos-text-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body className="font-be-vietnam-pro" style={{ margin: 0, padding: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
