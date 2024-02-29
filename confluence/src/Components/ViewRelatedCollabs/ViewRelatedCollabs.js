import React from "react";
import { Link } from "react-router-dom";
import styles from "./ViewRelatedCollabs.module.css";
import { motion } from "framer-motion";

const ViewRelatedCollabs = ({ data }) => {
  const totalFollowers = data?.userId?.platforms?.reduce(
    (sum, platform) => sum + platform?.followers,
    0
  );
  function formatFollowersCount(followers) {
    if (followers >= 1000000) {
      return (followers / 1000000)?.toFixed(1) + "M";
    } else if (followers >= 100000) {
      return (followers / 1000)?.toFixed(0) + "K";
    } else {
      return followers?.toString();
    }
  }
  const followersToShow = formatFollowersCount(totalFollowers);
  return (
    <motion.div
      className={styles.collab}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <motion.div
        className={styles.image__wrapper}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.background})`,
        }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <Link
          to={`/${data?.userId?.name}/collaborations/${data?.title}`}
          state={data}
          className={styles.profile}>
          <div
            className={styles.profile__image}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.userId?.profile})`,
            }}></div>
          <div className={styles.details}>
            <h4 className={styles.name}>{data?.userId?.name}</h4>
            <div className={styles.total__followers}>
              {followersToShow} Followers
            </div>
          </div>
        </Link>
      </motion.div>
      <div className={styles.content}>
        <Link
          to={`/${data?.userId?.name}/collaborations/${data?.title}`}
          className={styles.category}
          state={data}>
          {data.platforms && data?.platforms?.length === 0
            ? "*No Platforms*"
            : data.platforms.map((platform, index) => (
                <span key={platform} style={{ fontSize: "17px" }}>
                  {platform}
                  {index !== data.platforms.length - 1 && " ∙ "}
                </span>
              ))}
        </Link>
        <p className={styles.text}>{data?.title}</p>
      </div>
    </motion.div>
  );
};
export default ViewRelatedCollabs;
