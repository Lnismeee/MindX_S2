import "./App.css";
import Home from "./page/Home/index";
import ProductList from "./page/ProductList";
import News from "./page/News";
import Contact from "./page/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
