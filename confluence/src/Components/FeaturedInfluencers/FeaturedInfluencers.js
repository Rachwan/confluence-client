import React from "react";
import styles from "./FeaturedInfluencers.module.css";
import SectionHead from "../SectionHead/SectionHead";
import profile from "../../Assets/Images/Main-floating3-1.png";
import background from "../../Assets/Images/Main-prod25-300x371.jpg";
import ViewHome from "../ViewHome/ViewHome";

function FeaturedInfluencers() {
  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Featured Influencers"}
            description={
              "We have a lot of opportunities for you. Come check them!"
            }
          />
          <div className={styles.collabs}>
            <ViewHome
              bgImg={background}
              profileLink={"/single-influencer"}
              pImg={profile}
              infName={"Rachwan Harb"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Food Influencer"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
            <ViewHome
              bgImg={background}
              profileLink={"/about"}
              pImg={profile}
              infName={"Rachwan Harb"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Food Influencer"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
            <ViewHome
              bgImg={background}
              profileLink={"/about"}
              pImg={profile}
              infName={"Rachwan Harb"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Food Influencer"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
            <ViewHome
              bgImg={background}
              profileLink={"/about"}
              pImg={profile}
              infName={"Rachwan Harb"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Food Influencer"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
            <ViewHome
              bgImg={background}
              profileLink={"/about"}
              pImg={profile}
              infName={"Rachwan Harb"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Food Influencer"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedInfluencers;
