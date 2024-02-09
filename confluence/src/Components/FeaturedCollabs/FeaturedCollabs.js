import React from "react";
import styles from "./FeaturedCollabs.module.css";
import SectionHead from "../SectionHead/SectionHead";
import profile from "../../Assets/Images/Main-floating3-1.png";
import background from "../../Assets/Images/Main-prod25-300x371.jpg";
import ViewHome from "../../Components/ViewHome/ViewHome";

function FeaturedCollabs() {
  return (
    <>
      <section className={styles.main__wrapper}>
        <div className={`container ${styles.wrapper}`}>
          <SectionHead
            title={"Featured Collaborations"}
            description={
              "We have a lot of opportunities for you. Come check them!"
            }
          />
          <div className={styles.collabs}>
            <ViewHome
              bgImg={background}
              profileLink={"/about"}
              pImg={profile}
              infName={"Matt Young"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Platform"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
            <ViewHome
              bgImg={background}
              profileLink={"/about"}
              pImg={profile}
              infName={"Matt Young"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Platform"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
            <ViewHome
              bgImg={background}
              profileLink={"/about"}
              pImg={profile}
              infName={"Matt Young"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Platform"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
            <ViewHome
              bgImg={background}
              profileLink={"/about"}
              pImg={profile}
              infName={"Matt Young"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Platform"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
            <ViewHome
              bgImg={background}
              profileLink={"/about"}
              pImg={profile}
              infName={"Matt Young"}
              totalFollowers={"300k"}
              link={"/single-collab"}
              linkContent={"Platform"}
              text={"Tom Oliver is inspiring others to live their best lives"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedCollabs;
