import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...customProps }) => (
  <button 
    className={`${inverted ? "inverted" : ''} ${isGoogleSignIn ? "google-sign-in" : ''} custom-button`} {...customProps}>
    {children}
  </button>
)

export default CustomButton;