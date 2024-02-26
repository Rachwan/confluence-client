import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.module.css";
import styles from "./Footer.module.css";
import confluence from "../../Assets/Icons/confluenceTwo.svg";
import anglesRight from "../../Assets/Icons/angles-right-solid.svg";
import airplaing from "../../Assets/Icons/paper-plane-solid.svg";
import Swal from "sweetalert2";

const Footer = () => {
  const [emailInput, setEmailInput] = useState({
    email: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleEmailChange = (event) => {
    const { name, value } = event.target;

    setEmailInput({
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form fields
    if (!emailInput.email) {
      Swal.fire({
        title: "Your Email?",
        text: "Please enter your email to start receiving updates.",
        icon: "question",
      });
      return;
    }
    if (!emailRegex.test(emailInput.email)) {
      Swal.fire({
        title: "Your Email?",
        text: "Please enter a valid email.",
        icon: "question",
      });
      return;
    }
    setEmailInput({ email: "" });
    Swal.fire({
      title: "Your email is saved!",
      text: "You will start to get update news!",
      icon: "success",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container__wrapper}`}>
        <div className={styles.logo__description}>
          <Link to={"/"} className={styles.logo__container}>
            <div className={styles.logo__wrapper}>
              <div className={styles.logo}>
                <img src={confluence} alt="" />
              </div>
              <p className={styles.logo__name}>confluence</p>
            </div>
          </Link>
          <p className={styles.slogan}>
            Connecting brands with digital stars, crafting collaborations that
            propel you towards success.
          </p>
        </div>
        <div className={styles.company}>
          <h3 className={styles.section__title}>Website Sections</h3>
          <ul className={styles.links}>
            <Link to="/">
              <li>
                <img src={anglesRight} alt="" />
                Home
              </li>
            </Link>
            <Link to="/influencers">
              <li>
                <img src={anglesRight} alt="" />
                Influencers
              </li>
            </Link>
            <Link to={"/pricing"}>
              <li>
                <img src={anglesRight} alt="" />
                Pricing
              </li>
            </Link>
            <Link to="/about">
              <li>
                <img src={anglesRight} alt="" />
                About
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.company}>
          <h3 className={styles.section__title}>Navigation Links</h3>
          <ul className={styles.links}>
            <Link to={"/contact"}>
              <li>
                <img src={anglesRight} alt="" />
                Contact
              </li>
            </Link>
            <Link to="/creator-signup">
              <li>
                <img src={anglesRight} alt="" />
                Join as Creator
              </li>
            </Link>
            <Link to="/brand-signup">
              <li>
                <img src={anglesRight} alt="" />
                Join as Brand
              </li>
            </Link>
            <Link to="/login">
              <li>
                <img src={anglesRight} alt="" />
                Login
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.subscribe}>
          <h3 className={styles.section__title}>Stay Informed By Newsletter</h3>
          <form className={styles.signUp}>
            <label htmlFor="em" className={styles.sub__title}>
              Subscribe to our newsletter to receive early discount offers,
              updates.
            </label>
            <div className={styles.single__input}>
              <div className={styles.email__input}>
                <input
                  className={styles.input}
                  type="email"
                  id="em"
                  name="email"
                  value={emailInput.email}
                  placeholder="Enter you email."
                  onChange={handleEmailChange}
                  required
                />
                <img
                  src={airplaing}
                  onClick={handleSubmit}
                  alt="Sending Icon For sumbitting"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 - Confluence All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
