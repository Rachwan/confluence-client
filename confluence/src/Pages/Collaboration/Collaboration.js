import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Collaboration.module.css";
import { Helmet } from "react-helmet-async";
import Intro from "../../Components/Intro/Intro";
import ViewRelatedCollabs from "../../Components/ViewRelatedCollabs/ViewRelatedCollabs";
import star from "../../Assets/Icons/star-solid.svg";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function Collaboration() {
  const [similarCollabs, setSimilarCollabs] = useState([]);
  const location = useLocation();
  const data = location.state && location.state;
  // Fetch the collab related to this influencer
  const [fourCollabs, setFourCollabs] = useState([]);
  const fetchFourCollabs = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/collaboration/userfourcollaborations/${data.userId._id}/${data._id}`
      );
      setFourCollabs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFourCollabs();
  }, []);

  //--------------------

  // Fetch 5 related collabs to the same category
  useEffect(() => {
    const fetchSimilarCollabs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}/collaboration/related/five`,
          {
            params: {
              userId: data?.userId?._id,
            },
          }
        );
        if (response.data) {
          setSimilarCollabs(response.data);
        }
      } catch (error) {
        console.error("Error fetching similar collaborations:", error.message);
      }
    };

    fetchSimilarCollabs();
    // }
  }, [data]);

  //--------------------

  // Tranfrom the number of followers
  function formatFollowersCount(followers) {
    if (followers >= 1000000) {
      return (followers / 1000000).toFixed(1) + "M";
    } else if (followers >= 100000) {
      return (followers / 1000).toFixed(0) + "K";
    } else {
      return followers.toString();
    }
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className={styles.main}>
      <Helmet>
        <title>{`${data?.title} | ${data?.userId?.name} | Confluence`}</title>
        <meta name="description" content="(((Title or Single title)))" />
        <meta name="keywords" content="" />
      </Helmet>
      <Intro
        influencer={true}
        pageName={data?.userId?.name}
        title={data?.title}
        background={"collaboration"}
      />
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          className={styles.images}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <Slider {...settings}>
            <div className={styles.image__wrapper}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.firstImage})`,
                }}></div>
            </div>
            <div className={styles.image__wrapper}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.secondImage})`,
                }}></div>
            </div>
            <div className={styles.image__wrapper}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.thirdImage})`,
                }}></div>
            </div>
            <div className={styles.image__wrapper}>
              <div
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.fourthImage})`,
                }}
                className={styles.image}></div>
            </div>
          </Slider>
        </motion.div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.text}>
              <h2 className={styles.title}>Description</h2>
              <motion.p
                className={styles.description}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                {data?.description}
              </motion.p>
            </div>
            <div className={styles.table__wrapper}>
              <h2 className={styles.title}>Additional information</h2>
              <table className={styles.table}>
                <tbody className={styles.body}>
                  {data?.additional &&
                    data?.additional.map((item) => (
                      <tr key={item._id} className={styles.tr}>
                        <motion.th
                          className={styles.th}
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8 }}>
                          {item.name}
                        </motion.th>
                        <motion.td
                          className={styles.td}
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8 }}>
                          {item.detail}
                        </motion.td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <motion.div
              className={styles.reviews__wrapper}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}>
              <motion.h4
                className={styles.reviews__title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                There are no reviews yet.
              </motion.h4>
              <motion.h2
                className={styles.main__title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                Be the first to review “{data?.userId?.name}“: Living Life
                Unapologetically
              </motion.h2>
              <motion.p
                className={styles.display__message}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                Your email address will not be published. Required fields are
                marked <span className={styles.star}>*</span>
              </motion.p>
              <motion.div
                className={styles.ratings}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                <motion.p
                  className={styles.select__title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}>
                  Your rating
                </motion.p>
                <motion.div
                  className={styles.select__rating}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}>
                  <img src={star} alt="" className={styles.star__icon} />
                  <img src={star} alt="" className={styles.star__icon} />
                  <img src={star} alt="" className={styles.star__icon} />
                  <img src={star} alt="" className={styles.star__icon} />
                  <img src={star} alt="" className={styles.star__icon} />
                </motion.div>
                <form action="">
                  <motion.div
                    className={styles.single__input}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}>
                    <motion.label
                      htmlFor="name"
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}>
                      Name <span className={styles.star}>*</span>
                    </motion.label>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </motion.div>
                  <motion.div
                    className={styles.single__input}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}>
                    <motion.label
                      htmlFor="email"
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}>
                      Email <span className={styles.star}>*</span>
                    </motion.label>
                    <input
                      type="email"
                      name="Email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </motion.div>
                  <motion.div
                    className={styles.single__input}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}>
                    <label htmlFor="yourr">
                      Your review <span className={styles.star}>*</span>
                    </label>
                    <textarea
                      name="review"
                      id="yourr"
                      cols="30"
                      rows="10"
                      className={styles.textarea}
                      placeholder="Place your review here"></textarea>
                  </motion.div>
                  <motion.div
                    className={styles.btnHolder}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}>
                    <motion.button
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className={styles.Submit__button}
                      type="submit"
                      value="submit">
                      Submit
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className={styles.sections}>
            <motion.div
              className={styles.message__wrraper}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}>
              <Link
                to={`/influencer/${data?.userId?.name}`}
                state={data?.userId}>
                <motion.div
                  className={styles.profile}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className={styles.profile__img}
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.userId?.profile})`,
                    }}></motion.div>
                  <h3 className={styles.name}>{data?.userId?.name}</h3>
                </motion.div>
              </Link>
              <motion.p
                className={styles.note}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                Thanks for checking out my listing. Have any questions?
              </motion.p>
              <div className={styles.platforms}>
                {data?.userId?.platforms &&
                  data?.userId?.platforms?.slice(0, 4).map((platform) => (
                    <Link to={`${platform?.link}`} target="_blank">
                      <div className={styles.platform}>
                        <img
                          src={`${process.env.REACT_APP_BACKEND}/${platform?.platformId?.icon}`}
                          className={styles.icon}
                          alt=""
                        />
                        <span className={styles.platform__name}>
                          {formatFollowersCount(platform?.followers)} Followers
                        </span>
                      </div>
                      {console.log(platform)}
                    </Link>
                  ))}
              </div>
            </motion.div>
            {fourCollabs && fourCollabs.length !== 0 ? (
              <>
                <h3 className={styles.check__this}>
                  You can also check this for {data?.userId?.name}:
                </h3>
                <div className={styles.related__self}>
                  {fourCollabs.map((collab) => (
                    <div className={styles.singlee}>
                      <ViewRelatedCollabs
                        key={collab?._id}
                        data={collab}
                        linkTo={`${collab?.userId?.name}/collaboration/${collab?.title}`}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </motion.div>
        </div>
        {/* Related Collabs */}
        {similarCollabs && similarCollabs.length !== 0 ? (
          <>
            <div className={styles.related__wrapper}>
              <h2 className={styles.title}>Related Collaborations</h2>
              <div className={styles.related}>
                {similarCollabs.map((collab) => (
                  <div className={styles.single}>
                    <ViewRelatedCollabs
                      key={collab?._id}
                      data={collab}
                      linkTo={`${collab?.userId?.name}/collaboration/${collab?.title}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
}

export default Collaboration;
