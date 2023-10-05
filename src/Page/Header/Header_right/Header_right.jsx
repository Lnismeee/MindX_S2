import React, { useEffect, useState } from "react";

import "./index.css";

const Header_right = () => {
  const [a, setA] = useState(0);
  let i = "Tìm kiếm sản phẩm ...xBạn cần tìm gì ...?xNhập tên sản phẩmz";
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
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-bars"></i>
      <i class="fa-regular fa-user"></i>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-bag-shopping"></i>
    </div>
  );
};

export default Header_right;
