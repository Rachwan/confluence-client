import { React, useState } from "react";
import styles from "./FogetPassword.module.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function FogetPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  // Regex validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form fields
    if (!formData.email) {
      Swal.fire({
        title: "Your Email?",
        text: "Please enter your email.",
        icon: "question",
      });
      return;
    }
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: "Your Email?",
        text: "Please enter a valid email.",
        icon: "question",
      });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/forget-password`,
        formData
      );
      if (response.data) {
        Swal.fire({
          title: "Done",
          text: "Email sent successfully! Check your email to reset the password.",
          icon: "success",
        });
      }
      setFormData({ email: "" });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Swal.fire({
          title: "Are you sure about your info?",
          text: "Incorrect email!",
          icon: "question",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Try again.",
        });
      }
    }
  };

  return (
    <>
      <main className={styles.main}>
        <Helmet>
          <title>Forget Password | Confluence</title>
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
              <span className={styles.sub__chain}>&gt;</span>
              <Link to={"/login/forget-password"}>
                <span className={styles.sub__chain}>Forget Password</span>
              </Link>
            </div>
            <h1 className={styles.content}>Forget Password</h1>
          </div>
        </section>
        <section className={`container ${styles.main__section}`}>
          <div className={styles.signup__wrapper}>
            <h2 className={styles.form__title}>Forget Password</h2>
            <form
              action="/"
              className={styles.form}
              onSubmit={handleSubmit}
              encType="multipart/form-data">
              <div className={styles.single__input}>
                <label htmlFor="email">
                  Enter you email to receive a verfication code
                  <span className={styles.star}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) =>
                    setFormData({
                      email: e.target.value,
                    })
                  }
                  value={formData.email}
                  required
                />
              </div>
              <div className={styles.btnHolder}>
                <button
                  className={styles.Submit__button}
                  type="submit"
                  value="submit"
                  onClick={handleSubmit}>
                  Send Code
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default FogetPassword;
