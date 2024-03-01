import { React, useState, useContext } from "react";
import { UserContext } from "../../UseContext/UserContext.js";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import hideOrSeen from "../../Assets/Icons/seen.png";
import OAuth from "../../OAuth/OAuth.js";

function Login() {
  const { fetchUserData, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Regex validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{8,}$/;

  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
    if (!formData.password) {
      Swal.fire({
        title: "Your Password?",
        text: "Please enter your password.",
        icon: "question",
      });
      return;
    }
    if (!passwordRegex.test(formData.password)) {
      Swal.fire({
        title: "Your Password?",
        text: "Password should be at least 8 characters.",
        icon: "question",
      });
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/login`,
        formData
      );
      if (response.data) {
        console.log(response.data);
        await fetchUserData();
        Swal.fire({
          title: "Welcome Back",
          text: "Login successfully!",
          icon: "success",
        });
        if (response.data.data.role === "admin") {
          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_DASHBOARD_LINK}/`;
          }, 1000);
        } else if (response.data.data.role === "influencer") {
          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_DASHBOARD_LINK}/influencer-details`;
          }, 1000);
        } else {
          navigate(`/`, {
            replace: true,
          });
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Swal.fire({
          title: "Are you sure about your info?",
          text: "Incorrect email or password.",
          icon: "question",
        });
      } else if (error.response && error.response.status === 400) {
        Swal.fire({
          title: "You have been here?",
          text: "Email already exists.",
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
          <title>Login | Confluence</title>
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
            <form
              action="/"
              className={styles.form}
              onSubmit={handleSubmit}
              encType="multipart/form-data">
              <div className={styles.single__input}>
                <label htmlFor="email">
                  Email address<span className={styles.star}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.single__input}>
                <label htmlFor="pass">
                  Password<span className={styles.star}>*</span>
                </label>
                <div className={styles.password__input}>
                  <input
                    className={styles.input}
                    type={showPassword ? "text" : "password"}
                    id="pass"
                    name="password"
                    onChange={handleInputChange}
                    required
                  />
                  <img
                    src={hideOrSeen}
                    onClick={visiblePassword}
                    className={showPassword ? styles.hideicon : ""}
                    alt="Icon for the input"
                  />
                </div>
              </div>
              <div className={styles.btnHolder}>
                <button
                  className={styles.Submit__button}
                  type="submit"
                  value="submit"
                  onClick={handleSubmit}>
                  Login
                </button>
                <Link to={"/forget-password"} target="_blank">
                  <p className={styles.lostpassword}>Lost your password?</p>
                </Link>
              </div>
            </form>
            <div className={styles.or__hr}>
              <hr />
              <span className={styles.or__wrapper}>or</span>
            </div>
            <div className={styles.oauth}>
              <OAuth signup={false} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
