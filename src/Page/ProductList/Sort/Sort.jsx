import React, { useEffect, useState } from "react";
import olddata1 from "../../../Data/datacopy.json";
const Sort = ({ data, setData }) => {
  const [olddata, setOldData] = useState(olddata1);
  const ToSort = (e) => {
    console.log(e);
    if (e == "Mặc định") data = olddata;
    else if (e == "A → Z") {
      data.sort((fi, se) => {
        let x = fi.name.toLowerCase();
        let y = se.name.toLowerCase();
        return x == y ? 0 : x > y ? 1 : -1;
      });
    } else if (e == "Z → A") {
      data.sort((fi, se) => {
        let x = fi.name.toLowerCase();
        let y = se.name.toLowerCase();
        return x == y ? 0 : x < y ? 1 : -1;
      });
    } else if (e == "Giá tăng dần") {
      data.sort((fi, se) => {
        let x = fi.cost;
        let y = se.cost;
        return x == y ? 0 : x > y ? 1 : -1;
      });
    } else if (e == "Giá giảm dần") {
      data.sort((fi, se) => {
        let x = fi.cost;
        let y = se.cost;
        return x == y ? 0 : x < y ? 1 : -1;
      });
    } else if (e == "Hàng mới nhất") data = olddata;
    else data = [...olddata].reverse();
    setData([...data]);
  };
  //
  const [selectSort, SetSelectSort] = useState("");
  return (
    <div className="Sort">
      <h2>Sắp xếp theo</h2>
      <select
        value={selectSort}
        onChange={(e) => {
          SetSelectSort(e.target.value);
          ToSort(e.target.value);
        }}
      >
        <option>Mặc định</option>
        <option>A &#8594; Z</option>
        <option>Z &#8594; A</option>
        <option>Giá tăng dần</option>
        <option>Giá giảm dần</option>
        <option>Hàng mới nhất</option>
        <option>Hàng cũ nhất</option>
      </select>
    </div>
  );
};

export default Sort;
