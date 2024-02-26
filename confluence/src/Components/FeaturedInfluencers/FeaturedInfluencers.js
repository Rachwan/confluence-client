import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FeaturedInfluencers.module.css";
import SectionHead from "../SectionHead/SectionHead";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewRelated from "../../Components/ViewRelated/ViewRelated";
import LoadingSection from "../LoadingSection/LoadingSection";

function FeaturedInfluencers() {
  const [eightInf, setEightInf] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEightInf = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/user/get/newesteight`
      );
      if (response.data) {
        setEightInf(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEightInf();
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
            title={"Inspirational Voices"}
            description={"Endless possibilities await your brand!"}
          />
          <div className={styles.collabs}>
            {loading ? (
              <LoadingSection
                padding={"calc(var(--main-section-spacing) / 2)"}
              />
            ) : (
              <Slider {...settings}>
                {eightInf &&
                  eightInf.map((influencer) => (
                    <div className={styles.single} key={influencer._id}>
                      <ViewRelated key={influencer?._id} data={influencer} />
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

export default FeaturedInfluencers;
