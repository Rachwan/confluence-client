import React from "react";
import { Link } from "react-router-dom";
import styles from "./Intro.module.css";

const Intro = ({
  pageName,
  influencer = false,
  title = false,
  background = false,
}) => {
  return (
    <section className={`${styles.intro} ${background ? styles.test : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.chain}>
          <Link to={"/"}>
            <span className={styles.sub__chain}>Home</span>
          </Link>
          <span className={styles.sub__chain}>&gt;</span>
          {influencer ? (
            <>
              <Link to={"/influencers"}>
                <span className={styles.sub__chain}>Influencers</span>
              </Link>
              <span className={styles.sub__chain}>&gt;</span>
            </>
          ) : null}
          <Link to={`/${pageName}`}>
            <span className={styles.sub__chain}>{pageName}</span>
          </Link>
          {title ? (
            <h1 className={styles.content}>{title}</h1>
          ) : (
            <h1 className={styles.content}>{pageName}</h1>
          )}
        </div>
      </div>
    </section>
  );
};
export default Intro;
