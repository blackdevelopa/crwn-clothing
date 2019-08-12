import React from "react";
import { ReactComponent as ShoppingIcon} from '../../assets/cart.svg'
import "./cartItem.style.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapStateDispatchToProps = dispath => ({
  toggleCartHidden: () => dispath(toggleCartHidden())
})

export default connect(mapStateToProps, mapStateDispatchToProps)(CartIcon);