import React, { useEffect, useState } from "react";
import ProductCategory from "../components/ProductCategory";
import ProductInfo from "../components/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProductsList,
  getProducts,
  getDetails,
} from "../features/productsSlice";
import Loading from "../components/Loading";
import axios from "axios";
const Home = () => {
  const dispatch = useDispatch();
  const { productsList, loading } = useSelector((state) => state.products);

  const [menuItems, setMenuItems] = useState(productsList);
  const [isShow, setIsShow] = useState(false);
  // useEffect(() => {
  //   dispatch(getProducts());
  //   return () => {
  //     dispatch(clearProductsList());
  //   };
  // }, [dispatch]);
  const categories = productsList.map((item) => {
    return item.category;
  });
  const categoryList = ["Hepsi", ...new Set(categories)];
  const handleFiltered = (category) => {
    // if (category === "Hepsi") {
    //   setMenuItems(productsList);
    //   return;
    // }
    if (category !== "Hepsi") {
      const newItems = productsList?.filter(
        (item) => item.category === category
      );
      setMenuItems(newItems);
    } else {
      setMenuItems(productsList);
    }
    setIsShow(false);
  };
  useEffect(() => {
    dispatch(getProducts());
    setMenuItems(productsList);
    setIsShow(true);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ProductCategory
            categoryList={categoryList}
            handleFiltered={handleFiltered}
          />
          <ProductInfo
            menuItems={menuItems}
            isShow={isShow}
            productsList={productsList}
          />
        </div>
      )}
    </>
  );
};

export default Home;
