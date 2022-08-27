import React, { useEffect } from "react";
import ProductCategory from "../components/ProductCategory";
import ProductInfo from "../components/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { clearProductsList, getProducts } from "../features/productsSlice";
import axios from "axios";
import Loading from "../components/Loading";
const Home = () => {
  const dispatch = useDispatch();
  const { productsList, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    return () => {
      dispatch(clearProductsList());
    };
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ProductCategory />
          <ProductInfo />
        </div>
      )}
    </>
  );
};

export default Home;
