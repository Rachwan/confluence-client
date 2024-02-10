import React, { useContext } from "react";
import styles from "./Header.module.css";
import loginIcon from "../../Assets/Icons/log-in.png";
import { Link } from "react-router-dom";
import confluence from "../../Assets/Icons/confluence.svg";
import edit from "../../Assets/Icons/pen-to-square-solid.svg";
import { UserContext } from "../../UseContext/UserContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Header({ home = false }) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const action = await axios.post(
        `${process.env.REACT_APP_BACKEND}/logout`
      );
      if (action) {
        localStorage.removeItem("token");
        setUser(null);
        Swal.fire({
          title: "Logout successfully!",
          text: "Sad to see you going.",
          icon: "success",
        });
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Try again.",
      });
      console.error("Logout error:", error);
    }
  };

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
          {!user ? (
            <>
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
                  <div
                    className={`${styles.button} ${styles.join__as__creator}`}>
                    Join as Creator
                  </div>
                </Link>
                <Link to={"/brand-signup"}>
                  <div className={`${styles.button} ${styles.join__as__brand}`}>
                    Join as Brand
                  </div>
                </Link>
              </div>
            </>
          ) :  (
          //   <>
          //     <div
          //       className={`${styles.logout__wrapper} ${styles.button} ${styles.join__as__brand}`}
          //       onClick={handleLogout}>
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         viewBox="0 0 512 512"
          //         className={styles.logout__icon}>
          //         <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          //       </svg>
          //       <span className={styles.logout}>Logout</span>
          //     </div>
          //   </>
          // ) : (
            <div className={styles.buttons}>
              <Link to={"/dashboard"}>
                <div
                  className={`${styles.dashboard__wrapper} ${styles.button} ${styles.join__as__creator}`}>
                  <img src={edit} alt="" className={styles.dashboard__icon} />
                  Dashboard
                </div>
              </Link>
              <div
                className={`${styles.logout__wrapper} ${styles.button} ${styles.join__as__brand}`}
                onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={styles.logout__icon}>
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
                <span className={styles.logout}>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
