import React from "react";
import HomeHeader from "./components/HomeHeader";
import Brands from "./components/brands";
import Contact from "./components/Contact";
import Categories from "./components/Categories";
import Textures from "./components/textures";
import Info from "./components/info";
import Vision from "./components/Vision";
const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <Brands/>
      <Info/>
      <Categories/>
      <Vision/>
      <Textures/>
      <Contact/>
    </div>
  );
};

export default HomePage;
