import React from "react";

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
