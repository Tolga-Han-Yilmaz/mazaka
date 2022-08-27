import React from "react";

const ProductInfo = ({ productsList }) => {
  return (
    <div>
      <div className="productlist container">
        {productsList.map((product) => {
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
                  <h2>{product.price}</h2>
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
