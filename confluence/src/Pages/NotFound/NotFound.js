import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { Helmet } from "react-helmet-async";
import mainImage from "../../Assets/Images/404-page.png";
import secondImage from "../../Assets/Images/404.png";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Confluence</title>
        <meta
          name="description"
          content="Oops! The page you are looking for cannot be found. Check the URL or go back to the home page."
        />
        <meta name="keywords" content="404, page not found, error" />
      </Helmet>

      <main className={styles.main}>
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.content}>
            <img src={secondImage} alt="" />
            <p className={styles.message}>
              Lost in cyberspace? Redirecting you to influential connections.
            </p>
            <div className={styles.buttonWrapper}>
              <Link to={"/"}>
                <div className={styles.button}>Back To Home</div>
              </Link>
            </div>
          </div>
          <div className={styles.mainImage}>
            <img src={mainImage} alt="A Sad Guy" />
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
