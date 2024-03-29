import React from "react";
import styles from "./Contact.module.css";
import message from "../../Assets/Icons/Main-contact01.png";
import earth from "../../Assets/Icons/Main-contact02.png";
import profile from "../../Assets/Icons/Main-contact03.png";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>Contact Us | Confluence</title>
        <meta
          name="description"
          content="Get in touch with Confluence. Whether you're a business looking to collaborate or an influencer seeking opportunities, we're here to connect and support you."
        />
        <meta
          name="keywords"
          content="Contact Confluence, business collaboration, influencer partnerships, contact information, get in touch"
        />
      </Helmet>
      <section className={styles.intro}>
        <div className={styles.wrapper}>
          <h1 className={styles.content}>Contact Us</h1>
        </div>
      </section>
      <div className={styles.contactPage}>
        <div className={`container ${styles.contactContainer}`}>
          <section className={styles.contactNb}>
            <div className={styles.email}>
              <img src={message} alt="Message Icon" className={styles.icon} />
              <h3 className={styles.title}>Email Address</h3>
              <p className={styles.single__email}>
                contact@confluence.com
              </p>
              <p className={styles.single__email}>
                support@confluence.com
              </p>
            </div>
            <div className={styles.location}>
              <img src={earth} alt="Location Icon" className={styles.icon} />
              <h3 className={styles.title}>Headquarters</h3>
              <p className={styles.single__location}>
                42 Cedar Street, Achrafieh
              </p>
              <p className={styles.single__location}>
                Beirut, Lebanon
              </p>
            </div>
            <div className={styles.phone}>
              <img src={profile} alt="Profile Icon" className={styles.icon} />
              <h3 className={styles.title}>Phone Numbers</h3>
              <p className={styles.single__phone}>
                Headquarters: +961 76 445 648
              </p>
              <p className={styles.single__phone}>Sales: +961 70 540 616</p>
            </div>
          </section>
          <form className={styles.form} action="/" method="POST" name="contact">
            <div className={styles.contactForm}>
              <h2 className={styles.form__title}>Send us a Message</h2>
              <div className={styles.inputsHolder}>
                <div className={styles.row__inputs}>
                  <div className={styles.single__input}>
                    <label htmlFor="fn">Full Name</label>
                    <input
                      className={styles.input}
                      type="text"
                      id="fn"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className={styles.single__input}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      className={styles.input}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                </div>
                <div className={styles.row__inputs}>
                  <div className={styles.single__input}>
                    <label htmlFor="pNumber">Phone Number</label>
                    <input
                      className={styles.input}
                      type="text"
                      id="pNumber"
                      name="phone"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className={styles.single__input}>
                    <label htmlFor="sub">Subject</label>
                    <input
                      className={styles.input}
                      type="text"
                      id="sub"
                      name="subject"
                      placeholder="The message subject"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={styles.msgHolder}>
                <label htmlFor="texta">Message</label>
                <textarea
                  id="texta"
                  className={styles.msgInput}
                  type="textarea"
                  placeholder="Write you message down..."></textarea>
              </div>
              <div className={styles.btnHolder}>
                <button
                  className={styles.Submit__button}
                  type="submit"
                  value="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
