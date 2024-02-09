import React from "react";
import styles from "./CheckByCategory.module.css";
import SectionHead from "../SectionHead/SectionHead";
import { Link } from "react-router-dom";
import tiktok from '../../Assets/Images/Main-categ6-500x300.jpg'
// import test from '../../Assets/Images/Main-slider.png'

function CheckByCategory() {
  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Check by Category"}
            description={
              "We have a lot of opportunities for you. Come check them!"
            }
          />
          <div className={styles.platforms}>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image} style={{ backgroundImage: `url(${tiktok})`}}>
                </div>
                <div className={styles.platform__name}>Food</div>
            </Link>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image} style={{ backgroundImage: `url(${tiktok})`}}>
                </div>
                <div className={styles.platform__name}>Tech</div>
            </Link>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image} style={{ backgroundImage: `url(${tiktok})`}}>
                </div>
                <div className={styles.platform__name}>Fashion</div>
            </Link>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image} style={{ backgroundImage: `url(${tiktok})`}}>
                </div>
                <div className={styles.platform__name}>Fininace</div>
            </Link>
            <Link to={"/"} className={styles.platform}>
                <div className={styles.image} style={{ backgroundImage: `url(${tiktok})`}}>
                </div>
                <div className={styles.platform__name}>Entertaiment</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckByCategory;
