import React from "react";
import "./styles.css";
import Card from "../../../components/Card/Card";
import data from "../../../Data/data.json";
import Button from "../../../components/Button/index";
import { useEffect, useState } from "react";

const Home_left = () => {
    const left1 = [
        {
            id: 1,
            img: "https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon1.png?1695187373377",
            name: "Quần áo sơ sinh",
        },
        {
            id: 2,
            img: "https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon2.png?1695187373377",
            name: "Thời trang bé gái",
        },
        {
            id: 3,
            img: "https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon3.png?1695187373377",
            name: "Thời trang bé trai",
        },
        {
            id: 4,
            img: "https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon4.png?1695187373377",
            name: "Giày & phụ kiện",
        },
        {
            id: 5,
            img: "https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon5.png?1695187373377",
            name: "Sản phẩm tắm & vệ sinh",
        },
        {
            id: 6,
            img: "https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon6.png?1695187373377",
            name: "Đồ chơi & học tập",
        },
        {
            id: 7,
            img: "https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon7.png?1695187373377",
            name: "Quần áo sơ sinh",
        },
        {
            id: 8,
            img: "https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon8.png?1695187373377",
            name: "Sức khoẻ gia đình",
        },
    ];
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
                        {data.map((item) => (
                            <li className="fifth__card" key={data.id}>
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
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    {/* <Button></Button> */}
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
            </div>
        </div>
    );
};

export default Home_left;
