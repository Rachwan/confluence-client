import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CheckByCategory.module.css";
import SectionHead from "../SectionHead/SectionHead";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingSection from "../LoadingSection/LoadingSection";
import { useNavigate } from "react-router-dom";

function CheckByCategory() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/category/get/eight`
      );
      if (response.data) {
        setCategoriesData(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const settings = {
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

  const handleCategory = (id) => {
    const filterState = { categories: [id] };
    navigate("/influencers", { state: { filterState } });
  };

  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Explore by Category"}
            description={"Discover limitless possibilities."}
          />
          <div className={styles.platforms}>
            {loading ? (
              <LoadingSection
                padding={"calc(var(--main-section-spacing) / 2)"}
              />
            ) : (
              <Slider {...settings}>
                {categoriesData &&
                  categoriesData.map((category) => (
                    <div
                      onClick={() => handleCategory(category?._id)}
                      key={category?._id}>
                      <Link
                        to={`/influencers?categoryId=${category?._id}`}
                        className={styles.platform}>
                        <a
                          href={`/influencers?categoryId=${category?._id}`}
                          target="_blank"
                          rel="noopener noreferrer">
                          <div
                            className={styles.image}
                            style={{
                              backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${category?.background})`,
                            }}></div>
                          <div className={styles.platform__name}>
                            {category.name}
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
              </Slider>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckByCategory;
