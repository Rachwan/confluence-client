import React from "react";
import styles from "./Creators.module.css";
import { Link } from "react-router-dom";
import background from "../../Assets/Images/Main-listing3.jpg";
import profile from "../../Assets/Images/Main-floating1-1.png";
import phone from "../../Assets/Icons/phone-call.png";
import mail from "../../Assets/Icons/mail.png";

function Creators() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.wrapper}>
            <div className={styles.chain}>
              <Link to={"/"}>
                <span className={styles.sub__chain}>Home</span>
              </Link>
              <span className={styles.sub__chain}>&gt;</span>
              <Link to={"/creators"}>
                <span className={styles.sub__chain}>Creators</span>
              </Link>
            </div>
            <h1 className={styles.content}>Creators</h1>
          </div>
        </section>
        <div className="container">
          <div className={styles.search}>Search + Filter</div>
          <div className={styles.creators__wrapper}>
            <div className={styles.creator}>
              <div className={styles.image}>
                <img src={profile} alt="" className={styles.profile} />
              </div>
              <div className={styles.content__wrapper}>
                <div className={styles.content}>
                  <Link to={"/"}>
                    <h2 className={styles.title}>Alex Collins</h2>
                  </Link>
                  <p className={styles.category}>Food Creator</p>
                  <div className={styles.email__wrapper}>
                    <img src={mail} alt="" className={styles.icon} />
                    <p className={styles.email}>alexcollins@example.com</p>
                  </div>
                  <div className={styles.phone__wrapper}>
                    <img src={phone} alt="" className={styles.icon} />
                    <p className={styles.phone}>+400 300 200</p>
                  </div>
                </div>
                <div className={styles.moredetails}>
                  <Link to={"/"}>
                    <div className={styles.button}>More Details</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.creator}>
              <div className={styles.image}>
                <img src={profile} alt="" className={styles.profile} />
              </div>
              <div className={styles.content__wrapper}>
                <div className={styles.content}>
                  <Link to={"/"}>
                    <h2 className={styles.title}>Alex Collins</h2>
                  </Link>
                  <p className={styles.category}>Food Creator</p>
                  <div className={styles.email__wrapper}>
                    <img src={mail} alt="" className={styles.icon} />
                    <p className={styles.email}>alexcollins@example.com</p>
                  </div>
                  <div className={styles.phone__wrapper}>
                    <img src={phone} alt="" className={styles.icon} />
                    <p className={styles.phone}>+400 300 200</p>
                  </div>
                </div>
                <div className={styles.moredetails}>
                  <Link to={"/"}>
                    <div className={styles.button}>More Details</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.creator}>
              <div className={styles.image}>
                <img src={profile} alt="" className={styles.profile} />
              </div>
              <div className={styles.content__wrapper}>
                <div className={styles.content}>
                  <Link to={"/"}>
                    <h2 className={styles.title}>Alex Collins</h2>
                  </Link>
                  <p className={styles.category}>Food Creator</p>
                  <div className={styles.email__wrapper}>
                    <img src={mail} alt="" className={styles.icon} />
                    <p className={styles.email}>alexcollins@example.com</p>
                  </div>
                  <div className={styles.phone__wrapper}>
                    <img src={phone} alt="" className={styles.icon} />
                    <p className={styles.phone}>+400 300 200</p>
                  </div>
                </div>
                <div className={styles.moredetails}>
                  <Link to={"/"}>
                    <div className={styles.button}>More Details</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.creator}>
              <div className={styles.image}>
                <img src={profile} alt="" className={styles.profile} />
              </div>
              <div className={styles.content__wrapper}>
                <div className={styles.content}>
                  <Link to={"/"}>
                    <h2 className={styles.title}>Alex Collins</h2>
                  </Link>
                  <p className={styles.category}>Food Creator</p>
                  <div className={styles.email__wrapper}>
                    <img src={mail} alt="" className={styles.icon} />
                    <p className={styles.email}>alexcollins@example.com</p>
                  </div>
                  <div className={styles.phone__wrapper}>
                    <img src={phone} alt="" className={styles.icon} />
                    <p className={styles.phone}>+400 300 200</p>
                  </div>
                </div>
                <div className={styles.moredetails}>
                  <Link to={"/"}>
                    <div className={styles.button}>More Details</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.creator}>
              <div className={styles.image}>
                <img src={profile} alt="" className={styles.profile} />
              </div>
              <div className={styles.content__wrapper}>
                <div className={styles.content}>
                  <Link to={"/"}>
                    <h2 className={styles.title}>Alex Collins</h2>
                  </Link>
                  <p className={styles.category}>Food Creator</p>
                  <div className={styles.email__wrapper}>
                    <img src={mail} alt="" className={styles.icon} />
                    <p className={styles.email}>alexcollins@example.com</p>
                  </div>
                  <div className={styles.phone__wrapper}>
                    <img src={phone} alt="" className={styles.icon} />
                    <p className={styles.phone}>+400 300 200</p>
                  </div>
                </div>
                <div className={styles.moredetails}>
                  <Link to={"/"}>
                    <div className={styles.button}>More Details</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.creator}>
              <div className={styles.image}>
                <img src={profile} alt="" className={styles.profile} />
              </div>
              <div className={styles.content__wrapper}>
                <div className={styles.content}>
                  <Link to={"/"}>
                    <h2 className={styles.title}>Alex Collins</h2>
                  </Link>
                  <p className={styles.category}>Food Creator</p>
                  <div className={styles.email__wrapper}>
                    <img src={mail} alt="" className={styles.icon} />
                    <p className={styles.email}>alexcollins@example.com</p>
                  </div>
                  <div className={styles.phone__wrapper}>
                    <img src={phone} alt="" className={styles.icon} />
                    <p className={styles.phone}>+400 300 200</p>
                  </div>
                </div>
                <div className={styles.moredetails}>
                  <Link to={"/"}>
                    <div className={styles.button}>More Details</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.creator}>
              <div className={styles.image}>
                <img src={profile} alt="" className={styles.profile} />
              </div>
              <div className={styles.content__wrapper}>
                <div className={styles.content}>
                  <Link to={"/"}>
                    <h2 className={styles.title}>Alex Collins</h2>
                  </Link>
                  <p className={styles.category}>Food Creator</p>
                  <div className={styles.email__wrapper}>
                    <img src={mail} alt="" className={styles.icon} />
                    <p className={styles.email}>alexcollins@example.com</p>
                  </div>
                  <div className={styles.phone__wrapper}>
                    <img src={phone} alt="" className={styles.icon} />
                    <p className={styles.phone}>+400 300 200</p>
                  </div>
                </div>
                <div className={styles.moredetails}>
                  <Link to={"/"}>
                    <div className={styles.button}>More Details</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Creators;
