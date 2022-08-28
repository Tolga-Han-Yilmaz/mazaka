import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from "react-router-dom";

const ProductDetails = () => {
  // ProductInfo.jsx'den gönderilen state
  const { state } = useLocation();
  const navigate = useNavigate();

  const { name, description, image, price, badge } = state[0];
  return (
    <div className="productdetails container">
      <button onClick={() => navigate("/")}>Ana Sayfa</button>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={image} className="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-6">
            <article className="card-body">
              <h3 className="card-title">{name} </h3>
              <p className="card-text">{description}</p>
              <p className="card-text">
                {badge.map((item) => {
                  return <span>{item}</span>;
                })}
              </p>
              <section className="price">
                <h2>{price} ₺</h2>
                <button> Satın Al</button>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
