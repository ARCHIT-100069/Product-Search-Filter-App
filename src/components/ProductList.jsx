import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.length === 0 ? (
      <div className="product-list-empty">No products found.</div>
    ) : (
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    )}
  </div>
);

export default ProductList; 