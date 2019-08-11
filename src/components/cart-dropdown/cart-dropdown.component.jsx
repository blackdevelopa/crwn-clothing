import React from 'react';
import { connect } from "react-redux";
import './cart-dropdown.styles.scss';
import CustomButton from '../customButton/customButton.component';
import CartItem from '../cartItem/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {
      cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
    }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems }}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);