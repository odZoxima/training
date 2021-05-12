import React from "react"
import "./Product.css"
import { Link, useParams } from "react-router-dom"

import prod1 from "./images/prod1.jpg"
import prod2 from "./images/prod2.png"
import prod3 from "./images/prod3.jpg"

const Product = () => {
    let {id} = useParams()

    return(
        <div className="productDetailsContainer">
            {id==="prod1" && <img src={prod1} alt="product 1" />}
            {id==="prod2" && <img src={prod2} alt="product 2" />}
            {id==="prod3" && <img src={prod3} alt="product 3" />}
            <p>Hi this is a test product with Lorem Ipsum text we don't care about. Thankyou for shopping with us.</p>

            <Link to="/cart"><button className="addToCartCTA">Add to Cart</button></Link>
        </div>
    )
}

export default Product