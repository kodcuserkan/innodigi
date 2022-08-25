import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>INNODIGI  ||  We specialize in custom-tailored software solutions  || innodigi.net</title>
        <meta name="description" content="innodigi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://innodigi.net">innodigi.net</a>
        </h1>

        <p className={styles.description}>
          Coming soon!
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="http://innodigi.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by innodigi {new Date().getFullYear()}
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
