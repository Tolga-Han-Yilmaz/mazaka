import React, { useEffect, useState } from "react";
import ProductCategory from "../components/ProductCategory";
import ProductInfo from "../components/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productsSlice";
import Loading from "../components/Loading";

const Home = () => {
  // productsSlice.jsx'de axios ile çağrılan ürünler buruya gönderildi.
  const dispatch = useDispatch();
  const { productsList, loading } = useSelector((state) => state.products);

  // state
  const [menuItems, setMenuItems] = useState(productsList);
  const [isShow, setIsShow] = useState(false);

  // ürünleri kategorilere ayırmak için filter kullanıldı
  const categories = productsList.map((item) => {
    return item.category;
  });

  // ürünlerde aynı kategoriden birden çok olduğu için set işlemi yapıldı
  const categoryList = ["Hepsi", ...new Set(categories)];

  // fonksiyon parent componente tanımladı. child(ProductCategory.jsx) componente props olarak gönderilerek kategorinin alınmasını sağlandı
  const handleFiltered = (category) => {
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

  // useEffect
  useEffect(() => {
    dispatch(getProducts());
    setMenuItems(productsList);
    setIsShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
