import React from "react";
import HomeHeader from "./components/HomeHeader";
import Brands from "./components/brands";
import Contact from "./components/Contact";
import Categories from "./components/Categories";
import Textures from "./components/textures";
const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <Brands/>
      <Categories/>
      {/* <Textures/> */}
      <Contact/>
    </div>
  );
};

export default HomePage;
