import React, { useEffect, useState } from "react";
import ProductCategory from "../components/ProductCategory";
import ProductInfo from "../components/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { clearProductsList, getProducts } from "../features/productsSlice";
import Loading from "../components/Loading";
const Home = () => {
  const dispatch = useDispatch();
  const { productsList, loading } = useSelector((state) => state.products);

  const [menuItems, setMenuItems] = useState(productsList);

  useEffect(() => {
    dispatch(getProducts());
    return () => {
      dispatch(clearProductsList());
    };
  }, [dispatch]);
  const categories = productsList.map((item) => {
    return item.category;
  });
  const categoryList = ["Hepsi", ...new Set(categories)];

  const handleFiltered = (category) => {
    if (category === "Hepsi") {
      setMenuItems(productsList);
      return;
    }
    const newItems = productsList?.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
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
          <ProductInfo productsList={menuItems} />
        </div>
      )}
    </>
  );
};

export default Home;
