import React from "react";
import styles from "./Header.module.css";
import loginIcon from "../../Assets/Icons/log-in.png";
import { Link } from "react-router-dom";
import confluence from "../../Assets/Icons/confluence.svg";

function Header({ home = false }) {
  return (
    <header className={home ? styles.home__header : styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to={"/"}>
          <div className={styles.logo__wrapper}>
            <div className={styles.logo}>
              <img src={confluence} alt="" />
            </div>
            <p className={styles.logo__name}>confluence</p>
          </div>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.linklist}>
            <Link to="/" className={styles.link}>
              <li>Home</li>
            </Link>
            <Link to="/influencers" className={styles.link}>
              <li>Influencers</li>
            </Link>
            <Link to="/pricing" className={styles.link}>
              <li>Pricing</li>
            </Link>
            <Link to="/about" className={styles.link}>
              <li>About</li>
            </Link>
            <Link to="/contact" className={styles.link}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <div className={styles.auth}>
          <div className={styles.my__account}>
            <Link to={"/login"} className={styles.login__href}>
              <img
                src={loginIcon}
                alt="Login Icon"
                className={styles.login__icon}
              />
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link to={"/creator-signup"}>
              <div className={`${styles.button} ${styles.join__as__creator}`}>
                Join as Creator
              </div>
            </Link>
            <Link to={"/brand-signup"}>
              <div className={`${styles.button} ${styles.join__as__brand}`}>
                Join as Brand
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
