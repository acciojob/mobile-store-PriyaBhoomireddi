// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ products }) => {
  return (
    <div>
      <h1>Mobile Store</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} className="btn">{product.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/admin">Admin</Link>
    </div>
  );
};

export default Home; // Ensure this export is correct
