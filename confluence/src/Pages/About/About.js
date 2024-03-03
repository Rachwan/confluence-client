import React from "react";
import styles from "./About.module.css";
import { Helmet } from "react-helmet-async";
import aboutImg from "../../Assets/Images/Main-about_bg.png";
import rachwan from "../../Assets/Images/profile.jpg";

function About() {
  return (
    <>
      <main className={styles.main}>
        <Helmet>
          <title>About Us | Confluence</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <section className={styles.intro}>
          <div className={styles.wrapper}>
            <h1 className={styles.content}>About Us</h1>
          </div>
        </section>
        <section className={styles.hero}>
          <div className={`container ${styles.wrapper}`}>
            <div className={styles.content}>
              <h1 className={styles.main__title}>Our Journey Begins Here</h1>
              <p className={styles.description}>
                Welcome to Confluence, where seamless collaboration between businesses and influencers takes center stage. Our marketplace is crafted to simplify the collaborative process, allowing influencers to showcase their unique talents effortlessly.
              </p>
              <div className={styles.founder}>
                <div className={styles.image}>
                  <img src={rachwan} alt="" />
                </div>
                <div className={styles.founder__content}>
                  <p className={styles.title}>Rachwan Harb</p>
                  <p className={styles.description}>
                    Embrace the Confluence experience, where your brand's influence finds its perfect match.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.image__wrapper}>
              <img src={aboutImg} alt="Influencers" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
