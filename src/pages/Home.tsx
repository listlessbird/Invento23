import React from "react";
import Hero from "../components/home/hero/Hero";

//components
import Navbar from "../components/home/navbar/Navbar";

//styles
import "./Home.scss";
import Countdown from "../components/countdown/countdown";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <Hero /> */}
      <Countdown />
    </div>
  );
};

export default Home;
