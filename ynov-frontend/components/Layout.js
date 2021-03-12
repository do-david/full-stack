import Head from 'next/head';
import Nav from './Nav';
import Header from './Header';
import React from 'react';
import styles from '../styles/Layout.module.css';

export default function Layout({children}) {
    const copyright = 'Copyright 2021';
  return (
      <>
        <Nav/>
        <div className={styles.container}>
            <Head>
            <title>ynov-frontend</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Header/>
                {children}
            </main>
            <footer className={styles.footer}>
            <div>{copyright}</div>
        </footer>
        </div>
      </>
  );
}
