import React from "react";
import "./styles.css";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/index";
import { news, endow } from "./leftFifth.json";
import { left1 } from "./leftFifth.json";
import data from "../../../Data/data.json";
import { useEffect, useState } from "react";
const Home_left = () => {
    const [a, setA] = useState(0);
    let i = "Bạn cần tư vấn?   xNhập địa chỉ email của bạn ...z";
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
        }, 150);
        return () => {
            clearInterval(timer);
        };
    });
    return (
        <div className="left">
            <div className="left__first">
                <h2 className="first__heading">Danh mục sản phẩm</h2>
                <ul className="left__list">
                    {left1.map((item) => (
                        <li className="left__item" key={left1.id}>
                            <a href="/">
                                <span className="item__span">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="item__img"
                                    />
                                    {item.name}
                                </span>
                            </a>
                        </li>
                    ))}
                    <li className="left__item">
                        <a href="/">
                            <span className="item__span">+ Xem thêm</span>
                        </a>
                    </li>
                </ul>
                <div className="left__second">
                    <a href="/">
                        <img
                            src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/home_sidebar_banner.jpg?1695187373377"
                            alt="banner"
                        />
                    </a>
                </div>
                <div className="left__third">
                    <h2 className="third__heading">Sản phẩm hot</h2>
                    <Card data={data[0]} />
                </div>
                <div className="left__forth">
                    <h2 className="first__heading">
                        <a href="/">Từ khoá nổi bật</a>
                    </h2>
                    <nav className="forth__tags">
                        <ul className="forth__list">
                            <li className="forth__item">
                                <a href="/">#Tất cả</a>
                            </li>
                            <li className="forth__item">
                                <a href="/">#Xu Hướng</a>
                            </li>
                            <li className="forth__item">
                                <a href="/">#Bỉm tã</a>
                            </li>
                            <li className="forth__item">
                                <a href="/">#Sale</a>
                            </li>
                            <li className="forth__item">
                                <a href="/">#Mua là tặng</a>
                            </li>
                            <li className="forth__item">
                                <a href="/">#F1genz</a>
                            </li>
                            <li className="forth__item">
                                <a href="/">#Xuất khẩu</a>
                            </li>
                            <li className="forth__item">
                                <a href="/">#Nội địa</a>
                            </li>
                            <li className="forth__item">
                                <a href="/">#Mua ngay</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="left__fifth">
                    <h2 className="third__heading">Sản phẩm mới</h2>
                    <ul className="fifth__list">
                        {news.map((item) => (
                            <li className="fifth__card" key={news.id}>
                                <img
                                    src={item.img_1}
                                    alt={item.name}
                                    className="fifth__img"
                                />

                                <div className="fifth__info">
                                    <p className="fifth__heading">
                                        {item.name}
                                    </p>
                                    <div className="fifth__cost">
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
                <div className="left__contact">
                    <h2 className="l-c-heading">Newsletter</h2>
                    <input
                        placeholder={content}
                        type="text"
                        className="l-c-input"
                    />
                    <div className="btn">
                        <a href="/">Đăng kí</a>
                    </div>
                </div>
                <div className="left-endow">
                    <h2 className="third__heading">Ưu đãi trong tháng</h2>
                    <ul className="fifth__list">
                        {endow.map((item) => (
                            <li className="fifth__card" key={endow.id}>
                                <img
                                    src={item.img_1}
                                    alt={item.name}
                                    className="fifth__img"
                                />

                                <div className="fifth__info">
                                    <p className="fifth__heading">
                                        {item.name}
                                    </p>
                                    <div className="fifth__cost">
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
                <div className="left-person">
                    <img
                        src="https://cdn.tuoitre.vn/thumb_w/640/471584752817336320/2023/2/10/son-ye-jin-1-003902-16760038459682084280230.jpeg"
                        alt=""
                        className="l-p-img"
                    />
                    <p className="l-p-desc">
                        Giá thành rẻ, sản phẩm nhập khẩu 100% từ Mỹ, Úc, các sản
                        phẩm đã qua khâu kiểm duyệt.
                    </p>
                    <strong className="l-p-desc">Chị Seo</strong>
                    <p className="l-p-desc">Người tieu dùng</p>
                </div>
            </div>
        </div>
    );
};

export default Home_left;
