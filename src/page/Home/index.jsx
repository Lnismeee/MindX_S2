import React from "react";
import Slider from "../../components/Slider/index";
import "./styles.css";
import Header from "../theme/Header/Header";
import Footer from "../theme/Footer";

import Home_left from "./Home_left";
import Home_footer from "./Home_footer";
import Home_right from "./Home_right";
import Card from "../../components/Card/Card";
import data from "../../Data/data.json";

const Home = () => {
    const slides = [
        {
            url: "https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377",
            title: "beach",
        },
        {
            url: "https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377",
            title: "boat",
        },
        {
            url: "https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377",
            title: "forest",
        },
        {
            url: "https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377",
            title: "city",
        },
        {
            url: "https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377",
            title: "italy",
        },
    ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };
    return (
        <>
            <main>
                <div className="container">
                    <div className="home__top">
                        <Home_left></Home_left>
                        <Home_right></Home_right>
                    </div>
                    <div className="home__bottom">
                        <Home_footer></Home_footer>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
