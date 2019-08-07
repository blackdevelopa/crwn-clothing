import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...customProps }) => (
  <button 
    className={`${isGoogleSignIn ? "google-sign-in" : ''} custom-button`} {...customProps}>
    {children}
  </button>
)

export default CustomButton;