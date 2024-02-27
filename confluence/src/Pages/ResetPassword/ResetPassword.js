import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import hideOrSeen from "../../Assets/Icons/seen.png";

function ResetPassword() {
  const navigate = useNavigate();
  const { id, token } = useParams();

  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  //------
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const visiblePasswordOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };
  const visiblePasswordTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };
  //------

  // Regex validations
  const passwordRegex = /^.{8,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!newPassword && !verifyPassword) {
      Swal.fire({
        title: "Have you inserted anything?",
        text: "Please update at least one field.",
        icon: "question",
      });
      return;
    }
    if (!newPassword || newPassword === "") {
      Swal.fire({
        title: "Your password?",
        text: "Enter the New password.",
        icon: "question",
      });
      return;
    }
    /* */
    if (newPassword) {
      if (!passwordRegex.test(newPassword)) {
        Swal.fire({
          title: "Your new password?",
          text: "New password should be at least 8 characters.",
          icon: "question",
        });
        return;
      }
      if (!verifyPassword || verifyPassword === "") {
        Swal.fire({
          title: "Your verify password?",
          text: "Enter the verify password.",
          icon: "question",
        });
        return;
      }
      if (!passwordRegex.test(verifyPassword)) {
        Swal.fire({
          title: "Your verify password?",
          text: "Verify password should be at least 8 characters.",
          icon: "question",
        });
        return;
      }
      if (newPassword !== verifyPassword) {
        Swal.fire({
          title: "Are you sure?",
          text: "Passwords do not match.",
          icon: "question",
        });
        return;
      }
    }

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND}/reset/password?id=${id}&token=${token}`,
        { password: newPassword },
        { withCredentials: true }
      );
      if (response.data) {
        Swal.fire({
          title: "Done",
          text: "Password updated successfully!",
          icon: "success",
        });
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 1000);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Try again.",
      });
      console.error("Error:", error);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <Helmet>
          <title>Reset Password | Confluence</title>
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
              <Link to={"/forget-password"}>
                <span className={styles.sub__chain}>Forget Password</span>
              </Link>
              <span className={styles.sub__chain}>&gt;</span>
              <Link to={"#"}>
                <span className={styles.sub__chain}>Reset Password</span>
              </Link>
            </div>
            <h1 className={styles.content}>Reset Password</h1>
          </div>
        </section>
        <section className={`container ${styles.main__section}`}>
          <div className={styles.signup__wrapper}>
            <h2 className={styles.form__title}>Reset Password</h2>
            <form
              action="/"
              className={styles.form}
              onSubmit={handleSubmit}
              encType="multipart/form-data">
              <div className={styles.single__input}>
                <label htmlFor="pass">Enter your new password.</label>
                <div className={styles.password__input}>
                  <input
                    className={styles.input}
                    type={showPasswordOne ? "text" : "password"}
                    id="pass"
                    name="password"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                    required
                  />
                  <img
                    src={hideOrSeen}
                    onClick={visiblePasswordOne}
                    className={showPasswordOne ? styles.hideicon : ""}
                    alt="Icon for the input"
                  />
                </div>
              </div>
              <div className={styles.single__input}>
                <label htmlFor="email">Verify your new password.</label>
                <div className={styles.password__input}>
                  <input
                    className={styles.input}
                    type={showPasswordTwo ? "text" : "password"}
                    id="email"
                    name="verify"
                    onChange={(e) => {
                      setVerifyPassword(e.target.value);
                    }}
                    required
                  />
                  <img
                    src={hideOrSeen}
                    onClick={visiblePasswordTwo}
                    className={showPasswordTwo ? styles.hideicon : ""}
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
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default ResetPassword;
