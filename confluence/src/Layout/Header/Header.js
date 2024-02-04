import React from "react";
import styles from "./Header.module.css";
import logoIcon from "../../Assets/Icons/agreement.png";
import loginIcon from "../../Assets/Icons/log-in.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to={"/"}>
          <div className={styles.logo}>
            {/* <div className={styles.icon}>
              <img src={logoIcon} alt="Logo" className={styles.logoIcon} />
            </div> */}
            <p className={styles.logo__name}>confluence</p>
          </div>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.linklist}>
            <Link to="/" className={styles.link}>
              <li>Home</li>
            </Link>
            <Link to="/creators" className={styles.link}>
              <li>Creators</li>
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
            <Link to={"/signup/creator"}>
              <div className={`${styles.button} ${styles.join__as__creator}`}>
                Join as Creator
              </div>
            </Link>
            <Link to={"/signup/brand"}>
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
