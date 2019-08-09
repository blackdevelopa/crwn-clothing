import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'; 
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"/>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">SHOP</Link>
      <Link to="" className="option">CONTACT</Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link to="/auth" className="option">SIGN IN</Link> 
      }
    </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);