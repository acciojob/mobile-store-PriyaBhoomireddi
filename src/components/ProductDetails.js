// src/components/ProductDetails.js
import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) return <h2>Product not found!</h2>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
