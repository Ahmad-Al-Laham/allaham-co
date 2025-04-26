import React from "react";
import { useGetActiveCategoriesQuery } from "../../../redux/categories/categorySlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/UI/Loader";
import { API_BASE_URL } from "../../../constants";
const CategoriesBody = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetActiveCategoriesQuery();
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
      <p className="text-big font-semibold">{t("noProductsMsg")}</p>
    </div>
  ) : (
    isSuccess && (
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
                     
                    </div>
                  );
                })}
              </div>
    )
  );
};
export default CategoriesBody;
