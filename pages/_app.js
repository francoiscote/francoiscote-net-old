
import { createGlobalStyle } from "styled-components";
import Head from 'next/head'

import normalizeCSS from '../styles/normalize.css'

const GlobalStyle = createGlobalStyle`
  /* ${normalizeCSS} */

  * {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-3186767-1');
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
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
