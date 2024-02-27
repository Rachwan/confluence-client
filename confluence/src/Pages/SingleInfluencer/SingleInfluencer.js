import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SingleInfluencer.module.css";
import { Helmet } from "react-helmet-async";
import Intro from "../../Components/Intro/Intro";
import ViewCollabs from "../../Components/ViewCollabs/ViewCollabs";
import { Link } from "react-router-dom";
import verified from "../../Assets/Icons/verified.png";
import locationIcon from "../../Assets/Icons/location.svg";
import calendarIcon from "../../Assets/Icons/calendar.svg";
import genderIcon from "../../Assets/Icons/gender.svg";
import ViewRelated from "../../Components/ViewRelated/ViewRelated";
import { useLocation } from "react-router-dom";
import LoadingSection from "../../Components/LoadingSection/LoadingSection";

function SingleInfluencer() {
  const [collaborations, setCollaborations] = useState([]);
  const [similarInfluencers, setSimilarInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const data = location.state && location.state;
  console.log(data);
  // Fetch the collab related to this influencer
  const fetchCollaborations = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/collaboration/usercollaborations/${data._id}`
      );
      if (response.data) {
        setCollaborations(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCollaborations();
  }, []);

  //--------------------

  // Fetch 5 related influencers to the same category
  useEffect(() => {
    const fetchSimilarInfluencers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}/user/related/five`,
          {
            params: {
              categoryId: data?.categoryId?._id,
              userId: data?._id,
            },
          }
        );
        if (response.data) {
          setSimilarInfluencers(response.data);
        }
      } catch (error) {
        console.error("Error fetching similar influencers:", error.message);
      }
    };

    fetchSimilarInfluencers();
    // }
  }, [data]);

  //--------------------

  // Transform the number
  function formatPhoneNumber(phoneNumber) {
    const phoneNumberString = phoneNumber?.toString();
    return `+961 ${phoneNumberString?.substr(0, 2)} ${phoneNumberString?.substr(
      2,
      3
    )} ${phoneNumberString?.substr(5, 3)}`;
  }

  // Tranfrom the number of followers
  function formatFollowersCount(followers) {
    if (followers >= 1000000) {
      return (followers / 1000000)?.toFixed(1) + "M";
    } else if (followers >= 100000) {
      return (followers / 1000)?.toFixed(0) + "K";
    } else {
      return followers?.toString();
    }
  }

  // Pagination
  const [activePage, setActivePage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = collaborations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const visibleCollaborations = collaborations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
  };

  //--------------------------------------------------

  return (
    <main className={styles.main}>
      <Helmet>
        <title>{`${data?.name} | Confluence`}</title>
        <meta
          name="description"
          content={`Get in touch with ${data?.name}. Whether you're a business looking to collaborate or an influencer with ${data?.totalFollowers} followers in the ${data?.categoryId?.name} category, we're here to connect and support you.`}
        />
        <meta
          name="keywords"
          content={`SingleInfluencer Confluence, ${data?.categoryId?.name} influencer, business collaboration, influencer partnerships, SingleInfluencer information, get in touch`}
        />
      </Helmet>
      <Intro
        pageName={data?.name}
        influencer={true}
        background={
          data?.gender === "Female" ? "femaleInfluencer" : "maleInfluencer"
        }
      />
      <div className="container">
        <div className={styles.wrapper}>
          {/* Filter Section */}
          <div className={styles.filter__wrapper}>
            <img
              src={verified}
              className={styles.verified}
              alt="Verified Icon"
            />
            <div className={styles.personal__info}>
              <div className={styles.image}>
                <div
                  className={styles.profile}
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${data?.profile})`,
                  }}></div>
              </div>

              <h2 className={styles.name}>{data?.name}</h2>
              <h2 className={styles.category}>
                {data?.categoryId?.name} Influencer
              </h2>
              <div className={styles.additional}>
                <span className={styles.city}>
                  <img src={locationIcon} alt="" /> {data?.cityId?.name}
                </span>
                <span className={styles.age}>
                  <img src={calendarIcon} alt="" /> {data?.age}
                </span>
                <span className={styles.gender}>
                  <img src={genderIcon} alt="" /> {data?.gender || "Male"}
                </span>
              </div>
              <Link
                to={`https://wa.me/${data?.number}`}
                className={styles.link}>
                <div className={styles.phone}>
                  <div className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                  </div>
                  <p className={styles.content}>
                    {formatPhoneNumber(data?.number)}
                  </p>
                </div>
              </Link>
              <Link to={`mailto:${data?.email}`} className={styles.link}>
                <div className={styles.email}>
                  <div className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                    </svg>
                  </div>
                  <p className={styles.content}>{data?.email}</p>
                </div>
              </Link>
            </div>
            <div className={styles.social__stats}>
              <div className={styles.stats}>
                <h4 className={styles.title}>Social Stats</h4>

                <div className={styles.accounts}>
                  {data?.platforms &&
                    data?.platforms?.map((platform) => (
                      <div
                        className={styles.account}
                        style={{
                          ...(platform?.platformId?.name === "Instagram"
                            ? {
                                borderLeft: "3px solid #ee2a7b",
                              }
                            : {
                                borderLeft: `3px solid ${platform?.platformId?.activeColor}`,
                              }),
                        }}>
                        <div
                          className={styles.social__icon}
                          style={{
                            background: `${platform?.platformId?.activeColor}`,
                          }}>
                          <img
                            src={`${process.env.REACT_APP_BACKEND}/${platform?.platformId?.icon}`}
                            className={styles.icon}
                            alt=""
                          />
                        </div>
                        <div className={styles.content}>
                          <Link to={`${platform?.link}`} target="_blank">
                            <div className={styles.text}>{data?.name}</div>
                          </Link>
                          <div className={styles.count}>
                            {formatFollowersCount(platform?.followers)}
                            {"  "}
                            Followers
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Influencers Section */}
          <div className={styles.influencers__wrapper}>
            <div className={styles.header}>
              <div className={styles.content}>
                <h2 className={styles.result}>Collaborations</h2>
              </div>
            </div>

            <div className={styles.main__container}>
              <div className={styles.influencers}>
                {loading ? (
                  <LoadingSection
                    padding={"calc(var(--main-section-spacing) / 2)"}
                  />
                ) : !loading &&
                  visibleCollaborations &&
                  visibleCollaborations.length == 0 ? (
                  <h1
                    style={{
                      fontSize: "25px",
                      fontFamily: "Barlow",
                    }}>
                    {data?.name} has no collaborations yet.
                  </h1>
                ) : (
                  <>
                    {visibleCollaborations.map((collaboration) => (
                      <ViewCollabs
                        key={collaboration._id}
                        data={collaboration}
                        formatFollowersCount={formatFollowersCount}
                      />
                    ))}
                  </>
                )}
              </div>
              <div className={styles.pagination}>
                {pageNumbers != 1 &&
                  pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`${styles.pagination__button} ${
                        number === activePage ? styles.activePage : ""
                      }`}>
                      {number}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related influencers */}
        {similarInfluencers && similarInfluencers.length !== 0 ? (
          <>
            <div className={styles.related__wrapper}>
              <h2 className={styles.title}>Related Influencers</h2>
              <div className={styles.related}>
                {similarInfluencers.map((influencer) => (
                  <div className={styles.single}>
                    <ViewRelated key={influencer?._id} data={influencer} />
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

export default SingleInfluencer;
