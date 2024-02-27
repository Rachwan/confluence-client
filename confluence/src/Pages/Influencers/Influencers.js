import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Influencers.module.css";
import { Helmet } from "react-helmet-async";
import Intro from "../../Components/Intro/Intro";
import View from "../../Components/View/View";
import LoadingSection from "../../Components/LoadingSection/LoadingSection";
import Loading from "../../Components/Loading/Loading";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

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
  const [allInfluencers, setAllInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
  const location = useLocation();
  console.log(location);
  const [filterOptions, setFilterOptions] = useState({
    categories: location?.state?.filterState?.categories || [],
    platformId: location?.state?.filterState?.platformId || null,
    platformRange: location?.state?.filterState?.platformRange || null,
    cities: [],
    totalRange: [],
  });

  const firstRender = useRef(true);
  useEffect(() => {
    if (!firstRender.current) {
      console.log("hello 3");
      fetchFilteredInfluencers(filterOptions);
    } else {
      firstRender.current = false;
    }
  }, [filterOptions]);

  useEffect(() => {
    // Categories
    if (location.state?.filterState?.categories) {
      console.log("helloooo yooooo");
      setSelectedCategory(location.state?.filterState?.categories);
      fetchFilteredInfluencers({
        categories: location.state.filterState.categories || [],
      });
    }
    // Platform
    if (location.state?.filterState?.platformId) {
      // setSelectedCategory(location.state?.filterState?.categories);
      setSelectedPlatform(location?.state?.filterState?.platformId);
      setActiveLink(location?.state?.filterState?.platformRange[0]);
      fetchFilteredInfluencers({
        platformId: location?.state?.filterState?.platformId,
        platformRange: location?.state?.filterState?.platformRange,
      });
    }
  }, [location.state]);
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
  const totalItems = influencers?.length;
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

  //-------------------------------------------------

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory((prevCategories) => {
      const updatedCategories = prevCategories.includes(categoryId)
        ? prevCategories.filter((id) => id !== categoryId)
        : [...prevCategories, categoryId];
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        categories: updatedCategories,
      }));
      return updatedCategories;
    });
  };

  // Add this helper function to check if a category is selected
  const isCategorySelected = (categoryId) => {
    return selectedCategory && selectedCategory?.includes(categoryId);
  };

  // --------

  const handleCityLinkClick = (cityId) => {
    setCityActiveLink((prevCities) =>
      prevCities?.includes(cityId)
        ? prevCities?.filter((city) => city !== cityId)
        : [...prevCities, cityId]
    );

    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      cities: toggleArrayItem(prevOptions.cities, cityId),
    }));
  };

  const isCitySelected = (cityId) => {
    return cityActiveLink?.includes(cityId);
  };
  // ------------------

  const handlePlatformClick = (platformId) => {
    setSelectedPlatform((prevPlatform) =>
      prevPlatform === platformId ? null : platformId
    );
    setActiveLink(null);
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      platformId: prevOptions.platformId === platformId ? null : platformId,
    }));
  };

  const handleLinkClick = (range) => {
    setFilterOptions((prevOptions) => {
      // Check if prevOptions.platformRange is null or undefined
      const isNullOrUndefined = !prevOptions.platformRange;

      // Check if the clicked range is the same as the current active range
      const isActive =
        !isNullOrUndefined && prevOptions.platformRange[0] === range;

      // Toggle the active link and reset the platform range accordingly
      const updatedOptions = {
        ...prevOptions,
        platformRange: isActive ? [] : [range],
      };

      // Update the active link state based on the toggle
      setActiveLink(isActive ? null : range);

      return updatedOptions;
    });
  };

  const handleTotalFollowersClick = (range) => {
    setFilterOptions((prevOptions) => {
      // Check if prevOptions.totalRange is null or undefined
      const isNullOrUndefined = !prevOptions.totalRange;

      // Check if the clicked range is the same as the current active range
      const isActive =
        !isNullOrUndefined && prevOptions.totalRange[0] === range;

      // Toggle the active link and reset the total range accordingly
      const updatedOptions = {
        ...prevOptions,
        totalRange: isActive ? [] : [range],
      };

      // Update the active link state based on the toggle
      setTotalFollowersActiveLink(isActive ? null : range);

      return updatedOptions;
    });
  };

  const toggleArrayItem = (array, item) => {
    if (array?.includes(item)) {
      return array?.filter((value) => value !== item);
    } else {
      return [...array, item];
    }
  };

  // const handleFilter = async () => {
  //   setLoading(true);

  //   try {
  //     console.log("Filter Options:", filterOptions);
  //     const { categories, platformId, platformRange, cities, totalRange } =
  //       filterOptions;
  //     console.log("Filter Options:", filterOptions);
  //     console.log("Total Range:", totalRange);

  //     const params = {
  //       categories,
  //       platformId,
  //       platformRange,
  //       cities,
  //       // ...(totalRange?.length > 0 && { totalRange }),
  //       totalRange: totalRange?.length > 0 ? totalRange : null,
  //     };

  //     console.log(params);

  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BACKEND}/user/get/By/Filter`,
  //       { params },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     setInfluencers(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching filtered influencers:", error);
  //     setLoading(false);
  //   }
  // };
  const [filterLoading, setFilterLoading] = useState(false);
  const fetchFilteredInfluencers = async (filterBy) => {
    setFilterLoading(true);
    setLoading(false);
    console.log(filterBy);
    try {
      const { categories, platformId, platformRange, cities, totalRange } =
        filterBy;

      const params = {
        categories,
        platformId,
        platformRange,
        cities,
        totalRange: totalRange?.length > 0 ? totalRange : null,
      };

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
    } catch (error) {
      console.error("Error fetching filtered influencers:", error);
    } finally {
      setFilterLoading(false);
    }
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
                  } ${
                    selectedPlatform === platform._id && styles.activePlatform
                  }`}
                  style={{ "--hover-color": platform.activeColor }}
                  onClick={() => handlePlatformClick(platform._id)}>
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
            {console.log(visibleInfluencers)}
            <div className={styles.main__container}>
              <div className={styles.influencers}>
                {loading || filterLoading ? (
                  <LoadingSection
                    padding={`calc(var(--main-section-spacing) * 1.5)`}
                  />
                ) : visibleInfluencers &&
                  visibleInfluencers?.length === 0 &&
                  !loading &&
                  !filterLoading ? (
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
              {!loading && !filterLoading && (
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
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Influencers;
