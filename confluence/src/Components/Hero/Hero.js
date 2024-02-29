import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../Assets/Images/Main-slider_img.png";
import LoadingSection from "../../Components/LoadingSection/LoadingSection.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero({ businesses, loading }) {
  // Functional component for the hero section on the homepage
  const textVariantsLeft = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const textVariantsRight = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.4,
      },
    },
  };

  const textVariantsUp = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.8,
      },
    },
  };

  const textVariantsImges = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 1,
      },
    },
  };

  return (
    <>
      <section className={styles.main__hero}>
        <div className={styles.hero}>
          <div className={`container ${styles.wrapper}`}>
            <motion.div
              className={styles.content}
              variants={textVariantsLeft}
              initial="initial"
              animate="animate">
              <motion.h1
                className={styles.main__title}
                variants={textVariantsLeft}>
                {/* Find and hire the perfect Influencer for the Job */}
                Discover and Connect with Influencers Tailored for Your Brand
              </motion.h1>
              <motion.p
                className={styles.description}
                variants={textVariantsLeft}>
                {/* Our marketplace streamlines collaboration, enabling influencers
                to showcase their unique talents and collaborations efficiently. */}
                Our marketplace streamlines collaboration, enabling influencers
                to efficiently showcase their unique talents.
                {/* Find the perfect
                match for your brand's needs. */}
              </motion.p>
              <Link to={"/influencers"} target="_blank">
                <motion.div
                  className={styles.button}
                  variants={textVariantsLeft}>
                  {/* Discover Now */}
                  Explore Now
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              className={styles.image__wrapper}
              variants={textVariantsRight}
              initial="initial"
              animate="animate">
              <img src={heroImage} alt="Influencers" />
            </motion.div>
          </div>
        </div>

        <div className={styles.deals}>
          <motion.div
            className={styles.wrapper}
            variants={textVariantsUp}
            initial="initial"
            animate="animate">
            <motion.h2 className={styles.title}>
              You are in <span className={styles.special}>Good Company:</span>
            </motion.h2>
            <motion.div
              className={styles.companies}
              variants={textVariantsUp}
              initial="initial"
              animate="animate">
              {loading ? (
                <LoadingSection padding={"0"} />
              ) : (
                <>
                  {businesses &&
                    businesses.map((business) => (
                      <motion.div
                        className={styles.company}
                        key={business._id}
                        variants={textVariantsImges}
                        initial="initial"
                        animate="animate">
                        <motion.img
                          variants={textVariantsImges}
                          src={`${process.env.REACT_APP_BACKEND}/${business?.profile}`}
                          alt=""></motion.img>
                      </motion.div>
                    ))}
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
