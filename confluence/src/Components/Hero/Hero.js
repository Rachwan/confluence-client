import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Hero.module.css";
import heroImage from "../../Assets/Images/Main-slider_img.png";
import { Link } from "react-router-dom";
import company from "../../Assets/Images/Main-Client2.png";

function Hero() {
  const [businesses, setBusinesses] = useState([]);

  const fetchBusinesses = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/user/get/newestfive`
      );
      setBusinesses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

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
                Our marketplace streamlines collaboration, enabling influencers
                to showcase their unique talents and collaborations efficiently.
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
              {businesses &&
                businesses.map((business) => (
                  <div className={styles.company}>
                    <img
                      src={`${process.env.REACT_APP_BACKEND}/${business?.profile}`}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
