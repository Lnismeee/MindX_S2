import React from "react";
import "./styles.css";
import { girl } from "./listBaby.json";
import { boy } from "./listBaby.json";
const Home_right = () => {
    return (
        <>
            <div className="right">
                <div className="right__first">
                    <div className="right__slider">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377"
                            alt=""
                        />
                    </div>
                    <div className="right__banner">
                        {/* <div className="item2">
                            <img
                                src="https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377"
                                alt=""
                            />
                        </div>
                        <div className="item3">
                            <img
                                src="https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377"
                                alt=""
                            />
                        </div> */}
                    </div>
                </div>
                <div className="right__second">
                    <ul class="r-s-list">
                        <li class="r-s-card">
                            <div class="r-s-card__icon">
                                <i class="fa-solid fa-truck-fast"></i>
                            </div>
                            <div class="r-s-desc">
                                <span class="r-s-span__heading">
                                    Free ship & Hoàn trả
                                </span>
                                <span>
                                    Các đơn hàng trên 1.000.000đ chúng tôi sẽ
                                    freeship và hoàn trả nếu như không đúng với
                                    sản phẩm đặt.
                                </span>
                            </div>
                        </li>
                        <li class="r-s-card">
                            <div class="r-s-card__icon">
                                <i class="fa-solid fa-coins"></i>
                            </div>
                            <div class="r-s-desc">
                                <span class="r-s-span__heading">
                                    Hoàn 200% sản phẩm kém chất lượng
                                </span>
                                <span>
                                    Các đơn hàng trên 1.000.000đ chúng tôi sẽ
                                    freeship và hoàn trả nếu như không đúng với
                                    sản phẩm đặt.
                                </span>
                            </div>
                        </li>

                        <li class="r-s-card">
                            <div class="r-s-card__icon">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div class="r-s-desc">
                                <span class="r-s-span__heading">
                                    Hotline: 1900.63.60.99
                                </span>
                                <span>
                                    Các đơn hàng trên 1.000.000đ chúng tôi sẽ
                                    freeship và hoàn trả nếu như không đúng với
                                    sản phẩm đặt.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="r-baby">
                    <ul className="baby__list">
                        {boy.map((item) => (
                            <li className="baby__item" key={item.id}>
                                <a href="/">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="baby__img"
                                    />
                                    <h3 className="baby__desc">{item.name}</h3>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="r-trend">
                    <h2>#Hot#Trend#Xuhuong</h2>
                </div>
                <div className="r-baby">
                    <ul className="baby__list">
                        {girl.map((item) => (
                            <li className="baby__item" key={item.id}>
                                <a href="/">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="baby__img"
                                    />
                                    <h3 className="baby__desc">{item.name}</h3>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home_right;
