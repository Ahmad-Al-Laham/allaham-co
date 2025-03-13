import React from "react";
import ProductsHeader from "./components/productsHeader";
import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";
const ProductsPage = () => {
  return (
    <div>
      <ProductsHeader />
      <Filter />
      <ProductsList/>   
    </div>
  );
};

export default ProductsPage;
