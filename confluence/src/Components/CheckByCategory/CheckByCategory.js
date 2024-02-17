import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CheckByCategory.module.css";
import SectionHead from "../SectionHead/SectionHead";
import { Link } from "react-router-dom";

function CheckByCategory() {
  const [categoriesData, setCategoriesData] = useState([]);

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/category/get/eight`
      );
      setCategoriesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Check by Category"}
            description={
              "We have a lot of opportunities for you. Come check them!"
            }
          />
          <div className={styles.platforms}>
            {categoriesData &&
              categoriesData.map((category) => (
                <Link to={"/"} className={styles.platform}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${category.background})`,
                    }}></div>
                  <div className={styles.platform__name}>{category.name}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckByCategory;
