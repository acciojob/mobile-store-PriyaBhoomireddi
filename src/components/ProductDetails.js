import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  
  // Sample product details based on id
  const productDetails = {
    1: { name: 'iPhone 13', description: 'Latest iPhone model', price: '$799' },
    2: { name: 'Samsung Galaxy S21', description: 'Latest Samsung model', price: '$699' },
  };

  const product = productDetails[id];

  return (
    <div>
      <h2>{product?.name}</h2>
      <p>{product?.description}</p>
      <p>Price: {product?.price}</p>
    </div>
  );
}

export default ProductDetails;
