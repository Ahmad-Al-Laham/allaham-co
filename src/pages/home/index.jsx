import React from "react";
import HomeHeader from "./components/HomeHeader";
import Brands from "./components/brands";
import Contact from "./components/Contact";
const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <Brands/>
      <Contact/>
    </div>
  );
};

export default HomePage;
