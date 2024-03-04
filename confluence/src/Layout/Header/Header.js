import React, { useContext, useState, useEffect } from "react";
import styles from "./Header.module.css";
import loginIcon from "../../Assets/Icons/log-in.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import confluence from "../../Assets/Icons/confluenceTwo.svg";
import edit from "../../Assets/Icons/pen-to-square-solid.svg";
import { UserContext } from "../../UseContext/UserContext.js";
import { useNavigate } from "react-router-dom";
import burger from "../../Assets/Icons/bars-solid1.svg";
import axios from "axios";
import Swal from "sweetalert2";

function Header({ home = false }) {
  const { user, setUser, setUserUpdated } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      // const action = await axios.post(
      //   `${process.env.REACT_APP_BACKEND}/logout`
      // );
      // if (action) {

      await axios.post(`${process.env.REACT_APP_BACKEND}/logout`);
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      setUserUpdated(true);
      setUser(null);
      Swal.fire({
        title: "Logout successfully!",
        text: "Sad to see you going.",
        icon: "success",
      });
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
      // }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Try again.",
      });
      console.error("Logout error:", error);
    }
  };

  const [nav, setNav] = useState({
    isOpen: false,
    isCartOpen: false,
  });
  useEffect(() => {
    setNav(false);
  }, [location]);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 150) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(`.${styles.nav}`)) {
        setNav(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header
      className={`${home ? styles.home__header : styles.header} ${isFixed ? styles.fixedHeader : styles.removeFixedHeader
        }`}>
      <div className={`container ${styles.container} `}>
        <Link to={"/"}>
          <div className={styles.logo__wrapper}>
            <div className={styles.logo}>
              <img src={confluence} alt="" />
            </div>
            <p className={styles.logo__name}>confluence</p>
          </div>
        </Link>
        <nav className={styles.nav}>
          <ul
            className={
              nav ? `${styles.linklist} ${styles.active}` : styles.linklist
            }>
            {/* Close Icon */}
            {nav ? (
              <span className={styles.closeMenu} onClick={() => setNav(!nav)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={styles.close__icon}>
                  <path
                    fill="#f29218"
                    d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  />
                </svg>
              </span>
            ) : (
              ""
            )}
            <NavLink
              to="/"
              className={`${styles.link} ${location.pathname === "/" ? styles.active__link : ""
                }`}>
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/influencers"
              className={`${styles.link} ${location.pathname === "/influencers" ? styles.active__link : ""
                }`}>
              <li>Influencers</li>
            </NavLink>
            <NavLink
              to="/pricing"
              className={`${styles.link} ${location.pathname === "/pricing" ? styles.active__link : ""
                }`}>
              <li>Pricing</li>
            </NavLink>
            <NavLink
              to="/about"
              className={`${styles.link} ${location.pathname === "/about" ? styles.active__link : ""
                }`}>
              <li>About</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={`${styles.link} ${location.pathname === "/contact" ? styles.active__link : ""
                }`}>
              <li>Contact</li>
            </NavLink>
            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className={`${styles.link} ${location.pathname === "/login" ? styles.active__link : ""
                    }`}>
                  <li>Login</li>
                </NavLink>
                <NavLink
                  to="/creator-signup"
                  className={`${styles.link} ${location.pathname === "/creator-signup"
                    ? styles.active__link
                    : ""
                    } ${styles.removeLink}`}>
                  <li>Join as Creator</li>
                </NavLink>
                <NavLink
                  to="/brand-signup"
                  className={`${styles.link} ${location.pathname === "/brand-signup"
                    ? styles.active__link
                    : ""
                    } ${styles.removeLink}`}>
                  <li>Join as Brand</li>
                </NavLink>
              </>
            ) : user.role === "admin" || user.role === "influencer" ? (
              <>
                <a
                  href={`${process.env.REACT_APP_DASHBOARD_LINK}`}
                  className={`${styles.link} ${location.pathname ===
                    `${process.env.REACT_APP_DASHBOARD_LINK}`
                    ? styles.active__link
                    : ""
                    } ${styles.removeLink}`}
                  target="_blank">
                  <li>Dashboard</li>
                </a>
                <NavLink
                  onClick={handleLogout}
                  className={`${styles.link} ${styles.removeLink}`}>
                  <li>Logout</li>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to={"/dashboard"}
                  className={`${styles.link} ${location.pathname === "dashboard" ? styles.active__link : ""
                    } ${styles.removeLink}`}
                  target="_blank">
                  <li>Dashboard</li>
                </NavLink>
                <NavLink
                  onClick={handleLogout}
                  className={`${styles.link} ${styles.removeLink}`}>
                  <li>Logout</li>
                </NavLink>
              </>
            )}
          </ul>
        </nav>
        <div className={styles.auth}>
          {!user ? (
            <>
              {/* <div className={styles.my__account}>
                <Link to={"/login"} className={styles.login__href}>
                  <img
                    src={loginIcon}
                    alt="Login Icon"
                    className={styles.login__icon}
                  />
                </Link>
              </div> */}
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
              <img
                src={burger}
                alt="Burger Icon to display the menu"
                className={styles.burger}
                onClick={() => setNav(!nav)}
              />
            </>
          ) : user.role === "admin" || user.role === "influencer" ? (
            <div className={styles.buttons}>
              <a
                href={`${process.env.REACT_APP_DASHBOARD_LINK}`}
                target="_blank">
                <div
                  className={`${styles.dashboard__wrapper} ${styles.button} ${styles.join__as__creator}`}>
                  <img src={edit} alt="" className={styles.dashboard__icon} />
                  Dashboard
                </div>
              </a>
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
              <img
                src={burger}
                alt="Burger Icon to display the menu"
                className={styles.burger}
                onClick={() => setNav(!nav)}
              />
            </div>
          ) : (
            <div className={styles.buttons}>
              <Link to={`/dashboard`} target="_blank">
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
              <img
                src={burger}
                alt="Burger Icon to display the menu"
                className={styles.burger}
                onClick={() => setNav(!nav)}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
