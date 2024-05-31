import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';

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
