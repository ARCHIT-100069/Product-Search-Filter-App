import React from "react";

const ProductCard = ({ product }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i} className={
        i < Math.round(product.rating)
          ? "star-filled"
          : "star-empty"
      }>
        ★
      </span>
    ));

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title + ' product image'}
        className="product-image"
        loading="lazy"
      />
      <h3 className="product-title">{product.title}</h3>
      <div className="product-meta">
        <span className="product-price">₹{product.price}</span>
        <span className="product-rating">
          {stars} <span className="product-rating-num">({product.rating})</span>
        </span>
      </div>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductCard; 