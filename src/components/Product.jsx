import React from 'react';
import '../styles/Product.css';

function Product() {
  return <div className="product">
      <div className="product__info">
          <p>The lean startup</p>
          <p className="product__price">
              <small>$</small>
              <strong>19.99</strong>
          </p>
          <div className="product__rating">
               <img src={require("../img/star.png")} alt="star" />
             <img src={require("../img/star.png")} alt="star" />
              <img src={require("../img/star.png")} alt="star" />
         
          </div>
      </div>
      
      <img className="product__image" src={require("../img/bookLeanStartup.jpeg")} alt="" />
      <button type="">Add to Basket</button>
  </div>;
}

export default Product;
