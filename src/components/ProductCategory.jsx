import React from "react";
import {
  FaShoppingBasket,
  FaCarrot,
  FaCheese,
  FaChild,
  FaOilCan,
  FaRaspberryPi,
  FaAppleAlt,
  FaBreadSlice,
  FaCookieBite,
  FaMugHot,
} from "react-icons/fa";

const ProductCategory = ({ categoryList, handleFiltered }) => {
  return (
    <div className="category container">
      <div className="category__btn">
        {categoryList.map((category, index) => {
          return (
            <button
              className="category__btn-filter"
              key={index}
              onClick={() => handleFiltered(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
