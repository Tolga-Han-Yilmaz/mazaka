import { Helmet } from "react-helmet";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Organik Ürünler</title>
        <meta
          name="description"
          content="Her türlü organik meyve,sebze,süt ürünleri,kahvaltılıklar burada"
        />
        <meta
          name="keywords"
          content="Organik, Coğrafi, Gurme, Yöresel, Et, Tavuk, Süt, Salatalık, Domates, Bal, Peynir, Zeytin"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
