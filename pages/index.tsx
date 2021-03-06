import type { NextPage } from 'next'
import Layout from '../components/Layout';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <Link href="/brands">
            <a style={{ marginTop: '16px', fontWeight: 600, fontSize: '24px' }}>
              BRANDS PAGE
            </a>
          </Link>
        </main>
      </div>
    </Layout>
  )
}

export default Home
