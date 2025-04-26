import React from "react";
import HomeHeader from "./components/HomeHeader";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Categories from "./components/Categories";
import Textures from "./components/textures";
import Info from "./components/info";
import Vision from "./components/Vision";
const HomePage = () => {
  return (
    <div className=" font-Bai">
      <HomeHeader />
      <Brands />
      <Info />
      <Categories />
      <Vision />
      <Textures />
      <Contact />
    </div>
  );
};

export default HomePage;
