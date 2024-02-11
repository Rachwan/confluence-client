import style from "./OAuth.module.css";
import googleIcon from "../Assets/Icons/google.png";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/firebase.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UseContext/UserContext.js";
import axios from "axios";
import Swal from "sweetalert2";

export default function OAuth({ signup, influencer }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleGoogleButton = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      if (!result) {
        console.error("Google authentication result is undefined");
        return;
      }
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/googleauth`,
        {
          name: result.user.displayName.split(" ")[0],
          email: result.user.email,
          role: influencer ? "influencer" : "business",
        }
      );
      if (response.data) {
        setUser(response.data);
        Swal.fire({
          title: `Welcome ${response.data.data.name}`,
          text: `${signup ? "Signup successfully!" : "Login successfully!"}`,
          icon: "success",
        });
        navigate("/", { replace: true });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Can't continue with Google! Try again.",
      });
      console.error("Error during Google authentication:", error);
    }
  };

  return (
    <div
      className={style.googleButton}
      onClick={handleGoogleButton}
    >
      <img src={googleIcon} alt="Google Icon" className={style.googleIcon} />
      <p className={style.slogan}>{signup ? "Signup" : "Login"} with Google</p>
    </div>
  );
}
