import React from "react";
import styles from "./Login.module.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <main className={styles.main}>
        <Helmet>
          <title>Login - Confluence</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <section className={styles.intro}>
          <div className={styles.wrapper}>
            <div className={styles.chain}>
              <Link to={"/"}>
                <span className={styles.sub__chain}>Home</span>
              </Link>
              <span className={styles.sub__chain}>&gt;</span>
              <Link to={"/login"}>
                <span className={styles.sub__chain}>Login</span>
              </Link>
            </div>
            <h1 className={styles.content}>Login</h1>
          </div>
        </section>
        <section className={`container ${styles.main__section}`}>
          <div className={styles.signup__wrapper}>
            <h2 className={styles.form__title}>Login</h2>
            <form action="/" method="POST" name="contact">
              <div className={styles.single__input}>
                <label htmlFor="email">
                  Email address<span className={styles.star}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className={styles.single__input}>
                <label htmlFor="pass">
                  Password<span className={styles.star}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="pass"
                  name="password"
                  required
                />
              </div>
              <div className={styles.btnHolder}>
                <button
                  className={styles.Submit__button}
                  type="submit"
                  value="submit">
                  Login
                </button>
                <Link to={"/lostpassword"}>
                  <p className={styles.lostpassword}>Lost your password?</p>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
