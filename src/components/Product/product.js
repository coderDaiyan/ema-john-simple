import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./product.css";

const Product = (props) => {
  //   console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>
          <small>By: {seller} </small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left is Stock. Order Soon! </small>
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="cart-btn"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
