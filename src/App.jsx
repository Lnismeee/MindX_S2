import "./App.css";
import Home from "./page/Home/index";
import ProductList from "./page/ProductList";
import News from "./Page/News";
import Contact from "./Page/Contact";
import { Routes, Route } from "react-router-dom";
import Header from "./page/theme/Header/Header";
import Footer from "./page/theme/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
