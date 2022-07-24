import 'normalize.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import Head from 'next/head';
import { MotionConfig } from 'framer-motion';
import '@code-hike/mdx/dist/index.css';
import './_app.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('FZBVRVPL', {
      url: 'https://who.bje.co/script.js',
      includedDomains: ['portable-hooks.bje.co'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Also focus the slideshow input
    document
      .getElementsByClassName('ch-slideshow-range')[0]
      .getElementsByTagName('input')[0]
      .focus();

    // Unassign event listener (cleanup)
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps -- This empty dependency array is needed to only run on mount
  }, []);

  return (
    <>
      <Head>
        <title>portable-hooks</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="app">
        <MotionConfig transition={{ duration: 1 }}>
          <Component {...pageProps} />
        </MotionConfig>
      </main>
    </>
  );
}

export default CustomApp;
