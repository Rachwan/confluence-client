import React from "react";
import confluence from "../../Assets/Icons/confluenceTwo.svg";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.logo}>
      <img src={confluence} alt="" />
    </div>
  );
}
export default Loading;
