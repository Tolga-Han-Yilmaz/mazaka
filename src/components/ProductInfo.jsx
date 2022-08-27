import React from "react";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ menuItems, isShow, productsList }) => {
  const navigate = useNavigate();
  const handleClick = async (id) => {
    const navigateToDetail = await productsList?.filter(
      (product) => product.id === id
    );
    await navigate("/product", { state: navigateToDetail });
  };
  return (
    <div>
      <div className="productlist container">
        {isShow
          ? productsList?.map((product) => {
              return (
                <div className="card" onClick={() => handleClick(product.id)}>
                  <div className="imgBx">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="contentBx">
                    <h2>{product.name}</h2>
                    <div className="size">
                      {product.badge.map((item) => {
                        return <span>{item}</span>;
                      })}
                    </div>
                    <div className="color">
                      <h2>{product.price} ₺</h2>
                    </div>
                    <a href="#">Satın Al</a>
                  </div>
                </div>
              );
            })
          : menuItems?.map((product) => {
              return (
                <div className="card">
                  <div className="imgBx">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="contentBx">
                    <h2>{product.name}</h2>
                    <div className="size">
                      {product.badge.map((item) => {
                        return <span>{item}</span>;
                      })}
                    </div>
                    <div className="color">
                      <h2>{product.price} ₺</h2>
                    </div>
                    <a href="#">Satın Al</a>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProductInfo;
