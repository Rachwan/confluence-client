import React from "react";
import { Link } from "react-router-dom";
import styles from "./Intro.module.css";

const Intro = ({ pageName, test = false }) => {
  return (
    <section className={`${styles.intro} ${test ? styles.test : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.chain}>
          <Link to={"/"}>
            <span className={styles.sub__chain}>Home</span>
          </Link>
          <span className={styles.sub__chain}>&gt;</span>
          <Link to={`/${pageName}`}>
            <span className={styles.sub__chain}>{pageName}</span>
          </Link>
        </div>
        <h1 className={styles.content}>{pageName}</h1>
      </div>
    </section>
  );
};
export default Intro;
