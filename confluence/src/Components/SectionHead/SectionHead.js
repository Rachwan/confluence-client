import React from "react";
import styles from "./SectionHead.module.css";
import { Link } from "react-router-dom";

function SectionHead({ title, description }) {
  return (
    <>
      <div className={styles.main__wrapper}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <Link to={"/influencers"}>
            <div className={styles.button}>View All</div>
          </Link>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
}

export default SectionHead;
