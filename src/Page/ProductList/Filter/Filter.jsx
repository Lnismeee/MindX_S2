import React, { useState } from "react";
import Item from "./Item/Item";
import { useEffect } from "react";

const Filter = ({ data, setData }) => {
  //
  let dk = new Set();
  data.forEach((e) => {
    dk.add(e.type);
  });
  let arrtmp = [];
  const [arrdk, setArrdk] = useState([]);
  useEffect(() => {
    dk.forEach((e) => {
      arrtmp.push({ name: e, check: false });
    });
    arrtmp.sort((fi, se) => {
      return fi.name.length > se.name.length;
    });
    console.log(arrtmp);
    setArrdk([...arrtmp]);
  }, []);
  //
  useEffect(() => {
    let count = 0;
    data.forEach((e) => {
      e.hide = false;
    });
    arrdk.forEach((item) => {
      if (item.check == true) {
        count += 1;
        data.forEach((e) => {
          if (e.type == item.name) e.hide = true;
        });
      }
    });
    if (count == 0)
      data.forEach((e) => {
        e.hide = true;
      });
    setData([...data]);
  }, [arrdk]);

  //
  const ChangeDk = (e) => {
    arrdk.forEach((item) => {
      if (item.name == e) item.check = !item.check;
    });
    setArrdk([...arrdk]);
  };
  return (
    <div className="filter">
      {arrdk.map((item, index) => {
        return <Item data={item} key={index} ChangeDk={ChangeDk} />;
      })}
    </div>
  );
};

export default Filter;
