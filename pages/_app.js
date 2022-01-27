import Head from "next/head";
import Script from "next/script";

import { globalStyles } from "../components/globalStyles";
import { Layout } from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-3186767-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-3186767-1');
        `}
      </Script>

      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {globalStyles}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
