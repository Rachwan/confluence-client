import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Influencers.module.css";
import { Helmet } from "react-helmet-async";
import Intro from "../../Components/Intro/Intro";
import View from "../../Components/View/View";
// import Loading from "../../Components/Loading/Loading";

function Influencers() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [cityActiveLink, setCityActiveLink] = useState(null);
  const [categoriesData, setCategoriesData] = useState([]);
  const [platformsData, setPlatformsData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);

  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Influencers
  const fetchInfluencersData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/user/get/influencer`
      );
      setLoading(false);
      setInfluencers(response.data);
    } catch (error) {
      console.error("Error fetching influencers:", error);
    }
  };

  useEffect(() => {
    fetchInfluencersData();
  }, []);
  //--------------------

  // Categories

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/category/all`
      );
      setCategoriesData(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  //--------------------

  // Platforms

  const fetchplatformsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/platform/all`
      );
      setPlatformsData(response.data);
    } catch (error) {
      console.error("Error fetching platforms:", error);
    }
  };

  useEffect(() => {
    fetchplatformsData();
  }, []);

  //--------------------

  // Cities

  const fetchCitiesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/city/all`
      );
      setCitiesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCitiesData();
  }, []);

  //--------------------

  const handlePlatformClick = (platform) => {
    setSelectedPlatform((prevPlatform) =>
      prevPlatform === platform ? null : platform
    );
    setActiveLink(null);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleCityLinkClick = (link) => {
    setCityActiveLink(link);
  };

  // Pagination
  const [activePage, setActivePage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = influencers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const visibleInfluencers = influencers.slice(
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
    <>
      <main className={styles.main}>
        <Helmet>
          <title>Influencers - Confluence</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <Intro pageName={"Influencers"} />
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.filter__wrapper}>
            <div className={styles.categories}>
              <h1 className={styles.title}>Categories</h1>
              {categoriesData &&
                categoriesData.map((category) => (
                  <div className={styles.category}>
                    <img
                      src={`${process.env.REACT_APP_BACKEND}/${category.icon}`}
                      className={styles.icon}
                      alt=""
                    />
                    <p>{category.name}</p>
                  </div>
                ))}
            </div>
            <div className={styles.platforms}>
              <h1 className={styles.title}>Platforms</h1>
              {platformsData.map((platform) => (
                <div
                  key={platform}
                  className={`${styles.platform} ${
                    platform.name === "Instagram"
                      ? styles.instagram__hover
                      : styles.platform__hover
                  } ${
                    selectedPlatform === platform ? styles.activePlatform : ""
                  }`}
                  style={{ "--hover-color": platform.activeColor }}>
                  <div
                    onClick={() => handlePlatformClick(platform)}
                    className={styles.platformHeader}>
                    <div>
                      <img
                        src={`${process.env.REACT_APP_BACKEND}/${platform.icon}`}
                        className={styles.icon}
                        alt=""
                      />
                      <p>{platform.name}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Display the ranges outside the mapping */}
              {selectedPlatform && (
                <div className={styles.ranges}>
                  <p className={styles.platform__click__title}>
                    Followers Number
                  </p>
                  <ul>
                    <li className={styles.range}>
                      <Link
                        to="#"
                        onClick={() => handleLinkClick("50k-100k")}
                        className={
                          activeLink === "50k-100k" && styles.activeLink
                        }>
                        50k-100k
                      </Link>
                    </li>
                    <li className={styles.range}>
                      <Link
                        to="#"
                        onClick={() => handleLinkClick("100k-500k")}
                        className={
                          activeLink === "100k-500k" && styles.activeLink
                        }>
                        100k-500k
                      </Link>
                    </li>
                    <li className={styles.range}>
                      <Link
                        to="#"
                        onClick={() => handleLinkClick("500k-1M")}
                        className={
                          activeLink === "500k-1M" && styles.activeLink
                        }>
                        500k-1M
                      </Link>
                    </li>
                    <li className={styles.range}>
                      <Link
                        to="#"
                        onClick={() => handleLinkClick("1M+")}
                        className={activeLink === "1M+" && styles.activeLink}>
                        1M+
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.by__city}>
              <h1 className={styles.title}>By City</h1>
              <ul className={styles.cities}>
                {citiesData &&
                  citiesData.map((city) => (
                    <li
                      className={`${styles.city} ${
                        activeLink === city && styles.activeLink
                      }`}>
                      <Link to="#" onClick={() => handleCityLinkClick(city)}>
                        {city.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className={styles.by__followers}>
              <h1 className={styles.title}>Total Followers</h1>
              <ul className={styles.ranges}>
                <li className={styles.range}>
                  <Link>50k-100k</Link>
                </li>
                <li className={styles.range}>
                  <Link>100k-500k</Link>
                </li>
                <li className={styles.range}>
                  <Link>500k-1M</Link>
                </li>
                <li className={styles.range}>
                  <Link>1M+</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.influencers__wrapper}>
            <div className={styles.header}>
              <div className={styles.content}>
                <div className={styles.background}></div>
                <p className={styles.result}>Showing 13–24 of 30 results</p>
              </div>
              <form className={styles.form} method="get">
                <select
                  name="orderby"
                  class={styles.select}
                  aria-label="Shop order">
                  <option value="menu_order">Default sorting</option>
                  <option value="popularity" selected="selected">
                    Sort by popularity
                  </option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
                <input type="hidden" name="paged" value="1" />
                <input type="hidden" name="query_type_country" value="or" />
              </form>
            </div>
            <div className={styles.main__container}>
              <div className={styles.influencers}>
                {/* {influencers &&
                  influencers.map((influencer) => (
                    <View key={influencer._id} data={influencer} />
                  ))} */}
                {visibleInfluencers.map((influencer) => (
                  <View key={influencer._id} data={influencer} />
                ))}
              </div>
              <div className={styles.pagination}>
                {pageNumbers != 1 &&
                  pageNumbers.map((number) => (
                    <button
                      key={number}
                      // className={styles.pagination__button}
                      onClick={() => handlePageChange(number)}
                      className={`${styles.pagination__button} ${
                        number === activePage ? styles.activePage : ""
                      }`}>
                      {number}
                      {console.log(number, activePage)}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Influencers;
