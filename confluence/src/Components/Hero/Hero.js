import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../Assets/Images/Main-slider_img.png";
import { Link } from "react-router-dom";
import company from "../../Assets/Images/Main-Client2.png";

function Hero() {
  return (
    <>
      <section className={styles.main__hero}>
        <div className={styles.hero}>
          <div className={`container ${styles.wrapper}`}>
            <div className={styles.content}>
              <h1 className={styles.main__title}>
                Find and hire the perfect Influencer for the Job
              </h1>
              <p className={styles.description}>
                Our marketplace offers a wide range of features designed to make
                the collaboration process efficient and effective. Influencers
                can showcase their unique talents.
              </p>
              <Link to={"/creators"}>
                <div className={styles.button}>Discover Now</div>
              </Link>
            </div>
            <div className={styles.image__wrapper}>
              <img src={heroImage} alt="Influencers" />
            </div>
          </div>
        </div>
        <div className={styles.deals}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>
              You are in <span className={styles.special}>Good Company:</span>
            </h2>
            <div className={styles.companies}>
              <div className={styles.company}>
                <img src={company} alt="" />
              </div>
              <div className={styles.company}>
                {" "}
                <img src={company} alt="" />
              </div>
              <div className={styles.company}>
                {" "}
                <img src={company} alt="" />
              </div>
              <div className={styles.company}>
                {" "}
                <img src={company} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
