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
              <div key={index} className="cursor-pointer  ">
                <div className="bg-white w-[100%]  lg:w-[100%] h-[600px]    overflow-hidden">
                  <div
                    className="w-[100%] lg:w-[100%] h-[600px] group  inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out scale-100 hover:scale-110   bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${
                        API_BASE_URL + data.entities[item].image.url
                      })`,
                    }}
                    onClick={() => {
                      sessionStorage.setItem(
                        "productSlug",
                        data.entities[item].id
                      );
                      navigate(`/products/${data.entities[item].nameEn}`);
                    }}>
                    <div
                      dir={i18n.language == "en" ? "ltr" : "rtl"}
                      className="flex flex-col h-full border group p-4 bg-gradient-to-t from-black/30 hover:from-black/0 transition-all text duration-1000 ">
                      <p
                        className={`text-small text-white group-hover:translate-y-[100%] duration-500 ease-in-out font-bold mt-auto ${
                          i18n.language == "en" ? "pl-[10px]" : "pr-[10px]"
                        }  `}>
                        {i18n.language == "en"
                          ? data.entities[item].nameEn
                          : data.entities[item].nameAr}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="text-white cursor-pointer pt-[10px] transition-all duration-300 text-small sm:text-smaller md:text-small  " onClick={() => {
            navigate(`/categories`)
          }}>
          <p className="bg-primary flex justify-center  group px-[20px]">{t("ViewAll")}
            <img src={Arrow} alt="" className="pl-[10px] group-hover:translate-x-[50%] transition-all duration-500 " />
          </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Categories;
//<div class="bg-gradient-to-t from-black/30 group-hover:opacity-0 transition-all duration-[1.5s] h-full w-full absolute z-10 top-0 left-0"></div>
//<div class="absolute flex items-center bottom-4 sm:bottom-0 left-10 group-hover:-bottom-full w-full min-h-[90px] max-h-[120px] z-20 transition-all duration-[1.5s]"><p class="text-white text-med font-semibold uppercase origin-left mb-10">Boards</p></div>
