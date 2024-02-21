import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FeaturedCollabs.module.css";
import SectionHead from "../SectionHead/SectionHead";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewRelatedCollabs from "../ViewRelatedCollabs/ViewRelatedCollabs";

function FeaturedCollabs() {
  const [eightCollabs, setEightCollabs] = useState([]);

  const fetchEightCollabs = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/collaboration/get/newesteight`
      );
      setEightCollabs(response.data);
      console.log("response.data helloooooooo", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEightCollabs();
  }, []);

  //--------------------
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
  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Featured Collaborations"}
            description={"We have a lot of opportunities for you!"}
          />
          <div className={styles.collabs}>
            <Slider {...settings} className={styles.carousel}>
              {eightCollabs &&
                eightCollabs.map((collab) => (
                  <div className={styles.single}>
                    <ViewRelatedCollabs
                      key={collab?._id}
                      data={collab}
                      linkTo={`${collab?.userId?.name}/collaboration/${collab?.title}`}
                    />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedCollabs;
