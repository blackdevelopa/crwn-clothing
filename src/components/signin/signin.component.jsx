import React, {Component } from 'react';
import './signin.styles.scss';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: ''})
    } catch(error) {
      console.log("error", error)
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[ name ]: value})
  }

  render() {
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type="email" 
            value={this.state.email} 
            handleChange={this.handleChange} 
            label="email"
            required />
          <FormInput 
            name='password' 
            type="password" 
            value={this.state.password}
            label="password"
            handleChange={this.handleChange} 
            required />
            <div className="buttons">
              <CustomButton type="submit"> Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Google</CustomButton>
            </div>
        </form>
      </div>
    )
  }
}

export default SignIn;