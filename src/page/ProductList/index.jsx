import React, { useState } from "react";
import data1 from "../../Data/data.json";
import "./index.css";
import Filter from "./Filter/Filter";
import List from "./List/List";
const ProductList = () => {
  const [data, setData] = useState(data1);
  return (
    <div className="product_list">
      <Filter data={data} setData={setData} />
      <List data={data} setData={setData} />
    </div>
  );
};

export default ProductList;
