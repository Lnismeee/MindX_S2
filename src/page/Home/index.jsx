import React from "react";
import Slider from "../../components/Slider";
import "./styles.css";
import Header from "../theme/Header";
import Footer from "../theme/Footer";
const Home = () => {
    return (
        <>
            <Header></Header>
            <main>
                <div className="container">
                    <div className="left">
                        <div className="left__first">
                            <h2>Danh mục sản phẩm</h2>
                            <ul className="left__list">
                                <li className="left__item">
                                    <a href="/">
                                        <span className="item__span">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon1.png?1695187373377"
                                                alt="Quần áo sơ sinh"
                                                className="item__img"
                                            />
                                            Quần áo sơ sinh
                                        </span>
                                    </a>
                                </li>
                                <li className="left__item">
                                    <a href="/">
                                        <span className="item__span">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon2.png?1695187373377"
                                                alt="Thời trang bé gái"
                                                className="item__img"
                                            />
                                            Thời trang bé gái
                                        </span>
                                    </a>
                                </li>
                                <li className="left__item">
                                    <a href="/">
                                        <span className="item__span">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon3.png?1695187373377"
                                                alt="Thời trang bé trai"
                                                className="item__img"
                                            />
                                            Thời trang bé trai
                                        </span>
                                    </a>
                                </li>
                                <li className="left__item">
                                    <a href="/">
                                        <span className="item__span">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon4.png?1695187373377"
                                                alt="Giày & phụ kiện"
                                                className="item__img"
                                            />
                                            Giày & phụ kiện
                                        </span>
                                    </a>
                                </li>
                                <li className="left__item">
                                    <a href="/">
                                        <span className="item__span">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon5.png?1695187373377"
                                                alt="Sản phẩm tắm & vệ sinh"
                                                className="item__img"
                                            />
                                            Sản phẩm tắm & vệ sinh
                                        </span>
                                    </a>
                                </li>
                                <li className="left__item">
                                    <a href="/">
                                        <span className="item__span">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon6.png?1695187373377"
                                                alt="Đồ chơi & học tập"
                                                className="item__img"
                                            />
                                            Đồ chơi & học tập
                                        </span>
                                    </a>
                                </li>
                                <li className="left__item">
                                    <a href="/">
                                        <span className="item__span">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon7.png?1695187373377"
                                                alt="Khuyến mãi"
                                                className="item__img"
                                            />
                                            Khuyến mãi
                                        </span>
                                    </a>
                                </li>
                                <li className="left__item">
                                    <a href="/">
                                        <span className="item__span">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/thumb/100/488/521/themes/913255/assets/home_sidebar_category_icon8.png?1695187373377"
                                                alt="Sức khoẻ gia đình"
                                                className="item__img"
                                            />
                                            Sức khoẻ gia đình
                                        </span>
                                    </a>
                                </li>
                                <li className="left__item">
                                    <a href="/">
                                        <span className="item__span">
                                            + Xem thêm
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="left__second">
                            <a href="/">
                                <img
                                    src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/home_sidebar_banner.jpg?1695187373377"
                                    alt="banner"
                                />
                            </a>
                        </div>
                        <div className="left__forth">
                            <h2>
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
                    </div>
                    <div className="right">
                        <div className="right__first">
                            <div className="right__slider">
                                <img
                                    src="https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377"
                                    alt=""
                                />
                            </div>
                            <div className="right__banner">
                                <div className="item2">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Home;
