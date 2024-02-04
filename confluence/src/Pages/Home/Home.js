import React from 'react';
import styles from './Home.module.css'
import Header from '../../Layout/Header/Header';
import Hero from '../../Components/Hero/Hero';

function Home() {
  return (
    <>
    <main className={styles.main}>
      <Header />
      <Hero />
    </main>
    </>
  );
}

export default Home;
