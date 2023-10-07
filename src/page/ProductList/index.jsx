import React from "react";
import data from "../../Data/data.json";
import "./index.css";
import Filter from "./Filter/Filter";
import List from "./List/List";
const ProductList = () => {
  return (
    <div className="product_list">
      <Filter />
      <List />
    </div>
  );
};

export default ProductList;
