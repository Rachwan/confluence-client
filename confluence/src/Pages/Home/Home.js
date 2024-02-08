import React from "react";
import styles from "./Home.module.css";
import Header from "../../Layout/Header/Header";
import Hero from "../../Components/Hero/Hero";
import CheckByPlatform from "../../Components/CheckByPlatform/CheckByPlatform";
import { Helmet } from "react-helmet-async";
import iconOne from '../../Assets/Icons/Main-serv1-230x238.png'
import iconTwo from '../../Assets/Icons/Main-serv2-230x238.png'
import iconThree from '../../Assets/Icons/Main-serv3.png'
import iconFour from '../../Assets/Icons/Main-serv4.png'

function Home() {
  return (
    <>
      <main className={styles.main}>
        <Helmet>
          <title>Home - Confluence</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <Header home={true} />
        <Hero />
        {/* CheckByPlatform */}
        <CheckByPlatform />
        {/* How it works */}
        <section className={styles.how__it__works}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <div className={styles.heading}>
                  <h2 className={styles.title}>How it works</h2>
                  <p className={styles.paragraph}>
                    We have a lot of opportunities for you. Come check them!
                  </p>
                </div>
                <div className={styles.boxes}>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconOne} alt="" />
                    </div>
                    <div className={styles.title__box}>Create Account</div>
                    <div className={styles.box__phrase}>
                      Vivamus vel fringilla est. Fusce fermentum, quam a aliquet
                      semper, eros sapien ullamcorpe.
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconTwo} alt="" />
                    </div>
                    <div className={styles.title__box}>Create Account</div>
                    <div className={styles.box__phrase}>
                      Vivamus vel fringilla est. Fusce fermentum, quam a aliquet
                      semper, eros sapien ullamcorpe.
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconThree} alt="" />
                    </div>
                    <div className={styles.title__box}>Create Account</div>
                    <div className={styles.box__phrase}>
                      Vivamus vel fringilla est. Fusce fermentum, quam a aliquet
                      semper, eros sapien ullamcorpe.
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconFour} alt="" />
                    </div>
                    <div className={styles.title__box}>Create Account</div>
                    <div className={styles.box__phrase}>
                      Vivamus vel fringilla est. Fusce fermentum, quam a aliquet
                      semper, eros sapien ullamcorpe.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.image}></div>
          </div>
        </section>
        {/* Features about the platform */}
      </main>
    </>
  );
}

export default Home;
