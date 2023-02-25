import React from "react";
import Hero from "../components/home/hero/Hero";

//components
import Navbar from "../components/home/navbar/Navbar";

//styles
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
