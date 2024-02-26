import React from "react";
import confluence from "../../Assets/Icons/confluenceTwo.svg";
import styles from "./LoadingSection.module.css";

function LoadingSection({ padding }) {
  return (
    <div className={styles.logo} style={{ padding: `${padding} 0` }}>
      <img src={confluence} alt="" />
    </div>
  );
}
export default LoadingSection;
