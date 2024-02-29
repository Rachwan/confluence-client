import React from "react";
import { Link } from "react-router-dom";
import styles from "./View.module.css";

const View = ({ data }) => {
  // Get the total followers and tranform it
  function formatFollowersCount(followers) {
    if (followers >= 1000000) {
      return (followers / 1000000).toFixed(1) + "M";
    } else if (followers >= 100000) {
      return (followers / 1000).toFixed(0) + "K";
    } else {
      return followers.toString();
    }
  }
  const totalFollowers = data?.platforms?.reduce(
    (sum, platform) => sum + platform.followers,
    0
  );

  const followersToShow = formatFollowersCount(data?.totalFollowers);
  return (
    <div className={styles.influencer}>
      <div
        className={styles.image__wrapper}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.background})`,
        }}>
        <Link
          to={`/influencer/${data?.name}`}
          className={styles.profile}
          state={data}>
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
          className={styles.category}
          state={data}>
          {data?.categoryId?.name} influencer
        </Link>
        <p className={styles.text}>
          Discover {data?.name}. A World of Influence Await.
        </p>
      </div>
    </div>
  );
};
export default View;
