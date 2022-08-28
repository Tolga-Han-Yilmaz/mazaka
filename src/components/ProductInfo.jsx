import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ menuItems, isShow, productsList }) => {
  const navigate = useNavigate();
  const handleClick = async (id) => {
    const navigateToDetail = await productsList?.filter(
      (product) => product.id === id
    ); // Ürüne tıklandığında detay sayfasının açılması için filtreleme yapıldı.
    await navigate("/product", { state: navigateToDetail }); // ProductDetail.jsx'e gönderildi
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
                    <button>Satın Al</button>
                  </div>
                </div>
              );
            })
          : menuItems?.map((product) => {
              return (
                <div className="card" onClick={() => handleClick(product.id)}>
                  <Helmet>
                    <title>{product.category}</title>
                    <meta name="description" content={product.category} />
                  </Helmet>
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
                    <button>Satın Al</button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProductInfo;
