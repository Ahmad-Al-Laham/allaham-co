import React, { useState, useEffect } from "react";
import { useGetActiveProductsMutation } from "../../../redux/products/productsSlice";
import { API_BASE_URL } from "../../../constants";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/UI/Loader";
import Pagination from "../../../components/Forms/Pagination";
import LazyImage from "../../../components/UI/LazyImage";
const ProductsList = () => {
  const {
    search,
    category,
    type,
    brand,
    texture
  } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
    const [
      getActiveProducts,
      { data, isSuccess, isLoading, isFetching, isError },
    ] = useGetActiveProductsMutation();

  useEffect(() => {
    if (search) {
      getActiveProducts({
        page: currentPage,
        limit: itemsPerPage,
        searchTerm: search,
      });
    } else if (
      type ||
      category ||
      brand ||
      texture 
    ) {
      getActiveProducts({

        categoryId:
          category == "all" || typeof category !== "string" ? "" : category,
        type: type == "all" || typeof type !== "string" ? "" : type,
        brandId: 
        brand == "all" || typeof brand !== "string" ? "" : brand,
        textureId : 
        texture == "all" || typeof texture !== "string" ?"" : texture,
        page: currentPage,
        limit: itemsPerPage,
        filter: true,
      });
    } else {
      getActiveProducts({
        page: currentPage,
        limit: itemsPerPage,
      });
    }
  }, [
    search,
    currentPage,
    itemsPerPage,
    type,
    category,
    brand,
    texture
  ]);

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
      <div className="flex flex-col justify-center mt-10">
        <div
          dir={i18n.language == "en" ? "ltr" : "rtl"}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 justify-center items-center place-items-center my-6 px-[7%] sm:px-[5%]"
        >
          {data.ids.map((item, index) => {
            return (
              <div key={index} className="cursor-pointer">
                <div
                  onClick={() => {
                    sessionStorage.setItem(
                      "productSlug",
                      data.entities[item].id
                    );
                    navigate(`/product/${data.entities[item].id}`);
                  }}
                  className={
                    "flex justify-center p-1 rounded-md flex-col items-center bg-white relative h-[370px] min-w-[300px] sm:min-w-[370px]  w-full"
                  }
                >
                  <div className="bg-white w-full h-full   p-[10px]  overflow-hidden">
                    <img
                      divStyle={"!h-full !w-full"}
                      alt={data.entities[item].nameEn}
                      src={API_BASE_URL + data.entities[item].images[0]?.url}
                      className="!h-full !w-full object-center object-cover"
                    />
                  </div>
                </div>
                <div
                  dir={i18n.language == "en" ? "ltr" : "rtl"}
                  className="px-2  flex justify-between  items-center"
                >
                  <p className="text-small font-bold">
                    {i18n.language == "en"
                      ? data.entities[item].nameEn
                      : data.entities[item].nameAr}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <Pagination
            currentPage={currentPage}
            totalCount={data.count}
            pageSize={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    )
  );
};

export default ProductsList;