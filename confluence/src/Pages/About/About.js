import React from "react";
import styles from "./About.module.css";
import { Helmet } from "react-helmet-async";
import aboutImg from "../../Assets/Images/Main-about_bg.png";
import rachwan from "../../Assets/Icons/Main-floating1.png";

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
              <h1 className={styles.main__title}>Our mission from the start</h1>
              <p className={styles.description}>
                Our marketplace offers a wide range of features designed to make
                the collaboration process efficient and effective. Influencers
                can showcase their unique talents. Our marketplace offers a wide
                range of features designed to make the collaboration process
                efficient and effective.
              </p>
              <div className={styles.founder}>
                <div className={styles.image}>
                  <img src={rachwan} alt="" />
                </div>
                <div className={styles.founder__content}>
                  <p className={styles.title}>Rachwan Harb</p>
                  <p className={styles.description}>
                    Quisque mauris ligula, convallis vitae orci cursus, auctor
                    accum lorem.
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
