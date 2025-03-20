import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { API_BASE_URL, types } from "../../../constants";
import { showGalleryModal } from "../../../redux/modal.slice";
import { useDispatch } from "react-redux";

const ProductDetails = ({ data }) => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const showGallery = () => {
    dispatch(
      showGalleryModal({
        data: data.images.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <img src={API_BASE_URL + data.images[1]?.url} alt="" />
            </div>
          );
        }),
      })
    );
  };
  return (
    <div dir={i18n.language == "ar" ? "rtl" : "ltr"} className="px-[5%]">
      <div className="my-32 grid grid-cols-1 md:grid-cols-2 px-[5%]">
        <div className="pl-[10%]">
          <p className="font-bold text-small lg:text-med text-black">
            {i18n.language == "en" ? data.nameEn : data.nameAr}
          </p>
          <p className="py-[20px]">
            <span className="text-black font-bold text-small ">code: </span>
            <span className="text-primary font-bold text-small">
              {i18n.language == "en" ? data.code : data.code}
            </span>
          </p>
          <p className="text-small text-start pb-[20px] ">
            {i18n.language == "en" ? data.descriptionEn : data.descriptionAr}
          </p>
          <div className="pt-[30px]">
            <table className=" border border-2 border-black text-smaller sm:text-med">
              <tbody>
                <tr className="border border-2  border-black ">
                  <td className="border border-2  border-black font-bold px-[20px]">
                    Type:
                  </td>
                  <td className="border border-2  border-black px-[20px]">
                    {data.type}
                  </td>
                </tr>
                <tr className="border border-2  border-black ">
                  <td className="border border-2  border-black font-bold px-[20px]">
                    Category:
                  </td>
                  <td className="border border-2  border-black px-[20px]">
                    {i18n.language == "en"
                      ? data.category.nameEn
                      : data.category.nameAr}
                  </td>
                </tr>
                <tr className="border border-2  border-black ">
                  <td className="border border-2  border-black font-bold px-[20px]">
                    Texture:
                  </td>
                  <td className="border border-2  border-black px-[20px]">
                    {i18n.language == "en"
                      ? data.texture.nameEn
                      : data.texture.nameAr}
                  </td>
                </tr>
                <tr className="border border-2  border-black ">
                  <td className="border border-2  border-black font-bold px-[20px]">
                    Brand:
                  </td>
                  <td className="border border-2  border-black px-[20px]">
                    {i18n.language == "en"
                      ? data.brand.nameEn
                      : data.brand.nameAr}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className=" grid grid-cols-1 justify-center items-center  relative h-[300px] sm:h-[500px] lg:h-[550px] w-[270px] sm:w-[350px] md:w-[400px] transition-all duration-500 rotate-0 origin-center sm:pt-[30px] sm:pl-[10%]">
          <img
            src={API_BASE_URL + data.primaryImage.url}
            alt=""
            divStyle={"!w-full  absolute"}
          />
        </div>
      </div>
      <div>
        <div>
          <p className="text-big p-[30px] pt-[50px]  ">Demo Images:</p>
        </div>
        <div className="flex w-full gap-5 pb-[5%] cursor-pointer">
          {data.images.map((item, index) => {
            return (
              <div className="flex" key={index}>
                <img 
                src={API_BASE_URL + data.images[1]?.url} 
                alt="" 
                onClick={() => {
                  showGallery(index); 
                }}
                className={'w-[500px] h-[400px] '}
                
                />
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
