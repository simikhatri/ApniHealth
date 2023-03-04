// import React, { useState } from 'react';
import log from './images/login.png';
import "./css/signup.css";
import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';


function login() {

    // const [email, setEmail]=useState('');
    // const [password, setPassword]=useState('');

    // async function submit(e){
    //     e.preventDefault();
    // }

  return (
   <>
    <section className="container containeer forms">
        <div className="row">
            <div className="col-sm-6 logpic">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700"
                    height="1100" src={log} alt=""/>
            </div>
            <div className="col-sm-6">
                <div className="log-form login">
                    <div className="form-content">
                        <header>Login</header>
                        <form action="/login" name="myForm"  method="post">
                            
                            <div className="field input-field" id="email">
                                <input type="email" name="femail" className="inputs" maxlength="30"
                                    placeholder="Enter Your Email" required/><span className="formerror"> </span>
                                <div className="underline"></div>
                            </div>
                            <div className="field input-field" id="pass">
                                <input type="password" name="fpass" className="password" maxlength="30" placeholder="password"/><span
                                    className="formerror"> </span>
                                <i className="bx bx-hide eye-icon"></i>
                                <div className="underline"></div>
        
                            </div>
                            <div className="form-link">
                                <a href="/" className="forgot-pass">Forgot password?</a>
                            </div>
                            <div className="field input-box button ">
                                <input type="submit" name="Login" value="Login"/>
                            </div>
                            <Link to="/Signup">SignUp</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>/
    </section>
   </>
  )
}

export default login
