import React, { useState } from "react";
import Item from "./Item/Item";
import ItemColor from "./ItemColor/ItemColor";
import { useEffect } from "react";

const Filter = ({ data, setData }) => {
  // Khởi tạo các mảng điều kiện
  let count = 0;
  const [arrcost, setArrcost] = useState([
    { name: "Dưới 1.000.000₫", check: false },
    { name: "Từ 1.000.000₫ - 3.000.000₫", check: false },
    { name: "Từ 3.000.000₫ - 5.000.000₫", check: false },
    { name: "Từ 5.000.000₫ - 10.000.000₫", check: false },
    { name: "Trên 10.000.000₫", check: false },
  ]);
  const [arrsize, setArrsize] = useState([
    { name: "33x40cm", check: false },
    { name: "40x30cm", check: false },
    { name: "100x30cm", check: false },
    { name: "50x30cm", check: false },
  ]);
  const [arrcolor, setArrcolor] = useState([
    { name: "Green", check: false },
    { name: "Red", check: false },
    { name: "Black", check: false },
    { name: "Pink", check: false },
    { name: "Yellow", check: false },
  ]);
  // Khởi tạo mảng điều type
  let dk = new Set();
  data.forEach((e) => {
    dk.add(e.type);
  });
  let arrtmp = [];
  const [arrtype, setArrtype] = useState([]);
  useEffect(() => {
    dk.forEach((e) => {
      arrtmp.push({ name: e, check: false });
    });
    setArrtype([...arrtmp]);
  }, []);
  // Xử lý điều kiện type
  useEffect(() => {
    count = 0;
    arrtype.forEach((item) => {
      if (item.check == true) {
        count += 1;
        data.forEach((e) => {
          if (e.type != item.name) e.hide = false;
        });
      }
    });
    if (count == 0)
      data.forEach((e) => {
        e.hide = true;
      });
    setData([...data]);
  }, [arrtype]);
  // Xử lý điều kiện cost
  useEffect(() => {
    count = 0;
    arrcost.forEach((item) => {
      if (item.check == true) count += 1;
    });
    if (arrcost[0].check == true) {
      data.forEach((e) => {
        if (e.cost >= 1000000) e.hide = false;
      });
    }
    if (arrcost[1].check == true) {
      data.forEach((e) => {
        if (e.cost < 1000000 || e.cost > 3000000) e.hide = false;
      });
    }
    if (count == 0)
      data.forEach((e) => {
        e.hide = true;
      });
    setData([...data]);
    console.log(1);
  }, [arrcost]);
  // Thay đổi điều kiện khi input thay đổi
  const ChangeDk = (e) => {
    arrtype.forEach((item) => {
      if (item.name == e) {
        item.check = !item.check;
        setArrtype([...arrtype]);
      }
    });
    arrcolor.forEach((item) => {
      if (item.name == e) {
        item.check = !item.check;
        setArrcolor([...arrcolor]);
      }
    });
    arrcost.forEach((item) => {
      if (item.name == e) {
        item.check = !item.check;
        setArrcost([...arrcost]);
      }
    });
    arrsize.forEach((item) => {
      if (item.name == e) {
        item.check = !item.check;
        setArrsize([...arrsize]);
      }
    });
  };
  // Render

  return (
    <div className="filter">
      <div className="type">
        <h2>Loại sản phẩm</h2>
        {arrtype.map((item, index) => {
          return <Item data={item} key={index} ChangeDk={ChangeDk} />;
        })}
      </div>
      <div className="size">
        <h2>Kích thước</h2>
        {arrsize.map((item, index) => {
          return <Item data={item} key={index + 100} ChangeDk={ChangeDk} />;
        })}
      </div>
      <div className="color">
        <h2>Màu sắc</h2>
        {arrcolor.map((item, index) => {
          return (
            <ItemColor data={item} key={index + 200} ChangeDk={ChangeDk} />
          );
        })}
      </div>
      <div className="fil_cost">
        <h2>Giá sản phẩm</h2>
        {arrcost.map((item, index) => {
          return <Item data={item} key={index + 300} ChangeDk={ChangeDk} />;
        })}
      </div>
    </div>
  );
};

export default Filter;
