import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import "./App.css";


const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={ProductList} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </Router>
    
  );
};

export default App;
