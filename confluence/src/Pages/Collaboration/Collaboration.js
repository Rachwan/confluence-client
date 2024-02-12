import React from "react";
import { Link } from "react-router-dom";
import styles from "./Collaboration.module.css";
import { Helmet } from "react-helmet-async";
import Intro from "../../Components/Intro/Intro";
import image from "../../Assets/Images/Main-prod25-300x371.jpg";
import ViewRelated from "../../Components/ViewRelated/ViewRelated";
import profile from "../../Assets/Images/Main-floating3-1.png";
import background from "../../Assets/Images/Main-prod25-300x371.jpg";
import star from '../../Assets/Icons/star-solid.svg'

function Collaboration() {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>Infleuncer's Name - Confluence</title>
        <meta name="description" content="(((Title or Single title)))" />
        <meta name="keywords" content="" />
      </Helmet>
      <Intro
        influencer={true}
        pageName={"Rachwan Harb"}
        title={"Rachwan shows how to balance faith, family, and fun!"}
      />
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.images}>
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
          {/* <div
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}></div> */}
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.text}>
              <h2 className={styles.title}>Description</h2>
              <p className={styles.description}>
                Lorem Khaled Ipsum is a major key to success. Eliptical talk
                many variations passage The key to more success is to get a
                massage once a week randomised words which Don’t important,
                major key, cloth talk.
                <br /> <br />
                Mogul talk.Eliptical talk. The standard chunk of Lorem Ipsum
                used since the 1500s is reproduced below for those interested.
                <br /> <br />
                Lorem Khaled Ipsum is a major key to success. Eliptical talk
                many variations passage The key to more success is to get a
                massage once a week randomised words which Don’t important,
                major key, cloth talk.
                <br /> <br />
                Mogul talk.Eliptical talk. The standard chunk of Lorem Ipsum
                used since the 1500s is reproduced below for those interested.
                <br /> <br />
                Mogul talk.Eliptical talk. The standard chunk of Lorem Ipsum
                used since the 1500s is reproduced below for those interested.
                <br /> <br />
                Lorem Khaled Ipsum is a major key to success. Eliptical talk
                many variations passage The key to more success is to get a
                massage once a week randomised words which Don’t important,
                major key, cloth talk.
              </p>
            </div>
            <div className={styles.table__wrapper}>
              <h2 className={styles.title}>Additional information</h2>
              <table className={styles.table}>
                <tbody className={styles.body}>
                  <tr className={styles.tr}>
                    <th className={styles.th}>Country</th>
                    <td className={styles.td}>United States</td>
                  </tr>
                  <tr className={styles.tr}>
                    <th className={styles.th}>Followers</th>
                    <td className={styles.td}>1k – 2k</td>
                  </tr>
                  <tr className={styles.tr}>
                    <th className={styles.th}>Duration</th>
                    <td className={styles.td}>4 months</td>
                  </tr>
                  <tr className={styles.tr}>
                    <th className={styles.th}>Platforms</th>
                    <td className={styles.td}>YouTube - TikTok - Instagram</td>
                  </tr>
                  <tr className={styles.tr}>
                    <th className={styles.th}>New Followers</th>
                    <td className={styles.td}>2K</td>
                  </tr>
                  <tr className={styles.tr}>
                    <th className={styles.th}>Sucess Rate</th>
                    <td className={styles.td}>105%</td>
                  </tr>
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
                  <img src={star} alt=""  className={styles.star__icon}/>
                  <img src={star} alt=""  className={styles.star__icon}/>
                  <img src={star} alt=""  className={styles.star__icon}/>
                  <img src={star} alt=""  className={styles.star__icon}/>
                  <img src={star} alt=""  className={styles.star__icon}/>
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
              <Link to={"/single-influencer"}>
                <div className={styles.profile}>
                  <div
                    className={styles.profile__img}
                    style={{ backgroundImage: `url(${image})` }}></div>
                  <h3 className={styles.name}>Rachwan Harb</h3>
                </div>
              </Link>
              <p className={styles.note}>
                Thanks for checking out my listing. Have any questions?
              </p>
              <div className={styles.platforms}>
                <div className={styles.platform}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#833ab4"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                  <span className={styles.platform__name}>100K Followers</span>
                </div>
                <div className={styles.platform}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                  <span className={styles.platform__name}>190K Followers</span>
                </div>
                <div className={styles.platform}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      fill="#ff0000"
                      d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                    />
                  </svg>
                  <span className={styles.platform__name}>
                    900K Subscribers
                  </span>
                </div>
                <div className={styles.platform}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#000000"
                      d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
                    />
                  </svg>
                  <span className={styles.platform__name}>190K Followers</span>
                </div>
              </div>
            </div>
            <h3 className={styles.check__this}>You can also check this:</h3>
            <div className={styles.related__self}>
              <div className={styles.singlee}>
                <ViewRelated
                  bgImg={background}
                  profileLink={"/collaboration"}
                  pImg={profile}
                  infName={"Rachwan Harb"}
                  totalFollowers={"300k"}
                  link={"/filter-by-platform"}
                  linkContent={"YouTube"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
              </div>
              <div className={styles.singlee}>
                <ViewRelated
                  bgImg={background}
                  profileLink={"/collaboration"}
                  pImg={profile}
                  infName={"Rachwan Harb"}
                  totalFollowers={"300k"}
                  link={"/filter-by-platform"}
                  linkContent={"YouTube"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
              </div>
              <div className={styles.singlee}>
                <ViewRelated
                  bgImg={background}
                  profileLink={"/collaboration"}
                  pImg={profile}
                  infName={"Rachwan Harb"}
                  totalFollowers={"300k"}
                  link={"/filter-by-platform"}
                  linkContent={"YouTube"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
              </div>
              <div className={styles.singlee}>
                <ViewRelated
                  bgImg={background}
                  profileLink={"/collaboration"}
                  pImg={profile}
                  infName={"Rachwan Harb"}
                  totalFollowers={"300k"}
                  link={"/filter-by-platform"}
                  linkContent={"YouTube"}
                  text={
                    "Tom Oliver is inspiring others to live their best lives"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* Related influencers */}
        <div className={styles.related__wrapper}>
          <h2 className={styles.title}>Related Collaborations</h2>
          <div className={styles.related}>
            <div className={styles.single}>
              <ViewRelated
                bgImg={background}
                profileLink={"/collaboration"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-platform"}
                linkContent={"YouTube"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
            <div className={styles.single}>
              <ViewRelated
                bgImg={background}
                profileLink={"/collaboration"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-platform"}
                linkContent={"YouTube"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
            <div className={styles.single}>
              <ViewRelated
                bgImg={background}
                profileLink={"/collaboration"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-platform"}
                linkContent={"YouTube"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
            <div className={styles.single}>
              <ViewRelated
                bgImg={background}
                profileLink={"/collaboration"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-platform"}
                linkContent={"YouTube"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
            <div className={`${styles.single} ${styles.delete}`}>
              <ViewRelated
                bgImg={background}
                profileLink={"/collaboration"}
                pImg={profile}
                infName={"Rachwan Harb"}
                totalFollowers={"300k"}
                link={"/filter-by-platform"}
                linkContent={"YouTube"}
                text={"Tom Oliver is inspiring others to live their best lives"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Collaboration;
