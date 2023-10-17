import React, { useState } from "react";

import "./styles.css";
import { girl, boy, hot, bear, sale } from "./listBaby.json";

import Card from "../../../components/Card/Card";
import Slideshow from "../../../components/Slider";
import Swiper from "../../../components/Swiper";
import Button from "../../../components/Button";
const Home_right = () => {
    var tetAmLich = new Date(2023, 9, 19, 0, 0, 0).getTime();

    function newYear() {
        let ngayHienTai = new Date().getTime();
        let thoigianConLai = tetAmLich - ngayHienTai;
        let giay = 1000;
        let phut = giay * 60;
        let gio = phut * 60;
        let ngay = gio * 24;
        let h = Math.floor((thoigianConLai % ngay) / gio);
        let m = Math.floor((thoigianConLai % gio) / phut);
        let s = Math.floor((thoigianConLai % phut) / giay);
        document.getElementById("hour").innerText = h;
        document.getElementById("minute").innerText = m;
        document.getElementById("second").innerText = s;
    }
    setInterval(function () {
        newYear();
    }, 1000);
    return (
        <>
            <div className="right">
                <div className="right__first">
                    <div className="r-f-l">
                        <Slideshow></Slideshow>
                    </div>
                    <div className="r-f-r">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377"
                            alt=""
                        />
                        <img
                            src="https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_2.jpg?1695187373377"
                            alt=""
                        />
                    </div>
                </div>
                <div className="right__second">
                    <ul className="r-s-list">
                        <li className="r-s-card">
                            <div className="r-s-card__icon">
                                <i className="fa-solid fa-truck-fast"></i>
                            </div>
                            <div className="r-s-desc">
                                <span className="r-s-span__heading">
                                    Free ship & Hoàn trả
                                </span>
                                <span>
                                    Các đơn hàng trên 1.000.000đ chúng tôi sẽ
                                    freeship và hoàn trả nếu như không đúng với
                                    sản phẩm đặt.
                                </span>
                            </div>
                        </li>
                        <li className="r-s-card">
                            <div className="r-s-card__icon">
                                <i className="fa-solid fa-coins"></i>
                            </div>
                            <div className="r-s-desc">
                                <span className="r-s-span__heading">
                                    Hoàn 200% sản phẩm kém chất lượng
                                </span>
                                <span>
                                    Chúng tôi hoàn 200% nếu sản phẩm không đúng
                                    với mẫu mã và kém chất lượng .
                                </span>
                            </div>
                        </li>

                        <li className="r-s-card">
                            <div className="r-s-card__icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="r-s-desc">
                                <span className="r-s-span__heading">
                                    Hotline: 1900.63.60.99
                                </span>
                                <span>
                                    Hãy gọi cho chúng tôi khi bạn cần, chúng tôi
                                    luôn lắng nghe ý kiến của bạn.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="r-bear">
                    <ul className="bear__list">
                        {bear.map((item) => (
                            <li className="bear__item" key={item.id}>
                                <a href="/">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="bear__img"
                                    />
                                    <p className="bear__desc">{item.name}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div class="count">
                    <div class="countdown">
                        <img
                            src="https://theme.hstatic.net/200000036162/1000967879/14/fsale_countdown_label.jpg?v=75"
                            alt=""
                            className="c-img"
                        />
                        <h2 className="c-h">kết thúc sau</h2>
                        <div id="hour"></div>
                        <div id="minute"></div>
                        <div id="second"></div>
                    </div>
                </div>
                <div className="c-s-list">
                    <div className="c-s-item">
                        <Swiper></Swiper>
                    </div>
                </div>
                <div className="r-img-banner">
                    <img
                        src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/home_main_banner.jpg?1695187373377"
                        alt=""
                        className="r-img-i"
                    />
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
                    <h2 className="r-t-heading">#Hot #Trend #Xuhuong</h2>
                    <ul className="r-t-list">
                        <Card data={hot[0]} className="r-t-item" />
                        <Card data={hot[1]} className="r-t-item" />
                        <Card data={hot[2]} className="r-t-item" />
                        <Card data={hot[3]} className="r-t-item" />
                    </ul>
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
                <div className="r-sale">
                    <h2 className="r-t-heading">Bán chạy nhất</h2>
                    <ul className="sale__list">
                        {sale.map((item) => (
                            <li className="sale__card" key={sale.id}>
                                <img
                                    src={item.img_1}
                                    alt={item.name}
                                    className="sale__img"
                                />

                                <div className="sale__info">
                                    <p className="sale__heading">{item.name}</p>
                                    <div className="sale__cost">
                                        <span>{item.cost}₫</span>
                                        <del>{item.old_cost}₫</del>
                                        <span>({item.discount})</span>
                                    </div>
                                    <div className="fifth__star">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <Button></Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home_right;
