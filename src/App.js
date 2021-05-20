import "./App.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";
import Product from "./Product";
import Cart from "./Cart";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/cart" component={Cart} />
      <Switch>
        <Route path="/product/:id" component={Product} />
      </Switch>
    </Router>
  );
};

export default App;
