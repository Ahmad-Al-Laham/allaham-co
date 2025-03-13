import React from "react";

import Header from '../../../assets/images/products/Header.png'
import { useTranslation } from "react-i18next";
const ProductHeader = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div
      dir={i18n.language == "en" ? "ltr" : "rtl"}
      className="min-h-[80vh] flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${Header})`,
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/60 z-10" />

      <p className="uppercase text-big sm:text-bigger lg:text-huge text-white font-bold z-20 px-4 text-center">
        {i18n.language == "en" ? data.nameEn : data.nameAr}
      </p>
      <p className="text-med sm:text-big  text-white font-bold z-20 px-4">
        {data.code}
      </p>
    </div>
  );
};

export default ProductHeader;
