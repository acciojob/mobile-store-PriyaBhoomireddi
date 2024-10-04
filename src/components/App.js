import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <div>
        <h1>Mobile Store</h1>
        <nav>
          <Link to="/">Products</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
