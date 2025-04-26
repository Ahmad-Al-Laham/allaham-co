import { useState } from "react";
import React from "react";
import { useGetActiveBrandsQuery } from "../../../redux/brands/brandSlice";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import { API_BASE_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";

const BrandsBody = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetActiveBrandsQuery();

  return isLoading || isFetching ? (
    <div className="py-44 flex justify-center items-center relative">
      <Loader />
    </div>
  ) : isError ? (
    <div className=" py-44 flex justify-center items-center text-center">
      <p className="text-big font-semibold">{t("errorMsg")}</p>
    </div>
  ) : isSuccess && data.ids.length == 0 ? (
    <div className=" py-44 flex justify-center items-center text-center">
      <p className="text-big font-semibold">
        {t("noProductsMsg")}
      </p>
    </div>
  ) : (
    isSuccess && (
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 px-[5%] pl-[10%]">
        {data.ids.map((item, index) => {
          return (
            <div key={index} className="cursor-pointer p-[10%] sm:p-[5%] flex flex-col justify-center items-center ">
              <div className="bg-white w-[200px] h-[190px] rounded-full cursor-pointer  overflow-hidden">
                <img
                  divStyle={"!h-full !w-full"}
                  alt={data.entities[item].nameEn}
                  src={API_BASE_URL + data.entities[item].image.url}
                  className=" h-[190px] w-[200px] cursor-pointer  object-center object-cover"
                  onClick={() => {
                    sessionStorage.setItem(
                      "productSlug",
                      data.entities[item].id
                    );
                    navigate(`/products/all/all/all/${data.entities[item].id}`); //:${data.entities[item].products[0].brandId}
                  }}
                />
                </div>
              
                  <div className="pr-[20px]">
                <p className="text-small font-bold pl-[18%] text-center ">
                  {i18n.language == "en"
                    ? data.entities[item].nameEn
                    : data.entities[item].nameAr}
                </p>
                </div>

            </div>
          );
        })}
      </div>
    )
  );
};

export default BrandsBody;
