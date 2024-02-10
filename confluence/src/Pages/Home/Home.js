import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../../Layout/Header/Header";
import Hero from "../../Components/Hero/Hero";
import CheckByPlatform from "../../Components/CheckByPlatform/CheckByPlatform";
import CheckByCategory from "../../Components/CheckByCategory/CheckByCategory";
import FeaturedCollabs from "../../Components/FeaturedCollabs/FeaturedCollabs";
import { Helmet } from "react-helmet-async";
import iconOne from "../../Assets/Icons/Main-serv1-230x238.png";
import iconTwo from "../../Assets/Icons/Main-serv2-230x238.png";
import iconThree from "../../Assets/Icons/Main-serv3.png";
import iconFour from "../../Assets/Icons/Main-serv4.png";
import moneyIcon from "../../Assets/Icons/money-bill-solid.svg";
import imageOne from "../../Assets/Images/Main-banner01-edit.png";
import imageTwo from "../../Assets/Images/Main-banner02-edit.png";

function Home() {
  return (
    <>
      <main className={styles.main}>
        <Helmet>
          <title>Home - Confluence</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <Header home={true} />
        <Hero />
        {/* CheckByCategory */}
        <CheckByCategory />
        {/* How it works */}
        <section className={styles.how__it__works}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <div className={styles.heading}>
                  <h2 className={styles.title}>How it works</h2>
                  <p className={styles.paragraph}>
                    We have a lot of opportunities for you. Come check them!
                  </p>
                </div>
                <div className={styles.boxes}>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconOne} alt="" />
                    </div>
                    <div className={styles.title__box}>Create Account</div>
                    <div className={styles.box__phrase}>
                      Vivamus vel fringilla est. Fusce fermentum, quam a aliquet
                      semper, eros sapien ullamcorpe.
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconTwo} alt="" />
                    </div>
                    <div className={styles.title__box}>Create Account</div>
                    <div className={styles.box__phrase}>
                      Vivamus vel fringilla est. Fusce fermentum, quam a aliquet
                      semper, eros sapien ullamcorpe.
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconThree} alt="" />
                    </div>
                    <div className={styles.title__box}>Create Account</div>
                    <div className={styles.box__phrase}>
                      Vivamus vel fringilla est. Fusce fermentum, quam a aliquet
                      semper, eros sapien ullamcorpe.
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconFour} alt="" />
                    </div>
                    <div className={styles.title__box}>Create Account</div>
                    <div className={styles.box__phrase}>
                      Vivamus vel fringilla est. Fusce fermentum, quam a aliquet
                      semper, eros sapien ullamcorpe.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.image}></div>
          </div>
        </section>
        {/* Features about the platform */}
        <section className={styles.features}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <img src={moneyIcon} alt="" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>Verified Creators</h2>
                  <div className={styles.description}>
                    Search influencers for free. No subscriptions, contracts or
                    fees.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <img src={moneyIcon} alt="" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>No Upfront Cost</h2>
                  <div className={styles.description}>
                    Search influencers for free. No subscriptions, contracts or
                    fees.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <img src={moneyIcon} alt="" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>Verified Creators</h2>
                  <div className={styles.description}>
                    Search influencers for free. No subscriptions, contracts or
                    fees.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <img src={moneyIcon} alt="" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>No Upfront Cost</h2>
                  <div className={styles.description}>
                    Search influencers for free. No subscriptions, contracts or
                    fees.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CheckByPlatform */}
        <CheckByPlatform />
        {/* Find */}
        <section className={styles.find}>
          <div className="container">
            <div className={styles.find__wrapper}>
              <div className={styles.influencers}>
                <div className={styles.image__wrapper}>
                  <img src={imageOne} alt="" />
                </div>
                <div className={styles.content}>
                  <div className={styles.show__button}>Find Influencers</div>
                  <p className={styles.title}>
                    Find and collab with your future influencer.
                  </p>
                  <Link to={"/influencers"}>
                    <div className={styles.button}>Check Now</div>
                  </Link>
                </div>
              </div>
              <div className={styles.brands}>
                <div className={styles.image__wrapper}>
                  <img src={imageTwo} alt="" />
                </div>
                <div className={styles.content}>
                  <div className={styles.show__button}>Find Brands</div>
                  <p className={styles.title}>
                    They could be looking for someone like you.
                  </p>
                  <Link to={"/coming-so-soon"}>
                    <div className={styles.button}>Coming Soon...</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FeaturedCollabs */}
        <FeaturedCollabs />
        {/* FeaturedInfluencers */}
        <FeaturedCollabs />
      </main>
    </>
  );
}

export default Home;
