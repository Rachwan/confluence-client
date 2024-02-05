import React from 'react';
import styles from './Home.module.css'
import Header from '../../Layout/Header/Header';
import Hero from '../../Components/Hero/Hero';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
    <main className={styles.main}>
      <Helmet>
        <title>Welcome Home - Confluence</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Header />
      <Hero />
    </main>
    </>
  );
}

export default Home;
