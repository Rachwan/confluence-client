import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CheckByCategory.module.css";
import SectionHead from "../SectionHead/SectionHead";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 5,
    // slidesToScroll: 1,
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Check by Category"}
            description={"We have a lot of opportunities for you!"}
          />
          <div className={styles.platforms}>
            <Slider {...settings}>
              {categoriesData &&
                categoriesData.map((category) => (
                  <Link to={"/"} className={styles.platform}>
                    <div
                      className={styles.image}
                      style={{
                        backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${category?.background})`,
                      }}></div>
                    <div className={styles.platform__name}>{category.name}</div>
                  </Link>
                ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckByCategory;
