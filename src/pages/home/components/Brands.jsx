import React, { useState, useEffect } from "react";
import { useGetActiveBrandsQuery } from "../../../redux/brands/brandSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import Slider from "react-slick";
import { API_BASE_URL } from "../../../constants";
const Brands = () => {
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetActiveBrandsQuery();

  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  // const [currentSlide, setCurrentSlide] = useState(0);
  return isLoading || isFetching ? (
    <div className="py-44 flex justify-center items-center relative">
      <Loader />
    </div>
  ) : isError ? (
    <div className=" py-44 flex justify-center itsems-center text-center">
      <p className="text-big font-semibold">{t("errorMsg")}</p>
    </div>
  ) : (
    isSuccess && (
      <Slider
        slidesToScroll={1}
        accessibility
        slidesToShow={1}
        touchMove={true}
        autoplay={true}
        speed={700}
        arrows={false}
        dots={true}
        // speed={10000}
        // autoplaySpeed={0}
        // cssEase="linear"
        lazyLoad="progressive"
        // centerMode
        // centerPadding="60px"
        className="h-fll w-full mt-10"
        // beforeChange={(prev, next) => setCurrentSlide(next)}
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
              className="w-[100%] !flex !justify-center h-full  rounded-xl !items-center"
            >
              <div className="bg-white text-black rounded-sm overflow-hidden !h-[190px] !w-[200px]"> 
                      <img
                  src={API_BASE_URL + data.entities[item].image.url}
                  alt={data.entities[item].nameEn}
                  className=" !h-[190px] rounded-full shadow-lg pb-[3px] cursor-pointer !w-[200px] "
                  onClick={() => {
                    sessionStorage.setItem(
                      "productSlug",
                      data.entities[item].id
                    );
                    navigate(`/products/all/all/all/${data.entities[item].id}`); //:${data.entities[item].products[0].brandId}
                  }}
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
