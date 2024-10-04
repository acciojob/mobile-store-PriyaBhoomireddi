// src/components/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';
import Admin from './Admin';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Mobile 1', description: 'Description 1', price: '$200' },
    { id: 2, name: 'Mobile 2', description: 'Description 2', price: '$300' },
    { id: 3, name: 'Mobile 3', description: 'Description 3', price: '$400' },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home products={products} />
        </Route>
        <Route path="/products/:id" render={(props) => {
          const product = products.find(p => p.id === parseInt(props.match.params.id));
          return <ProductDetails product={product} />;
        }} />
        <Route path="/admin">
          <Admin products={products} deleteProduct={deleteProduct} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
