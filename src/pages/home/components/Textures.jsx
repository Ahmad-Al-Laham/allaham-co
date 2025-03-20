import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import { useGetActiveTextureQuery } from "../../../redux/textures/textureSlice";
import Arrow from "../../../assets/icons/Arrow.svg";

const Textures = () => {
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetActiveTextureQuery({
      page: currentPage,
      limit: itemsPerPage,
    });

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
        <div className="flex justify-center items-center  text-huge font-bold">
        <h2>{t("Textures")}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  px-[10%] pt-[5%] p-[3%]">
          <div className="flex flex-col gap-5">
            {data.ids.map((item, index) => {
              if (index >= 0 && index <= 1)
                return (
                  <div key={index} className="cursor-pointer  ">
                    <div className="bg-white w-[100%]  lg:w-[95%] h-[600px]    overflow-hidden ">
                      <div
                        className="w-[100%] lg:w-[100%] h-[600px]   bg-cover bg-no-repeat bg-center"
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
                          navigate(`/products/all/all/${data.entities[item].id}/all`);
                        }}>
                        <div
                          dir={i18n.language == "en" ? "ltr" : "rtl"}
                          className="flex flex-col h-full border group bg-gradient-to-t from-black/60 hover:from-black/20 transition-all text duration-1000 p-4">
                          <p
                            className={`text-small group-hover:translate-y-[100px] duration-500 ease-in-out text-white font-bold mt-auto flex justify-center items-center ${
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
          </div>
          <div className="flex flex-col pt-[10%] gap-5">
            {data.ids.map((item, index) => {
              if (index >= 2 && index <= 3)
                return (
                  <div key={index} className="cursor-pointer  ">
                    <div className="bg-white w-[100%]  lg:w-[95%] h-[600px]    overflow-hidden ">
                      <div
                        className="w-[100%] lg:w-[100%] h-[600px]   bg-cover bg-no-repeat bg-center"
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
                          navigate(`/products/all/all/${data.entities[item].id}/all`);
                        }}>
                        <div
                          dir={i18n.language == "en" ? "ltr" : "rtl"}
                          className="flex flex-col h-full border group bg-gradient-to-t from-black/60 hover:from-black/20 transition-all text duration-1000 p-4">
                          <p
                            className={`text-small text-white group-hover:translate-y-[100px] duration-500 ease-in-out font-bold flex justify-center items-center mt-auto ${
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
          </div>
          <div className="flex flex-col sm:hidden lg:block gap-5">
            {data.ids.map((item, index) => {
              if (index >= 4 && index <= 5)
                return (
                  <div key={index} className="cursor-pointer  ">
                    <div className="bg-white w-[100%]  lg:w-[95%] h-[600px]    overflow-hidden ">
                      <div
                        className="w-[100%] lg:w-[100%] h-[600px]   bg-cover bg-no-repeat bg-center"
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
                          navigate(`/products/all/all/${data.entities[item].id}/all`);
                        }}>
                        <div
                          dir={i18n.language == "en" ? "ltr" : "rtl"}
                          className="flex flex-col h-full group bg-gradient-to-t from-black/60 hover:from-black/20 transition-all text duration-1000 border p-4">
                          <p
                            className={`text-small text-white group-hover:translate-y-[100px] duration-500 ease-in-out flex justify-center items-center font-bold mt-auto ${
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
          </div>
        </div>
        <div className="text-white cursor-pointer  flex justify-center items-center    text-small right-10 " onClick={() => {
            navigate(`/textures`)
          }}>
          <p className="bg-primary  group  flex px-[20px]">
           {t("ViewAll")}
            <img src={Arrow} alt="" className="pl-[10px] group-hover:translate-x-[40%] transition-all duration-500 " />
          </p>
        </div>
      </div>
    )
  );
};

export default Textures;
//<button class="text-center bg-white p-1 py-1 lg:max-w-[280px] my-2 flex items-center justify-center text-smaller font-medium !bg-primary/50 hover:!bg-primary backdrop-blur-sm text-white text-[26px]  undefined cursor-pointer group absolute -bottom-2 sm:bottom-0 font-semibold  shadow-xl z-20 right-[5%] md:right-[6%]" style="border-radius: 2px; border-width: 1px; border-style: initial; border-image: initial; width: 260px; transition: 0.4s;"><div class="px-1">Discover More</div><div class="px-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="group-hover:translate-x-[50%] transition-all duration-500 false " height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg></div></button>
