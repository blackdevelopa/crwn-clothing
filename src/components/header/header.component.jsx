import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"/>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">SHOP</Link>
      <Link to="#" className="option">CONTACT</Link>
    </div>
  </div>
)

export default Header;