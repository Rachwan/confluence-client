import React from "react";
import styles from "./Dashboard.module.css";
import { Helmet } from "react-helmet-async";
import Header from "../../Layout/Header/Header";

function Dashboard() {
  return (
    <main className={styles.main__wrapper}>
      <Helmet>
        <title>Dahboard - Confluence</title>
        <meta
          name="description"
          content="Dashboard! This page is the start of your jouney either you are an influencer business or even an admin."
        />
        <meta
          name="keywords"
          content="Dahboard, data, statictics, influencer, buiness, numbers, collaborations"
        />
      </Helmet>
      <Header />
      <div className={styles.main}>Dashboard</div>
    </main>
  );
}

export default Dashboard;
