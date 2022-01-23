import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>francoiscote.net</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1>François Côté</h1>
      <p>Web Developer. Lives in Montréal, Québec, Canada.</p>
      <a href="https://www.github.com/">Github</a>
    </>
  );
}
