import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../../Layout/Header/Header";
import Hero from "../../Components/Hero/Hero";
import CheckByPlatform from "../../Components/CheckByPlatform/CheckByPlatform";
import CheckByCategory from "../../Components/CheckByCategory/CheckByCategory";
import FeaturedCollabs from "../../Components/FeaturedCollabs/FeaturedCollabs";
import FeaturedInfluencers from "../../Components/FeaturedInfluencers/FeaturedInfluencers";
import { Helmet } from "react-helmet-async";
import iconOne from "../../Assets/Icons/Main-serv1-230x238.png";
import iconTwo from "../../Assets/Icons/Main-serv2-230x238.png";
import iconThree from "../../Assets/Icons/Main-serv3.png";
import iconFour from "../../Assets/Icons/Main-serv4.png";
import imageOne from "../../Assets/Images/Main-banner01-edit.png";
import imageTwo from "../../Assets/Images/Main-banner02-edit.png";
import Footer from "../../Layout/Footer/Footer";
import search from "../../Assets/Icons/search.svg";
import handeShake from "../../Assets/Icons/handshake.svg";
import whiteStar from "../../Assets/Icons/white-solid.svg";
import unlock from "../../Assets/Icons/unlock.svg";
import axios from "axios";
import Loading from "../../Components/Loading/Loading.js";

function Home() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBusinesses = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/user/get/newestfive`
      );
      if (response.data) {
        setBusinesses(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <main className={styles.main}>
        <Helmet>
          <title>Home | Confluence</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <Header home={true} />
        <Hero businesses={businesses} loading={loading} />
        {/* CheckByCategory */}
        <CheckByCategory />
        {/* How it works */}
        <section className={styles.how__it__works}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <div className={styles.heading}>
                  <h2 className={styles.title}>Simplify the Process</h2>
                  <p className={styles.paragraph}>
                    Unlock a multitude of opportunities with our straightforward
                    process.
                  </p>
                </div>
                <div className={styles.boxes}>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconOne} alt="" />
                    </div>
                    <div className={styles.title__box}>Sign Up</div>
                    <div className={styles.box__phrase}>
                      Kickstart your journey by signing up and joining our
                      diverse community. Experience the ease of registration and
                      become part of an ever-expanding network of influencers
                      and businesses.
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconTwo} alt="" />
                    </div>
                    <div className={styles.title__box}>Collaborate</div>
                    <div className={styles.box__phrase}>
                      Embark on a seamless journey of collaboration. Explore a
                      wide array of partnership opportunities tailored for your
                      brand. Foster meaningful connections and create impactful
                      campaigns.
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconThree} alt="" />
                    </div>
                    <div className={styles.title__box}>Discover Profiles</div>
                    <div className={styles.box__phrase}>
                      Effortlessly browse diverse profiles to discover
                      influencers aligning with your brand vision. Streamline
                      hiring decisions with comprehensive profiles, ensuring
                      informed choices.
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}>
                      <img src={iconFour} alt="" />
                    </div>
                    <div className={styles.title__box}>Review & Rate</div>
                    <div className={styles.box__phrase}>
                      Share your insights and shape our vibrant community.
                      Whether acknowledging outstanding collaborations or
                      offering suggestions, your voice matters in fostering
                      meaningful connections.
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
                  <img src={search} alt="" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>Unique Influencers</h2>
                  <div className={styles.description}>
                    Explore a world of influencers tailored for your brand.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <img src={unlock} alt="" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>Collaboration Freedom</h2>
                  <div className={styles.description}>
                    Unlock the freedom to search influencers with no hidden
                    fees.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <img src={whiteStar} alt="" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>Influencer Spotlight</h2>
                  <div className={styles.description}>
                    Discover influencers in the spotlight, free of contracts.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <img src={handeShake} alt="" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>Dynamic Discovery</h2>
                  <div className={styles.description}>
                    Explore influencers dynamically, no strings attached.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CheckByPlatform */}
        <CheckByPlatform />
        {/* FeaturedInfluencers */}
        <FeaturedInfluencers />
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
                  <Link to={"/brands"}>
                    <div className={styles.button}>Coming Soon...</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FeaturedCollabs */}
        <FeaturedCollabs />
        <Footer />
      </main>
    </>
  );
}

export default Home;
