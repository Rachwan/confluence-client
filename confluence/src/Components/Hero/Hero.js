import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../Assets/Images/Main-slider_img.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.content}>
            <h1 className={styles.main__title}>
              Find and hire the perfect Influencer for the Job
            </h1>
            <p className={styles.description}>
              Our marketplace offers a wide range of features designed to make
              the collaboration process efficient and effective. Influencers can
              showcase their unique talents.
            </p>
            <Link to={"/creators"}>
              <div className={styles.button}>Discover Now</div>
            </Link>
          </div>
          <div className={styles.image__wrapper}>
            <img src={heroImage} alt="Influencers" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
