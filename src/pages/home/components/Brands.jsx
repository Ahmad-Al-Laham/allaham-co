import React, { useState, useEffect } from "react";
import { useGetActiveBrandsQuery } from "../../../redux/brands/brandSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import Slider from "react-slick";
import LazyImage from '../../../components/UI/LazyImage'

const Brands = () => {
  const { data, isSucces, isFetching, isLoading, isError } =
    useGetActiveBrandsQuery();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  return isLoading || isFetching ? (
    <div className="py-44 flex justify-center items-center relative">
      <Loader />
    </div>
  ) : isError ? (
    <div className=" py-44 flex justify-center itsems-center text-center">
      <p className="text-big font-semibold">{t("errorMsg")}</p>
    </div>
  ) : (
    isSucces && (
      <Slider
        slidesToScroll={1}
        accessibility
        slidesToShow={1}
        touchMove={false}
        autoplay={true}
        speed={700}
        // speed={10000}
        // autoplaySpeed={0}
        // cssEase="linear"
        lazyLoad="progressive"
        // centerMode
        // centerPadding="60px"
        className="h-full w-full mt-10"
        beforeChange={(prev, next) => setCurrentSlide(next)}
        responsive={[
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: data.count >= 4 ? 4 : data.count,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: data.count >= 3 ? 3 : data.count,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: data.count >= 2 ? 2 : data.count,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {data.ids.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full !flex !justify-center !items-center"
            >
              <div className="bg-white text-black w-full h-full rounded-sm overflow-hidden"> 
                      <img
                  src={API_BASE_URL + data.entities[item].image.url}
                  alt={data.entities[item].nameEn}
                  className="!h-full !w-full object-center object-cover"
                  />

              </div>
            </div>
          );
        })}
      </Slider>
    )
  );
};

export default Brands;
