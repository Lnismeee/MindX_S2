import React from "react";

const Sort = ({ data, setData }) => {
  data.sort((fi, se) => {
    let x = fi.name.toLowerCase();
    let y = se.name.toLowerCase();

    return x == y ? 0 : x > y ? 1 : -1;
  });

  return (
    <div className="Sort">
      <select name="lang" id="lang-select">
        <option value="">--Hãy chọn một ngôn ngữ lập trình--</option>
        <option value="csharp">C#</option>
        <option value="cpp">C++</option>
        <option value="php">PHP</option>
        <option value="ruby">Ruby</option>
        <option value="js">Javascript</option>
        <option value="dart">Dart</option>
      </select>
    </div>
  );
};

export default Sort;
