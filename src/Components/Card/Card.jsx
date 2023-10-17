import React from "react";
import "./index.css";
import "../../Data/data.json";
const Card = ({ data }) => {
<<<<<<< HEAD
    const {
        name,
        img_1,
        img_2,
        discount,
        cost,
        old_cost,
        type,
        id,
        barcode,
        hide = true,
    } = data;
    const tran = (e) => {
        let a = String(e);
        let b = "";
        for (let i = a.length - 1; i >= 0; i--) {
            if ((a.length - 1 - i) % 3 == 0) b += ".";
            b += a[i];
        }
        //1000000
        b = b
            .split("")
            .reverse()
            .join("")
            .substring(0, b.length - 1);
        return b;
    };
    if (hide == true)
        return (
            <div className="card">
                <span>{discount}</span>
                <div className="icon">
                    <i className="icon_item fa-regular fa-heart"></i>
                    <i className="icon_item item_hidden fa-solid fa-magnifying-glass"></i>
                    <i className="icon_item item_hidden fa-solid fa-cart-shopping"></i>
                </div>
                <div className="card_img">
                    <img className="img1" src={img_1} alt="" />
                    <img
                        className="img2"
                        src={img_2 == "" ? img_1 : img_2}
                        alt=""
                    />
                </div>
                <div className="info1">
                    <h2>{name}</h2>
                    <div className="cost">
                        <p>{tran(cost)} ₫</p>
                        <del>{tran(old_cost)}₫</del>
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
=======
  const {
    name,
    img_1,
    img_2,
    discount,
    cost,
    old_cost,
    type,
    id,
    barcode,
    hide = true,
  } = data;
  const tran = (e) => {
    let a = String(e);
    let b = "";
    for (let i = a.length - 1; i >= 0; i--) {
      if ((a.length - 1 - i) % 3 == 0) b += ".";
      b += a[i];
    }
    //1000000
    b = b
      .split("")
      .reverse()
      .join("")
      .substring(0, b.length - 1);
    return b;
  };
  if (hide == true)
    return (
      <div className="card">
        <span>{discount}</span>
        <div className="icon">
          <i className="icon_item fa-regular fa-heart"></i>
          <i className="icon_item item_hidden fa-solid fa-magnifying-glass"></i>
          <i className="icon_item item_hidden fa-solid fa-cart-shopping"></i>
        </div>
        <div className="card_img">
          <img className="img1" src={img_1} alt="" />
          <img className="img2" src={img_2 == "" ? img_1 : img_2} alt="" />
        </div>
        <div className="info1">
          <h2>{name}</h2>
          <div className="cost">
            <p>{tran(cost)} ₫</p>
            <del>{tran(old_cost)}₫</del>
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
>>>>>>> da9bb5d274124b93b56ea76285ea9c132718da2e
};

export default Card;
