import React from 'react'
import './Login.css';
import SignIn from './SignIn';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import { signInAPI } from './actions';
function Login(props) {
  return (
    <div className="login__container">
    <div className='login'>
      <div className="login__left">
        <a href="/">
        <img src="./Linkedin-logo-png.png" alt="" />
        </a>
      </div>

      <div className="login__right">
              <button className="joinBtn"><Link to={"join"} style={{textDecoration: "none"}}>Join now</Link></button> 
              <button className="SignInBtn"><Link to={"signIn"} style={{textDecoration: "none"}}>Signin</Link> </button>
      </div>
      </div>
      <div className="login_area">
        <div className="section_A">
          <h1>
            Welcome to your professional community
          </h1>

          <div className="input__area">
            <div className="login__email">
            <input type="text" placeholder='Email or phone number'/>
            </div>
            <div className="login__pswd">
            <input type="password" placeholder='Password' />
            </div>
            <p className='login__forgot'>Forgot password?</p>
            <button className='login__signIn'>Sign in</button>
            <p className='login__or'>or</p>
            <button className='google_signin' onClick={() =>props.signIn()}><img src="./google.png" alt="" />  Sign in with Google</button>
          </div>

        </div>

        <div className="section_B">
          <img src="./login_img.png" alt="" />
        </div>
      </div>
    
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {};
};

const mapDispatchToProps = (dispatch) =>({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

