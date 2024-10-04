// src/components/Admin.js
import React from 'react';

const Admin = ({ products, deleteProduct }) => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
