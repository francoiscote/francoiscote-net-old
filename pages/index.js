import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>francoiscote.net</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet" />
      </Head>

      <main className="mt-20 font-['Inconsolata'] text-2xl md:text-4xl lg:text-5xl text-center">
        <span className="inline text-slate-400 font-bold">&gt;</span>
        <div className="not-prose inline">
          <h1 className="inline text-slate-600 font-bold tracking-tight mx-1">francoiscote.net</h1>
        </div>
        <span className="inline text-red-400 font-bold animate-blink">_</span>
      </main>

        
    </>
  )
}
