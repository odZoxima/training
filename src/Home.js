import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import UpdatedComponent from "./components/withCounter";

import prod1 from "./images/prod1.jpg";
import prod2 from "./images/prod2.png";
import prod3 from "./images/prod3.jpg";

const Home = (props) => {
  return (
    <>
      <div className="productContainer">
        <div>

          <Link to="/product/prod1">
            <img src={prod1} alt="Product 1" />
          </Link>

          <h5>Product 1</h5>
          <p>Describing the Product 1</p>
          <label>Rs. 100 /-</label>

          <div>
            <button onClick={props.decrementCount}>-</button>
            <label>{props.count}</label>
            <button onClick={props.incrementCount}>+</button>
          </div>
          
        </div>

        <div>

          <Link to="/product/prod2">
            <img src={prod2} alt="Product 2" />
          </Link>

          <h5>Product 2</h5>
          <p>Describing the Product 2</p>
          <label>Rs. 200 /-</label>

          <div>
            <button onClick={props.decrementCount}>-</button>
            <label>{props.count}</label>
            <button onClick={props.incrementCount}>+</button>
          </div>
          
        </div>

        <div>

          <Link to="/product/prod3">
            <img src={prod3} alt="Product 3" />
          </Link>

          <h5>Product 3</h5>
          <p>Describing the Product 3</p>
          <label>Rs. 300 /-</label>

          <div>
            <button onClick={props.decrementCount}>-</button>
            <label>{props.count}</label>
            <button onClick={props.incrementCount}>+</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default UpdatedComponent(Home);
