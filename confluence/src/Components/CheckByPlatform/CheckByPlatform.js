import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CheckByPlatform.module.css";
import SectionHead from "../SectionHead/SectionHead";
import { Link } from "react-router-dom";

function CheckByPlatform() {
  const [platformsData, setPlatformsData] = useState([]);

  const fetchplatformsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/platform/get/eight`
      );
      setPlatformsData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchplatformsData();
  }, []);
  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Check by Platform"}
            description={
              "We have a lot of opportunities for you. Come check them!"
            }
          />
          <div className={styles.platforms}>
            {platformsData &&
              platformsData.map((platform) => (
                <Link to={"/"} className={styles.platform}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${platform.background})`,
                    }}></div>
                  <div className={styles.platform__name}>{platform.name}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckByPlatform;
