import React from "react";
import { Link } from "react-router-dom";
import styles from "./ViewCollabs.module.css";

const ViewCollabs = ({ data, formatFollowersCount }) => {
  const totalFollowers = data?.userId?.platforms?.reduce(
    (sum, platform) => sum + platform.followers,
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
    <div className={styles.influencer}>
      <div
        className={styles.image__wrapper}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.background})`,
        }}>
        <Link
          to={`/${data?.userId?.name}/collaborations/${data?.title}`}
          className={styles.profile}
          state={data}>
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
      </div>
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
    </div>
  );
};
export default ViewCollabs;
