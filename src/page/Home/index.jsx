import React from "react";
import "./styles.css";
import Home_left from "./Home_left";
import Home_footer from "./Home_footer";
import Home_right from "./Home_right";

const Home = () => {
    return (
        <>
            <main>
                <div className="container1">
                    <div className="home__top">
                        <Home_left></Home_left>
                        <Home_right></Home_right>
                    </div>
                    <div className="home__bottom">
                        <Home_footer></Home_footer>
                    </div>
                    {/* <Buy></Buy> */}
                </div>
            </main>
        </>
    );
};

export default Home;
