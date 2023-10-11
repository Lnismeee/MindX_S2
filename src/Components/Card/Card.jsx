import React from "react";
import "./index.css";
import "../../Data/data.json";
const Card = ({ data }) => {
  const { name, img_1, img2, discount, cost, old_cost, type, id, barcode } =
    data;
  return (
    <div className="card">
      <span>{discount}</span>
      <div className="icon">
        <i className="icon_item fa-regular fa-heart"></i>
        <i className="icon_item item_hidden fa-solid fa-magnifying-glass"></i>
        <i className="icon_item item_hidden fa-solid fa-cart-shopping"></i>
      </div>
      <div className="card_img">
        <img src={img_1} alt="" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <div className="cost">
          <p>{cost} ₫</p>
          <del>{old_cost}₫</del>
        </div>
        <div className="star">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
