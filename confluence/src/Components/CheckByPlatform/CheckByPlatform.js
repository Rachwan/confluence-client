import React from "react";
import styles from "./CheckByPlatform.module.css";
import SectionHead from "../SectionHead/SectionHead";
import { Link } from "react-router-dom";
import tiktok from '../../Assets/Images/Main-categ6-500x300.jpg'
// import test from '../../Assets/Images/Main-slider.png'

function CheckByPlatform() {
  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Check by Platform"}
            description={
              "We have a lot of opportunities for you. Come check them!"
            }
          />
          <div className={styles.platforms}>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image}>
                  <img src={tiktok} alt="" />
                </div>
                <div className={styles.platform__name}>TikTok</div>
            </Link>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image}>
                  <img src={tiktok} alt="" />
                </div>
                <div className={styles.platform__name}>Instagram</div>
            </Link>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image}>
                  <img src={tiktok} alt="" />
                </div>
                <div className={styles.platform__name}>Facebook</div>
            </Link>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image}>
                  <img src={tiktok} alt="" />
                </div>
                <div className={styles.platform__name}>YouTube</div>
            </Link>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image}>
                  <img src={tiktok} alt="" />
                </div>
                <div className={styles.platform__name}>Snapshat</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckByPlatform;
