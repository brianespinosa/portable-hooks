import 'normalize.css';
// import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import Head from 'next/head';
import DisableSSR from '../components/disable-ssr';
import { Boundaries } from '@bjeco/blocks';
import '@code-hike/mdx/dist/index.css';
import './_app.scss';
import { title, description } from '../details.json';

// const components = {};

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

    // Unassign event listener (cleanup)
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps -- This empty dependency array is needed to only run on mount
  }, []);

  return (
    <Boundaries>
      <Head>
        {/* Basic HTML Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Twitter Card Tags - Discord needs these for the large image previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://portable-hooks.bje.co/splash.png"
        />

        {/* Open Graph Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://portable-hooks.bje.co/" />
        <meta
          property="og:image"
          content="https://portable-hooks.bje.co/splash.png"
        />
        <meta property="og:type" content="website" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
      <DisableSSR>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </DisableSSR>
    </Boundaries>
  );
}

export default CustomApp;
