import React from "react";
import ProductsHeader from "./components/productsHeader";
import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";
const ProductsPage = () => {
  return (
    <div className="font-Bai">
      <ProductsHeader />
      <Filter />
      <ProductsList/>   
    </div>
  );
};

export default ProductsPage;
