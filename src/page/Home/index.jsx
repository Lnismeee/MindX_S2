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
            <Footer></Footer>
        </>
    );
};

export default Home;
