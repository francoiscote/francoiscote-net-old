import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>francoiscote.net</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <span className={styles.prompt}>&gt;</span>
        <h1 className={styles.projectName}>francoiscote.net</h1>
        <span className={`${styles.carret} ${styles.blink}`}>_</span>
      </main>

        
    </div>
  )
}
