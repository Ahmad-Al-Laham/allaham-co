import React from 'react'
import { useGetActiveCategoriesQuery } from '../../../redux/categories/categorySlice'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/UI/Loader'
import { API_BASE_URL } from '../../../constants'
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
              <p className="text-big font-semibold">
                {t("noProductsMsg")}
              </p>
            </div>
          ) : (
            isSuccess && (
              <div className={`grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5   pl-[3%] pr-[3%]`}>
                {data.ids.map((item, index) => {
                  return (
                    <div key={index} className="cursor-pointer py-[10px] ">
                      <div className="bg-white w-[100%]  lg:w-[100%] h-[500px]   overflow-hidden">
                                          <div
                                      className="w-[100%] lg:w-[100%] h-[500px] xl:w-[300px]  bg-cover bg-no-repeat bg-center"
                                      style={{
                                        backgroundImage: `url(${API_BASE_URL + data.entities[item].image.url})`,
                                      }}
                                      onClick={() => {
                                        sessionStorage.setItem(
                                          "productSlug",
                                          data.entities[item].id
                                        );
                                        navigate(`/products/${data.entities[item].nameEn}`); 
                                      }}
                                    >
                                                              <div
                        dir={i18n.language == "en" ? "ltr" : "rtl"}
                        className="flex flex-col h-full border p-4"
                      >
                        <p className={`text-small text-white font-bold mt-auto ${i18n.language == "en" ? "pl-[10px]" : "pr-[10px]"}  `}>
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
              </div>
            )
          );
        };
export default CategoriesBody
