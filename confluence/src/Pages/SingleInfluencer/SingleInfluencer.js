import React from "react";
import styles from "./SingleInfluencer.module.css";
import { Helmet } from "react-helmet-async";
import Intro from "../../Components/Intro/Intro";
import profile from "../../Assets/Images/Main-floating3-1.png";
import background from "../../Assets/Images/Main-prod25-300x371.jpg";
import View from "../../Components/View/View";
import { Link } from "react-router-dom";
import verified from "../../Assets/Icons/verified.png";
import location from "../../Assets/Icons/location.svg";
import calendar from "../../Assets/Icons/calendar.svg";
import gender from "../../Assets/Icons/gender.svg";
import ViewRelated from "../../Components/ViewRelated/ViewRelated";

function SingleInfluencer() {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>Single Influencer - Confluence</title>
        <meta
          name="description"
          content="Get in touch with Confluence. Whether you're a business looking to collaborate or an influencer seeking opportunities, we're here to connect and support you."
        />
        <meta
          name="keywords"
          content="SingleInfluencer Confluence, business collaboration, influencer partnerships, SingleInfluencer information, get in touch"
        />
      </Helmet>
      <Intro pageName={"Rachwan Harb"} influencer={true} />
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
                <img src={profile} alt="" className={styles.profile} />
              </div>
              <h2 className={styles.name}>Rachwan Harb</h2>
              <h2 className={styles.category}>Food Influencer</h2>
              <div className={styles.additional}>
                <span className={styles.city}>
                  <img src={location} alt="" /> Beirut
                </span>
                <span className={styles.age}>
                  <img src={calendar} alt="" /> 26
                </span>
                <span className={styles.gender}>
                  <img src={gender} alt="" /> Male
                </span>
              </div>
              <Link to={"https://wa.me/76445648"} className={styles.link}>
                <div className={styles.phone}>
                  <div className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                  </div>
                  <p className={styles.content}>+961 76 445 648</p>
                </div>
              </Link>
              <Link
                to={"mailto:rachwan.harb2023@gmail.com"}
                className={styles.link}>
                <div className={styles.email}>
                  <div className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                    </svg>
                  </div>
                  <p className={styles.content}>rachwan@gmail.com</p>
                </div>
              </Link>
            </div>
            <div className={styles.social__stats}>
              <div className={styles.stats}>
                <h4 className={styles.title}>Social Stats</h4>
                <div className={styles.accounts}>
                  <div
                    className={styles.account}
                    style={{ borderLeft: "3px solid #000" }}>
                    <div
                      className={styles.social__icon}
                      style={{ background: "var(--main-blue)" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                          fill="#ffffff"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    </div>
                    <div className={styles.content}>
                      <Link to={"/"}>
                        <div className={styles.text}>therock</div>
                      </Link>
                      <div className={styles.count}>10k Followers</div>
                    </div>
                  </div>
                  <div
                    className={styles.account}
                    style={{ borderLeft: "3px solid #000" }}>
                    <div
                      className={styles.social__icon}
                      style={{ background: "var(--main-blue)" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                          fill="#ffffff"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    </div>
                    <div className={styles.content}>
                      <Link to={"/"}>
                        <div className={styles.text}>therock</div>
                      </Link>
                      <div className={styles.count}>10k Followers</div>
                    </div>
                  </div>
                  <div
                    className={styles.account}
                    style={{ borderLeft: "3px solid #000" }}>
                    <div
                      className={styles.social__icon}
                      style={{ background: "var(--main-blue)" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                          fill="#ffffff"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    </div>
                    <div className={styles.content}>
                      <Link to={"/"}>
                        <div className={styles.text}>therock</div>
                      </Link>
                      <div className={styles.count}>10k Followers</div>
                    </div>
                  </div>
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
                <View
                  bgImg={background}
                  profileLink={"/collaboration"}
                  pImg={profile}
                  infName={"Rachwan Harb"}
                  totalFollowers={"300k"}
                  link={"#"}
                  linkContent={"YouTube"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
                <View
                  bgImg={background}
                  profileLink={"/collaboration"}
                  pImg={profile}
                  infName={"Rachwan Harb"}
                  totalFollowers={"300k"}
                  link={"#"}
                  linkContent={"YouTube"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
                <View
                  bgImg={background}
                  profileLink={"/collaboration"}
                  pImg={profile}
                  infName={"Rachwan Harb"}
                  totalFollowers={"300k"}
                  link={"#"}
                  linkContent={"YouTube"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
                <View
                  bgImg={background}
                  profileLink={"/collaboration"}
                  pImg={profile}
                  infName={"Rachwan Harb"}
                  totalFollowers={"300k"}
                  link={"#"}
                  linkContent={"YouTube"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
                <View
                  bgImg={background}
                  profileLink={"/collaboration"}
                  pImg={profile}
                  infName={"Rachwan Harb"}
                  totalFollowers={"300k"}
                  link={"#"}
                  linkContent={"YouTube"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
              </div>
              <p
                style={{
                  marginTop: "50px",
                  marginBottom: "50px",
                  color: "blue",
                  fontSize: "40px",
                  textAlign: "center",
                }}>
                Pagination Here
              </p>
            </div>
          </div>
        </div>
        {/* Related influencers */}
        <div className={styles.related__wrapper}>
          <h2 className={styles.title}>Related Influencers</h2>
          <div className={styles.related}>
            <div className={styles.single}>
              <ViewRelated
                bgImg={background}
                profileLink={"/single-influencer"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-category"}
                linkContent={"Food Influencer"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
            <div className={styles.single}>
              <ViewRelated
                bgImg={background}
                profileLink={"/single-influencer"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-category"}
                linkContent={"Food Influencer"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
            <div className={styles.single}>
              <ViewRelated
                bgImg={background}
                profileLink={"/single-influencer"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-category"}
                linkContent={"Food Influencer"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
            <div className={styles.single}>
              <ViewRelated
                bgImg={background}
                profileLink={"/single-influencer"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-category"}
                linkContent={"Food Influencer"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
            <div className={`${styles.single} ${styles.delete}`}>
              <ViewRelated
                bgImg={background}
                profileLink={"/single-influencer"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-category"}
                linkContent={"Food Influencer"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingleInfluencer;
