import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import Auth from '../features/auth/Auth';
import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/auth/authSlice';

const IndexPage: NextPage = () => {
  const isLoggedIn = useAppSelector(selectAuth).isLoggedIn;

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />

          <Auth /> 
          { isLoggedIn && <Counter /> }
       
      </header>
    </div>
  )
}

export default IndexPage
