import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../Assets/Images/Main-slider_img.png";
import LoadingSection from "../../Components/LoadingSection/LoadingSection.js";
import { Link } from "react-router-dom";

function Hero({ businesses, loading }) {
  return (
    <>
      <section className={styles.main__hero}>
        <div className={styles.hero}>
          <div className={`container ${styles.wrapper}`}>
            <div className={styles.content}>
              <h1 className={styles.main__title}>
                {/* Find and hire the perfect Influencer for the Job */}
                Discover and Connect with Influencers Tailored for Your Brand
              </h1>
              <p className={styles.description}>
                {/* Our marketplace streamlines collaboration, enabling influencers
                to showcase their unique talents and collaborations efficiently. */}
                Our marketplace streamlines collaboration, enabling influencers
                to efficiently showcase their unique talents. Find the perfect
                match for your brand's needs.
              </p>
              <Link to={"/influencers"} target="_blank">
                <div className={styles.button}>
                  {/* Discover Now */}
                  Explore Now
                </div>
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
              {loading ? (
                <LoadingSection padding={"0"} />
              ) : (
                <>
                  {businesses &&
                    businesses.map((business) => (
                      <div className={styles.company} key={business._id}>
                        <img
                          src={`${process.env.REACT_APP_BACKEND}/${business?.profile}`}
                          alt=""
                        />
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
