import React from "react";
import styles from "./Intro.module.css";

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <h1 className={styles.content}>Contact Us</h1>
      </div>
    </section>
  );
}

export default Intro;
