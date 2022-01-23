import Head from "next/head";
import { globalStyles } from "../components/globalStyles";
import Layout from "../components/Layout";

const injectGA = () => {
  if (typeof window == "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "UA-3186767-1");
};

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-3186767-1"
        />
        <script>{injectGA()}</script>
      </Head>
      {globalStyles}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
