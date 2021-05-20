import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import UpdatedComponent from "./components/withCounter";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "./redux/actions/productActions";
import axios from "axios";

const Home = (props) => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispatch(setProduct(response.data))
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="productContainer">
        {products.map((item) => (
          <div key={item.id} className="product_container" style={{padding: 20}}>
            <h4>{item.title}</h4>
            <p>{item.category}</p>
            <p>{item.description}</p>
          </div>
        ))}

        {/* <div>
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
        </div> */}
      </div>
    </>
  );
};

export default UpdatedComponent(Home);
