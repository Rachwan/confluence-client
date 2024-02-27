import { React, useState, useContext } from "react";
import { UserContext } from "../../UseContext/UserContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./BrandSignup.module.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import hideOrSeen from "../../Assets/Icons/seen.png";
import Swal from "sweetalert2";
import OAuth from "../../OAuth/OAuth.js";

function BrandSignup() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [profileFile, setProfileFile] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    role: "business",
  });

  // Regex validations
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{8,}$/;
  const numberRegex = /^\d{8,}$/;

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

  const handleProfileChange = (e) => {
    setProfileFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form fields
    if (!formData.name) {
      Swal.fire({
        title: "Your Name?",
        text: "Please enter your name.",
        icon: "question",
      });
      return;
    }
    if (!nameRegex.test(formData.name)) {
      Swal.fire({
        title: "Your Name?",
        text: "Please enter a valid name.",
        icon: "question",
      });
      return;
    }
    console.log(formData.number);
    if (!formData.number) {
      Swal.fire({
        title: "Your Phone Number?",
        text: "Please enter your phone number.",
        icon: "question",
      });
      return;
    }
    if (!numberRegex.test(formData.number)) {
      Swal.fire({
        title: "Your Phone Number?",
        text: "Please enter a valid phone number.",
        icon: "question",
      });
      return;
    }

    if (profileFile) {
      setFormData({
        ...formData,
        profile: profileFile,
      });
    } else {
      Swal.fire({
        title: "Your Brand Logo?",
        text: "Please submit your logo.",
        icon: "question",
      });
      return;
    }

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
        `${process.env.REACT_APP_BACKEND}/user/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        setUser(response.data);
        Swal.fire({
          title: "Welcome",
          text: "Signup successfully!",
          icon: "success",
        });
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
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
      console.error("Error:", error);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <Helmet>
          <title>Signup As Brand | Confluence</title>
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
              <Link to={"/brand-signup"}>
                <span className={styles.sub__chain}>Sign up as Brand</span>
              </Link>
            </div>
            <h1 className={styles.content}>Sign up as Brand</h1>
          </div>
        </section>
        <section className={styles.background}>
          <div className={`container ${styles.main__section}`}>
            <div className={styles.signup__wrapper}>
              <h2 className={styles.form__title}>Registration</h2>
              <form
                action="/"
                className={styles.form}
                onSubmit={handleSubmit}
                encType="multipart/form-data">
                <div className={styles.single__input}>
                  <label htmlFor="bn">
                    Brand Name<span className={styles.star}>*</span>
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="bn"
                    name="name"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.single__input}>
                  <label htmlFor="pn">
                    Phone Number<span className={styles.star}>*</span>
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="pn"
                    name="number"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.single__input}>
                  <label htmlFor="bl">
                    Brand Logo<span className={styles.star}>*</span>
                  </label>

                  <div className={styles.upload}>
                    <input
                      type="file"
                      id="bl"
                      name="profile"
                      className={styles.input}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
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
                    Register
                  </button>
                  <Link to={"/login"}>
                    <p className={styles.have__account}>
                      Already have an account?
                    </p>
                  </Link>
                </div>
              </form>
              <div className={styles.or__hr}>
                <hr />
                <span className={styles.or__wrapper}>or</span>
              </div>
              <div className={styles.oauth}>
                <OAuth signup={true} influencer={false} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default BrandSignup;
