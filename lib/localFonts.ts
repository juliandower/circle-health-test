import localFont from 'next/font/local';

// Load Tiempos Text font from local files
export const tiemposText = localFont({
  src: [
    {
      path: '../public/fonts/tiempos-text-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/tiempos-text-regular-italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-tiempos-text',
  display: 'swap',
});
