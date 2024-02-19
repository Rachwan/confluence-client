import React from "react";
import { Link } from "react-router-dom";
import styles from "./ViewRelated.module.css";

const ViewRelated = ({ data }) => {
  const totalFollowers = data?.platforms?.reduce(
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
    <div className={styles.collab}>
      <div
        className={styles.image__wrapper}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.background})`,
        }}>
        <Link
          to={`/influencer/${data?.name}`}
          state={data}
          className={styles.profile}>
          <div
            className={styles.profile__image}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.profile})`,
            }}></div>
          <div className={styles.details}>
            <h4 className={styles.name}>{data?.name}</h4>
            <div className={styles.total__followers}>
              {followersToShow} Followers
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.content}>
        <Link
          to={`/influencer/${data?.name}`}
          state={data}
          className={styles.category}>
          {data?.categoryId?.name} influencer
        </Link>
        <p className={styles.text}>
          Dive into {data?.name}'s world: Discover collaborations, insights, and
          more.
        </p>
      </div>
    </div>
  );
};
export default ViewRelated;
