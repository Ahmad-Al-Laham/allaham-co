import React, { useEffect } from "react";
import { useLazyGetProductByIdQuery } from "../../redux/products/productsSlice";
import { useParams } from "react-router-dom";
// import ProductDetails from "./components/ProductDetails";
import Loader from "../../components/UI/Loader";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
const ProductsPage = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const [
    getProductById,
    { data, isLoading, isFetching, isSuccess, isError, error },
  ] = useLazyGetProductByIdQuery();

  useEffect(() => {
    if (id) getProductById({ id });
  }, [id]);
  return isLoading || isFetching ? (
    <div className="h-screen flex justify-center items-center relative">
      <Loader />
    </div>
  ) : isError ? (
    <div className=" py-44 flex justify-center items-center text-center">
      <p className="text-big font-semibold">{t("errorMsg")}</p>
    </div>
  ) : (
    isSuccess && (
      <div>
        <Header data={data}/>
        <ProductDetails data={data} />
      </div>
    )
  );
};

export default ProductsPage;