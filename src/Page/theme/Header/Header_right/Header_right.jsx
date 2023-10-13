import React, { useEffect, useState } from "react";

import "./index.css";

const Header_right = () => {
  const [a, setA] = useState(0);
  let i = "Tìm kiếm sản phẩm ...xBạn cần tìm gì ...?xNhập tên sản phẩm z";
  const [content, setContent] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setContent(content + i[a]);
      setA(a + 1);
      if (i[a] == "x") setContent("");
      if (i[a] == "z") {
        setA(0);
        setContent("");
      }
    }, 100);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="header-right">
      <input placeholder={content} type="text" />
      <i className="fa-solid fa-magnifying-glass"></i>
      <i className="fa-solid fa-bars"></i>
      <i className="fa-regular fa-user"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-bag-shopping"></i>
    </div>
  );
};

export default Header_right;
