import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CheckByPlatform.module.css";
import SectionHead from "../SectionHead/SectionHead";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingSection from "../LoadingSection/LoadingSection";
import { useNavigate } from "react-router-dom";

function CheckByPlatform() {
  const [platformsData, setPlatformsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchplatformsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/platform/get/eight`
      );
      setPlatformsData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchplatformsData();
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

  const handlePlatform = (id) => {
    const filterState = { platformId: id, platformRange: ["100K-500K"] };
    navigate("/influencers", { state: { filterState } });
  };

  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Explore by Platform"}
            description={"Discover limitless possibilities."}
          />
          <div className={styles.platforms}>
            {loading ? (
              <LoadingSection
                padding={"calc(var(--main-section-spacing) / 2)"}
              />
            ) : (
              <Slider {...settings}>
                {platformsData &&
                  platformsData.map((platform) => (
                    <div
                      onClick={() => handlePlatform(platform?._id)}
                      key={platform?._id}>
                      <Link
                        to={`/influencers?platformId=${platform?._id}`}
                        className={styles.platform}
                        key={platform._id}>
                        <div
                          className={styles.image}
                          style={{
                            backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${platform.background})`,
                          }}></div>
                        <div className={styles.platform__name}>
                          {platform.name}
                        </div>
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

export default CheckByPlatform;
