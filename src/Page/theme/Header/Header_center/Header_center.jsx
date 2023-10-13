import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

const Header_center = () => {
  return (
    <div className="header-center">
      <Link to="/" className="h-c-title">
        Trang chủ
      </Link>
      <Link to="/products" className="h-c-title">
        Tất cả sản phẩm &#8250;
      </Link>
      <Link to="/news" className="h-c-title">
        Tin tức
      </Link>
      <Link to="/contact" className="h-c-title">
        Liên hệ
      </Link>
    </div>
  );
};

export default Header_center;
