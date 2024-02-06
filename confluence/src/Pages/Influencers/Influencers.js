import React from "react";
import { Link } from "react-router-dom";
import styles from "./Influencers.module.css";
import { Helmet } from "react-helmet-async";
import Intro from "../../Components/Intro/Intro";
import profile from "../../Assets/Images/Main-floating3-1.png";
import background from "../../Assets/Images/Main-prod25-300x371.jpg";
import View from "../../Components/View/View";

function Influencers() {
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
            <div className={styles.platforms}>
              <h1 className={styles.title}>Platforms</h1>
              <div className={styles.platform}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>Facebook</p>
              </div>
              <div className={styles.platform}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>Instagram</p>
              </div>
              <div className={styles.platform}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>TikTok</p>
              </div>
              <div className={styles.platform}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>TikTok</p>
              </div>
              <div className={styles.platform}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>TikTok</p>
              </div>
            </div>
            <div className={styles.categories}>
              <h1 className={styles.title}>Categories</h1>
              <div className={styles.category}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>Food</p>
              </div>
              <div className={styles.category}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>Travel</p>
              </div>
              <div className={styles.category}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>Tech</p>
              </div>
              <div className={styles.category}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>Fashion</p>
              </div>
              <div className={styles.category}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
                <p>Fitness</p>
              </div>
            </div>
            <div className={styles.by__city}>
              <h1 className={styles.title}>By City</h1>
              <ul className={styles.cities}>
                <li className={styles.city}>
                  <Link>Beirut</Link>
                </li>
                <li className={styles.city}>
                  <Link>Saida</Link>
                </li>
                <li className={styles.city}>
                  <Link>Akkar</Link>
                </li>
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
                <View
                  bgImg={background}
                  profileLink={"/about"}
                  pImg={profile}
                  infName={"Matt Young"}
                  totalFollowers={"300k"}
                  link={"/login"}
                  linkContent={"Food Influencer"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
                <View
                  bgImg={background}
                  profileLink={"/about"}
                  pImg={profile}
                  infName={"Matt Young"}
                  totalFollowers={"300k"}
                  link={"/login"}
                  linkContent={"Food Influencer"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
                <View
                  bgImg={background}
                  profileLink={"/about"}
                  pImg={profile}
                  infName={"Matt Young"}
                  totalFollowers={"300k"}
                  link={"/login"}
                  linkContent={"Food Influencer"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
                <View
                  bgImg={background}
                  profileLink={"/about"}
                  pImg={profile}
                  infName={"Matt Young"}
                  totalFollowers={"300k"}
                  link={"/login"}
                  linkContent={"Food Influencer"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
                <View
                  bgImg={background}
                  profileLink={"/about"}
                  pImg={profile}
                  infName={"Matt Young"}
                  totalFollowers={"300k"}
                  link={"/login"}
                  linkContent={"Food Influencer"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
              </div>
              <p
                style={{
                  marginTop: "50px",
                  color: "blue",
                  fontSize: "40px",
                  textAlign: "center",
                }}>
                Pagination Here
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Influencers;
