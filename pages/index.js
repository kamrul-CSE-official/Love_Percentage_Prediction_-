import Head from "next/head";
import React from "react";
import styles from "../styles/index.module.css";
import MainSection from "./Components/MainSection/MainSection";
const index = () => {
  return (
    <>
      <Head>
        <title>Love Calculator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="../public/heart.png" />
      </Head>
      <main className={styles.body}>
        <section className={styles.parentSection}>
          <section>
            <MainSection />
          </section>
        </section>
      </main>
    </>
  );
};

export default index;
