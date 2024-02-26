import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FeaturedCollabs.module.css";
import SectionHead from "../SectionHead/SectionHead";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewRelatedCollabs from "../ViewRelatedCollabs/ViewRelatedCollabs";
import LoadingSection from "../LoadingSection/LoadingSection";

function FeaturedCollabs() {
  const [eightCollabs, setEightCollabs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEightCollabs = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/collaboration/get/newesteight`
      );
      if (response.data) {
        setEightCollabs(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEightCollabs();
  }, []);

  //--------------------
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
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
            title={"Collaboration Showcase"}
            description={"Unlock the potential of influential partnerships!"}
          />
          <div className={styles.collabs}>
            {loading ? (
              <LoadingSection
                padding={"calc(var(--main-section-spacing) / 2)"}
              />
            ) : (
              <Slider {...settings} className={styles.carousel}>
                {eightCollabs &&
                  eightCollabs.map((collab) => (
                    <div className={styles.single} key={collab._id}>
                      <ViewRelatedCollabs
                        key={collab?._id}
                        data={collab}
                        linkTo={`${collab?.userId?.name}/collaboration/${collab?.title}`}
                      />
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

export default FeaturedCollabs;
