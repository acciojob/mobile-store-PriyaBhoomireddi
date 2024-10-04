import React from 'react';
import { Link } from 'react-router-dom';

// Sample products data
const products = [
  { id: 1, name: 'iPhone 13', description: 'Latest iPhone model', price: '$799' },
  { id: 2, name: 'Samsung Galaxy S21', description: 'Latest Samsung model', price: '$699' },
  // Add more products as needed
];

function Products() {
  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
