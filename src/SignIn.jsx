import React from 'react'
import './SignIn.css'
import Join from './Join'
import { Link} from 'react-router-dom';
function SignIn() {
    return (
        <div className='signIn'>
            <a href="/" >
                <img src="./Linkedin-logo-png.png" alt="" />
            </a>
            <div className="sign__in">
                <h1>Sign in</h1>
                <p className='stay'>Stay updated on your professional world</p>
                <div className="input__field">
                    <input type="text" placeholder='Email or Phone' className='email' />
                </div>
                <div className="input__field">
                    <input type="password" placeholder='Password' />
                </div>
                <p className='forgot_pass'>Forgot password?</p>

                <button className='sbtn'>Sign in</button>
                <div className='section'>
                    <p className='or'>or</p>
                </div>
                <div className="signin__btn">
                    <button className="signin__btn"><img src="./google.png" alt="" /> Sign in with Google</button>
                </div>


            </div>
            <p>New to LinkedIn? <Link to={"signIn/join"} className="join_link">Join</Link></p>
            
        </div>
    )
}

export default SignIn
