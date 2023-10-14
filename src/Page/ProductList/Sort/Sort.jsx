import React from "react";

const Sort = ({ data, setData }) => {
  data.sort((fi, se) => {
    let x = fi.name.toLowerCase();
    let y = se.name.toLowerCase();

    return x == y ? 0 : x > y ? 1 : -1;
  });

  return (
    <div className="Sort">
      <h2>Sắp xếp theo</h2>
      <select name="lang" id="lang-select">
        <option value="">Mặc định</option>
        <option value="csharp">A &#8594; Z</option>
        <option value="cpp">Z &#8594; A</option>
        <option value="php">Giá tăng dần</option>
        <option value="ruby">Giá giảm dần</option>
        <option value="js">Hàng mới nhất</option>
        <option value="dart">Hàng cũ nhất</option>
      </select>
    </div>
  );
};

export default Sort;
