import { Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

const AppRouter = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
