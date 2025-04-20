import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import { useGetActiveCategoriesQuery } from "../../../redux/categories/categorySlice";
import Arrow from "../../../assets/icons/Arrow.svg";
const Categories = () => {
  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetActiveCategoriesQuery();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
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
      <div>
        <div className="flex justify-center items-center pt-[5%] text-huge font-bold">
          <h2>{t("Categories")}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 pt-[10%] pb-[5%] sm:pt-[5%] px-[5%] relative">
          {data.ids.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  sessionStorage.setItem("productSlug", data.entities[item].id);
                  navigate(`/products/${data.entities[item].id}/all/all/all`);
                }}
                className="w-full h-[600px] overflow-hidden cursor-pointer relative group"
              >
                <img
                  src={API_BASE_URL + data.entities[item].image.url}
                  alt={data.entities[item].nameEn}
                  className="w-full h-full group-hover:scale-125 transition-all duration-700"
                />
                <p
                  className={`text-small text-white font-medium absolute ${
                    i18n.language == "ar" ? "right-5" : "left-5"
                  }  bottom-12 group-hover:-bottom-full transition-all duration-500`}
                >
                  {i18n.language == "en"
                    ? data.entities[item].nameEn
                    : data.entities[item].nameAr}
                </p>
                {/* <div
                  className="w-full h-full group inset-0 transition-all duration-500 ease-in-out scale-100 hover:scale-110 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${
                      API_BASE_URL + data.entities[item].image.url
                    })`,
                  }}
                >
                  <div
                    dir={i18n.language == "en" ? "ltr" : "rtl"}
                    className="flex flex-col h-full border group p-4 bg-gradient-to-t from-black/30 hover:from-black/0 transition-all text duration-1000 "
                  >
                    <p
                      className={`text-small text-white group-hover:translate-y-[100%] duration-500 ease-in-out font-bold mt-auto ${
                        i18n.language == "en" ? "pl-[10px]" : "pr-[10px]"
                      }  `}
                    >
                      {i18n.language == "en"
                        ? data.entities[item].nameEn
                        : data.entities[item].nameAr}
                    </p>
                  </div>
                </div> */}
              </div>
            );
          })}
          <div
            className="text-white flex justify-center items-center gap-x-2 cursor-pointer transition-all duration-300 text-small sm:text-smaller md:text-small w-full max-w-[270px] h-[50px] -translate-y-[50px] translate-x-[12px] bg-primary/50"
            dir={i18n.language == "ar" ? "rtl" : "ltr"}
            onClick={() => {
              navigate(`/categories`);
            }}
          >
            <p className=" flex justify-center group">{t("ViewAll")}</p>
            <img
              src={Arrow}
              alt=""
              className={`transition-all duration-500 ${
                i18n.language == "ar"
                  ? "rotate-180 group-hover:-translate-x-[50%]"
                  : " group-hover:translate-x-[50%]"
              }`}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Categories;
//<div class="bg-gradient-to-t from-black/30 group-hover:opacity-0 transition-all duration-[1.5s] h-full w-full absolute z-10 top-0 left-0"></div>
//<div class="absolute flex items-center bottom-4 sm:bottom-0 left-10 group-hover:-bottom-full w-full min-h-[90px] max-h-[120px] z-20 transition-all duration-[1.5s]"><p class="text-white text-med font-semibold uppercase origin-left mb-10">Boards</p></div>
