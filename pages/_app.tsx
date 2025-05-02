import type { AppProps } from 'next/app';
import { beVietnamPro } from '@lib/fonts';
import { tiemposText } from '@lib/localFonts';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${beVietnamPro.variable} ${tiemposText.variable}`} style={{ margin: 0, padding: 0 }}>
      <Component {...pageProps} />
    </main>
  );
}
