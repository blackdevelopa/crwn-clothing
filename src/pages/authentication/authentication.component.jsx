import React from 'react';
import "./authentication.styles.scss";
import SignIn from '../../components/signin/signin.component';
import SignUp from "../../components/signup/signup.component";

const Authentication = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);

export default Authentication;