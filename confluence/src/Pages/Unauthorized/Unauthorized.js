import React from "react";
import { Link } from "react-router-dom";
import styles from "./Unauthorized.module.css";
import { Helmet } from "react-helmet-async";
import unauthorized from "../../Assets/Images/unauthorized1.svg";
import Header from "../../Layout/Header/Header";

function Unauthorized() {
  return (
    <main className={styles.main__wrapper}>
      <Helmet>
        <title>Unauthorized | Confluence</title>
        <meta
          name="description"
          content="Oops! Your are not authorized. Check the URL or go back to the home page."
        />
        <meta name="keywords" content="404, page not found, error" />
      </Helmet>
      <Header />
      <div className={styles.main}>
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.content}>
            <h1 className={styles.main__title}>
              <span>Unauthorized</span> To Go This Path!
            </h1>
            <p className={styles.message}>
              Lost on the collaboration path? Redirecting you to influential
              connections.
            </p>
            <div className={styles.buttonWrapper}>
              <Link to={"/"}>
                <div className={styles.button}>Back To Home</div>
              </Link>
            </div>
          </div>
          <div className={styles.mainImage}>
            <img src={unauthorized} alt="An unauthorized" />
            <div className={styles.buttonWrapper}>
              <Link to={"/"}>
                <div className={`${styles.button} ${styles.second__button}`}>
                  Back To Home
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Unauthorized;
