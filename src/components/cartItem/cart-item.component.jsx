import React from 'react';

import "./cart-item.style.scss";

const CartItem = ({ item: {price, name, quantity, imageUrl }}) => (
  <div className="cart-item">
    <img alt="item" src={imageUrl} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{quantity} * {price}</span>
    </div>
  </div>
)

export default CartItem;