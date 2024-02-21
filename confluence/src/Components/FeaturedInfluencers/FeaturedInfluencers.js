import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FeaturedInfluencers.module.css";
import SectionHead from "../SectionHead/SectionHead";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewRelated from "../../Components/ViewRelated/ViewRelated";

function FeaturedInfluencers() {
  const [eightInf, setEightInf] = useState([]);

  const fetchEightInf = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/user/get/newesteight`
      );
      setEightInf(response.data);
      console.log(response.data);
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
            title={"Featured Influencers"}
            description={"We have a lot of opportunities for you!"}
          />
          <div className={styles.collabs}>
            <Slider {...settings}>
              {eightInf &&
                eightInf.map((influencer) => (
                  <div className={styles.single}>
                    <ViewRelated key={influencer?._id} data={influencer} />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedInfluencers;
