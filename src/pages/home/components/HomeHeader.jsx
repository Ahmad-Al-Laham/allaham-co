  import React from "react";
import Slider from "react-slick";
import { useGetCarouselContentQuery } from "../../../redux/header/headerSlice";
import { API_BASE_URL } from "../../../constants";
import Loader from '../../../components/UI/Loader'
import { useTranslation } from "react-i18next";
import {SampleNextArrow,SamplePrevArrow} from '../../../components/UI/SliderArrows'

const HomeHeader = () => {
  const {i18n} = useTranslation();
  const {data , isSuccess , isLoading , isFetching } = useGetCarouselContentQuery();

  return isLoading || isFetching ? (
    <div className="h-screen flex justify-center items-center relative ">
        <Loader/>
    </div>
  ) : (
    isSuccess &&(
      <div className="relative">
        <Slider
        slidesToScroll={1}
        slidesToShow={1}
        touchMove
        autoplay={true}
        arrows
        lazyLoad={true}
        dots={false}
        speed={500}
        className="h-[100vh] w-full "
        nextArrow={<SampleNextArrow/>}
        prevArrow={<SamplePrevArrow/>}
        >
            {data.ids.map((item , index) =>{
              return (
                <div key={index} className="h-[100vh] relative">
                  <img
                  src={API_BASE_URL + data.entities[item].image.url}
                  className="w-full h-full object-cover object-top"
                  />
                  <div className="bg-gradient-to-b from-black/60 h-full w-full absolute top-0 left-0">
                  <div className="bg-black/30 absolute h-full w-full top-0 left-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center text-white max-sm:w-full max-sm:p-10">
                        <p className="text-med md:text-bigger lg:text-huge text-center font-semibold">
                            {i18n.language == "en"
                            ? data.entities[item].titleEn
                            :data.entities[item].titleAr}
                        </p>
                        <p className="text-med md:text-bigger lg:text-huge text-center font-semibold">
                            {i18n.language == "en"
                            ? data.entities[item].discriptionEn
                            :data.entities[item].discriptionAr}
                        </p>
                  </div>
                  </div>
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
    )
  )
  

}

export default HomeHeader;
