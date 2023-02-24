import React from "react";
import Hero from "../components/home/hero/Hero";

//components
import Navbar from "../components/home/navbar/Navbar";

//styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
