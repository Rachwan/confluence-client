import React from "react";
import { Link } from "react-router-dom";
import styles from "./ViewRelated.module.css";

const ViewRelated = ({
  bgImg,
  profileLink,
  pImg,
  infName,
  totalFollowers,
  link,
  linkContent,
  text,
}) => {
  return (
    <div className={styles.collab}>
      <div className={styles.image__wrapper} style={{ backgroundImage: `url(${bgImg})`}}>
        <Link to={`${profileLink || "#"}`} className={styles.profile}>
          <img src={pImg} alt="" />
          <div className={styles.details}>
            <h4 className={styles.name}>{infName}</h4>
            <div className={styles.total__followers}>
              {totalFollowers} followers
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.content}>
        <Link to={`${link || "#"}`} className={styles.category}>
          {linkContent}
        </Link>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
export default ViewRelated;
