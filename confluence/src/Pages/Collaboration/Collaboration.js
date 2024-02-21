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

function Collaboration() {
  const [similarCollabs, setSimilarCollabs] = useState([]);
  const location = useLocation();
  const data = location.state && location.state;

  // Fetch the collab related to this influencer
  const [fourCollabs, setFourCollabs] = useState([]);
  const fetchFourCollabs = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/collaboration/userfourcollaborations/${data?.userId?._id}`
      );
      setFourCollabs(response.data);
      console.log(response.data);
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
  // const settings = {
  //   dots: true,
  //   autoplay: true,
  //   autoplaySpeed: 1500,
  //   pauseOnHover: true,
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "70px",
  //   slidesToShow: 3,
  //   speed: 500,
  // };
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <main className={styles.main}>
      <Helmet>
        <title>{`${data?.title} - ${data?.userId?.name} | Confluence`}</title>
        <meta name="description" content="(((Title or Single title)))" />
        <meta name="keywords" content="" />
      </Helmet>
      <Intro
        influencer={true}
        pageName={data?.userId?.name}
        title={data?.title}
      />
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.images}>
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
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.text}>
              <h2 className={styles.title}>Description</h2>
              <p className={styles.description}>{data?.description}</p>
            </div>
            <div className={styles.table__wrapper}>
              <h2 className={styles.title}>Additional information</h2>
              <table className={styles.table}>
                <tbody className={styles.body}>
                  {data?.additional &&
                    data?.additional.map((item) => (
                      <tr key={item._id} className={styles.tr}>
                        <th className={styles.th}>{item.name}</th>
                        <td className={styles.td}>{item.detail}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className={styles.reviews__wrapper}>
              <h4 className={styles.reviews__title}>
                There are no reviews yet.
              </h4>
              <h2 className={styles.main__title}>
                Be the first to review “Amanda Chamber: Living Life
                Unapologetically”
              </h2>
              <p className={styles.display__message}>
                Your email address will not be published. Required fields are
                marked <span className={styles.star}>*</span>
              </p>
              <div className={styles.ratings}>
                <p className={styles.select__title}>Your rating</p>
                <div className={styles.select__rating}>
                  <img src={star} alt="" className={styles.star__icon} />
                  <img src={star} alt="" className={styles.star__icon} />
                  <img src={star} alt="" className={styles.star__icon} />
                  <img src={star} alt="" className={styles.star__icon} />
                  <img src={star} alt="" className={styles.star__icon} />
                </div>
                <form action="">
                  <div className={styles.single__input}>
                    <label htmlFor="name">
                      Name <span className={styles.star}>*</span>
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className={styles.single__input}>
                    <label htmlFor="email">
                      Email <span className={styles.star}>*</span>
                    </label>
                    <input
                      type="email"
                      name="Email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className={styles.single__input}>
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
                  </div>
                  <div className={styles.btnHolder}>
                    <button
                      className={styles.Submit__button}
                      type="submit"
                      value="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.sections}>
            <div className={styles.message__wrraper}>
              <Link
                to={`/influencer/${data?.userId?.name}`}
                state={data?.userId}>
                <div className={styles.profile}>
                  <div
                    className={styles.profile__img}
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.userId?.profile})`,
                    }}></div>
                  <h3 className={styles.name}>{data?.userId?.name}</h3>
                </div>
              </Link>
              <p className={styles.note}>
                Thanks for checking out my listing. Have any questions?
              </p>
              <div className={styles.platforms}>
                {data?.userId?.platforms &&
                  data?.userId?.platforms?.slice(0, 4).map((platform) => (
                    <Link to={`/${platform?.platformId?.name}-Link`}>
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
                    </Link>
                  ))}
              </div>
            </div>
            <h3 className={styles.check__this}>
              You can also check this for {data?.userId?.name}:
            </h3>
            <div className={styles.related__self}>
              {fourCollabs &&
                fourCollabs.map((collab) => (
                  <div className={styles.singlee}>
                    <ViewRelatedCollabs
                      key={collab?._id}
                      data={collab}
                      linkTo={`${collab?.userId?.name}/collaboration/${collab?.title}`}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Related influencers */}
        <div className={styles.related__wrapper}>
          <h2 className={styles.title}>Related Collaborations</h2>
          <div className={styles.related}>
            {similarCollabs &&
              similarCollabs.map((collab) => (
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
      </div>
    </main>
  );
}

export default Collaboration;
