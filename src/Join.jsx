import React from 'react'
import './Join.css'
import {Link} from 'react-router-dom'
function Join() {
  return (
    <div className='joinIn'>
      <a href="/">
        <img src="./Linkedin-logo-png.png" alt="" />
      </a>
      <h3>Make the most of your professional life</h3>
      <div className="Join_container">
        <div className="email_join">
          <p>Email</p>
          <input type="text" />
        </div>

        <div className="password_join">
          <p>Password (6 0r more characters)</p>
          <input type="password" />
        </div>

        <div className="policy">
          <p>By clicking Agree & Join, you agree to the LinkedIn <span>User <br /> Agreement, Privacy Policy,</span> and <span> Cookie Policy. </span></p>
        </div>

        <button className='join_btn'>Agree & Join</button>
        <div className='section'>
          <p className='join_or'>or</p>
        </div>
        <div className="joinin__btn">
          <button className="joinin__btn"><img src="./google.png" alt="" /> Continue with Google</button>
          <p className='already_join'>Already on LinkedIn? <Link to={"signIn"} className="sign__btn">Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Join
