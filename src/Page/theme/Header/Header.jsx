import React from "react";

import "./index.css";
import Header_left from "./Header_left/Header_left";
import Header_center from "./Header_center/Header_center";
import Header_right from "./Header_right/Header_right";
const Header = () => {
  return (
    <div className="header">
      <Header_left />
      <Header_center />
      <Header_right />
    </div>
  );
};

export default Header;
