import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Influencers.module.css";
import { Helmet } from "react-helmet-async";
import Intro from "../../Components/Intro/Intro";
import View from "../../Components/View/View";
import LoadingSection from "../../Components/LoadingSection/LoadingSection";
import Loading from "../../Components/Loading/Loading";

function Influencers() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [activeLink, setActiveLink] = useState(null);
  const [cityActiveLink, setCityActiveLink] = useState([]);
  const [totalFollowersActiveLink, setTotalFollowersActiveLink] =
    useState(null);
  const [categoriesData, setCategoriesData] = useState([]);
  const [platformsData, setPlatformsData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);

  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);

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

  // Categories + Loading
  let arrayOfCategories;
  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/category/all`
      );
      arrayOfCategories = response.data.reverse();
      setCategoriesData(arrayOfCategories);
      setLoadingPage(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
  }, []);
  //--------------------

  // Platforms
  let array;
  const fetchplatformsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/platform/all`
      );
      array = response.data.reverse();
      setPlatformsData(array);
    } catch (error) {
      console.error("Error fetching platforms:", error);
    }
  };

  useEffect(() => {
    fetchplatformsData();
  }, []);

  //--------------------

  // Cities
  let arrayOfCities;
  const fetchCitiesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/city/all`
      );
      arrayOfCities = response.data.reverse();
      setCitiesData(arrayOfCities);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCitiesData();
  }, []);

  // Pagination
  const [activePage, setActivePage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = influencers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // For displaying the showing title
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState(0);

  useEffect(() => {
    const newRangeStart = (currentPage - 1) * itemsPerPage + 1;
    const newRangeEnd = Math.min(currentPage * itemsPerPage, totalItems);

    setRangeStart(newRangeStart);
    setRangeEnd(newRangeEnd);
  }, [currentPage, itemsPerPage, totalItems]);

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

  const [filterOptions, setFilterOptions] = useState({
    categories: [],
    platformId: null,
    platformRange: null,
    cities: [],
    totalRange: [],
  });

  //--------------------

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory((prevCategories) =>
      prevCategories.includes(categoryId)
        ? prevCategories.filter((id) => id !== categoryId)
        : [...prevCategories, categoryId]
    );

    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      categories: toggleArrayItem(prevOptions.categories, categoryId),
    }));
  };

  // Add this helper function to check if a category is selected
  const isCategorySelected = (categoryId) => {
    return selectedCategory && selectedCategory.includes(categoryId);
  };

  // --------

  const handleCityLinkClick = (cityId) => {
    setCityActiveLink((prevCities) =>
      prevCities.includes(cityId)
        ? prevCities.filter((city) => city !== cityId)
        : [...prevCities, cityId]
    );

    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      cities: toggleArrayItem(prevOptions.cities, cityId),
    }));
  };

  const isCitySelected = (cityId) => {
    return cityActiveLink.includes(cityId);
  };
  // ------------------

  const handlePlatformClick = (platform) => {
    setSelectedPlatform((prevPlatform) =>
      prevPlatform === platform ? null : platform
    );
    setActiveLink(null);
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      platformId: prevOptions.platformId === platform._id ? null : platform._id,
    }));
  };

  // const handleLinkClick = (range) => {
  //   setActiveLink(range);
  //   setFilterOptions((prevOptions) => ({
  //     ...prevOptions,
  //     platformRange: range,
  //   }));
  // };
  const handleLinkClick = (range) => {
    setActiveLink(range);
    // let convertedRange;

    // if (range.includes("<")) {
    //   // Handle "<10K" case
    //   const match = range.match(/(\d+)/); // Extract numeric part using regex
    //   console.log(match);
    //   if (match && match[0]) {
    //     const numericValue = Number(match[0]);
    //     console.log(numericValue);
    //     convertedRange = numericValue * 1000;
    //     console.log(convertedRange);
    //   } else {
    //     // Handle the case where the value is not a valid number
    //     console.error(`Invalid range: ${range}`);
    //     return;
    //   }
    // } else if (range.includes("K") && range.includes("M")) {
    //   // Handle "500K-1M" case
    //   const rangeParts = range.split("-");
    //   const minRange = Number(rangeParts[0].replace("K", "")) * 1000;
    //   const maxRange = Number(rangeParts[1].replace("M", "")) * 1000000;
    //   convertedRange = `${Number(minRange)}-${Number(maxRange)}`;
    //   console.log(convertedRange);
    // } else if (range.includes("K")) {
    //   // Handle "10K-100K" case
    //   const rangeParts = range.split("-");
    //   const minRange = Number(rangeParts[0].replace("K", "")) * 1000;
    //   const maxRange = Number(rangeParts[1].replace("K", "")) * 1000;
    //   convertedRange = `${minRange}-${maxRange}`;
    //   console.log(convertedRange);
    // } else if (range.includes("M")) {
    //   // Handle "1M+" case
    //   const match = range.match(/(\d+)/);
    //   if (match && match[0]) {
    //     const numericValue = Number(match[0]);
    //     convertedRange = numericValue * 1000000;
    //   } else {
    //     console.error(`Invalid range: ${range}`);
    //     return;
    //   }
    // } else {
    //   // Handle other cases (should be pure numbers)
    //   convertedRange = Number(range);
    // }

    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      platformRange: [range],
    }));
  };

  const handleTotalFollowersClick = (range) => {
    setTotalFollowersActiveLink(range);
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      totalRange: [range],
    }));
  };

  const toggleArrayItem = (array, item) => {
    if (array.includes(item)) {
      return array.filter((value) => value !== item);
    } else {
      return [...array, item];
    }
  };

  const handleFilter = async () => {
    setLoading(true);

    try {
      console.log("Filter Options:", filterOptions);
      const { categories, platformId, platformRange, cities, totalRange } =
        filterOptions;
      console.log("Filter Options:", filterOptions);
      console.log("Total Range:", totalRange);

      const params = {
        categories,
        platformId,
        platformRange,
        cities,
        // ...(totalRange.length > 0 && { totalRange }),
        totalRange: totalRange.length > 0 ? totalRange : null,
      };

      console.log(params);

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/user/get/By/Filter`,
        { params },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setInfluencers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching filtered influencers:", error);
      setLoading(false);
    }
  };

  const clearFilter = () => {
    setFilterOptions({
      categories: [],
      platformId: null,
      platformRange: null,
      cities: [],
      totalRange: [],
    });
    setSelectedPlatform(null);
    setSelectedCategory(null);
    setActiveLink(null);
    setCityActiveLink(null);
    setTotalFollowersActiveLink(null);
  };

  if (loadingPage) {
    return <Loading />;
  }

  return (
    <>
      <main className={styles.main}>
        <Helmet>
          <title>Influencers - Confluence</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <Intro pageName={"Influencers"} background={"influencers"} />
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.filter__wrapper}>
            <button onClick={handleFilter} className={styles.filterButton}>
              Apply Filters
            </button>
            <button onClick={clearFilter} className={styles.filterButton}>
              Clear
            </button>
            <div className={styles.categories}>
              <h1 className={styles.title}>Categories</h1>
              {categoriesData &&
                categoriesData.map((category) => (
                  <div
                    key={category._id}
                    className={`${styles.category} ${
                      isCategorySelected(category._id) &&
                      styles.categoryActiveLink
                    }`}
                    onClick={() => handleCategoryClick(category._id)}>
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
                  key={platform._id}
                  className={`${styles.platform} ${
                    platform.name === "Instagram"
                      ? styles.instagram__hover
                      : styles.platform__hover
                  } ${selectedPlatform === platform && styles.activePlatform}`}
                  style={{ "--hover-color": platform.activeColor }}
                  onClick={() => handlePlatformClick(platform)}>
                  <div className={styles.platformHeader}>
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
                        onClick={() => handleLinkClick("<10K")}
                        className={activeLink == "<10K" && styles.activeLink}>
                        &lt;10K
                      </Link>
                    </li>
                    <li className={styles.range}>
                      <Link
                        to="#"
                        onClick={() => handleLinkClick("10K-100K")}
                        className={
                          activeLink === "10K-100K" && styles.activeLink
                        }>
                        10K-100K
                      </Link>
                    </li>
                    <li className={styles.range}>
                      <Link
                        to="#"
                        onClick={() => handleLinkClick("100K-500K")}
                        className={
                          activeLink === "100K-500K" && styles.activeLink
                        }>
                        100K-500K
                      </Link>
                    </li>
                    <li className={styles.range}>
                      <Link
                        to="#"
                        onClick={() => handleLinkClick("500K-1M")}
                        className={
                          activeLink === "500K-1M" && styles.activeLink
                        }>
                        500K-1M
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
                    <li key={city._id} className={styles.city}>
                      <Link
                        to="#"
                        onClick={() => handleCityLinkClick(city._id)}
                        className={
                          isCitySelected(city._id) ? styles.activeLink : ""
                        }>
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
                  <Link
                    to="#"
                    onClick={() => handleTotalFollowersClick("<10K")}
                    className={
                      totalFollowersActiveLink == "<10K" && styles.activeLink
                    }>
                    &lt;10K
                  </Link>
                </li>
                <li className={styles.range}>
                  <Link
                    onClick={() => handleTotalFollowersClick("10K-100K")}
                    className={
                      totalFollowersActiveLink === "10K-100K" &&
                      styles.activeLink
                    }>
                    10K-100K
                  </Link>
                </li>
                <li className={styles.range}>
                  <Link
                    onClick={() => handleTotalFollowersClick("100K-500K")}
                    className={
                      totalFollowersActiveLink === "100K-500K" &&
                      styles.activeLink
                    }>
                    100K-500k
                  </Link>
                </li>
                <li className={styles.range}>
                  <Link
                    onClick={() => handleTotalFollowersClick("500K-1M")}
                    className={
                      totalFollowersActiveLink === "500K-1M" &&
                      styles.activeLink
                    }>
                    500K-1M
                  </Link>
                </li>
                <li className={styles.range}>
                  <Link
                    onClick={() => handleTotalFollowersClick("1M+")}
                    className={
                      totalFollowersActiveLink === "1M+" && styles.activeLink
                    }>
                    1M+
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.influencers__wrapper}>
            <div className={styles.header}>
              <div className={styles.content}>
                <div className={styles.background}></div>
                <p className={styles.result}>
                  {totalItems === 0
                    ? "Showing 0 results"
                    : totalItems === 1
                    ? "Showing 1 only result"
                    : `Showing ${rangeStart}–${rangeEnd} of ${totalItems} results`}
                </p>
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
                {loading && (
                  <LoadingSection
                    padding={`calc(var(--main-section-spacing) * 1.5)`}
                  />
                )}

                {console.log(visibleInfluencers)}

                {visibleInfluencers &&
                visibleInfluencers.length === 0 &&
                !loading ? (
                  <div className={styles.empty}>
                    <h1
                      style={{
                        fontSize: "25px",
                        fontFamily: "Barlow",
                      }}>
                      No Influencers Found
                    </h1>
                  </div>
                ) : (
                  visibleInfluencers &&
                  visibleInfluencers.map((influencer) => (
                    <View key={influencer._id} data={influencer} />
                  ))
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
      </main>
    </>
  );
}

export default Influencers;
