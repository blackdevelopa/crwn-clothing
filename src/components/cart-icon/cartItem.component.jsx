import React from "react";
import { ReactComponent as ShoppingIcon} from '../../assets/cart.svg'
import "./cartItem.style.scss";
import { connect } from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)

const mapStateDispatchToProps = dispath => ({
  toggleCartHidden: () => dispath(toggleCartHidden())
})

export default connect(null, mapStateDispatchToProps)(CartIcon);