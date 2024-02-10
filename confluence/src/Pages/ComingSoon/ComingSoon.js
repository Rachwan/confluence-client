import React, { useState } from "react";
import styles from "./ComingSoon.module.css";
import { Helmet } from "react-helmet-async";
import Header from "../../Layout/Header/Header";
import Swal from "sweetalert2";

function ComingSoon() {
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
        text: "Please enter your email to notify you.",
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
    Swal.fire({
      title: "Your email is saved!",
      text: "You will get a notification when it is available!",
      icon: "success",
    });
  };

  return (
    <main className={styles.main__wrapper}>
      <Helmet>
        <title>Coming soon - Confluence</title>
        <meta
          name="description"
          content="Embark on a journey with Confluence! Our upcoming features will redefine how businesses and influencers collaborate. Stay tuned for exciting connections and opportunities."
        />
        <meta
          name="keywords"
          content="coming soon, Confluence, collaboration, influencers, businesses"
        />
      </Helmet>
      <Header />
      <div className={styles.main}>
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.content}>
            <p className={styles.title}>
              <span className={styles.coming}>Coming</span>{" "}
              <span className={styles.soon}>So Soon</span>
            </p>
            <p className={styles.message}>Our new website is on its way.</p>

            <div className={styles.input__wrapper}>
              <p className={styles.notificated__message}>
                Get notified when we launch.
              </p>
              <div className={styles.single__input}>
                <input
                  className={styles.input}
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleEmailChange}
                  placeholder="Enter your email here..."
                  required
                />
                <div className={styles.button} onClick={handleSubmit}>
                  Notify me
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ComingSoon;
