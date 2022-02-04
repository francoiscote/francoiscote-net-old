import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";

// import { globalStyles } from "../components/globalStyles";
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
        <link key="favicon" rel="icon" href="/favicon.ico" />
        <link
          key="apple-touch-icon"
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          key="png-icon-32"
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          key="png-icon-16"
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      {/* {globalStyles} */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
