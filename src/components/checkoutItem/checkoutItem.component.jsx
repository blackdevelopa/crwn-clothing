import React from "react";
import "./checkoutItem.styles.scss";
import { connect } from "react-redux";
import { removeFromCart, removeItem, addItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ removeFromCart, cartItem, removeItem, addItem }) => {
  const  {imageUrl, name, quantity, price} = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="value" onClick={() => removeItem(cartItem)}>&#10094;</div>
          {quantity}
        <div className="value" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeFromCart(cartItem)}>&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: item => dispatch(removeFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);