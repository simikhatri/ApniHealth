import React, { useState } from 'react';
import {
    useNavigate
} from 'react-router-dom';
import "./css/signup.css";
import sign from './images/signup.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';


function Signup() {
    const [values, setValues] = useState({
        Username: '',
        Email: '',
        Phone: '',
        password: '',
        cpassword: ''
    })
   
    const [errors, setError] = useState({});
    const navigation = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }


    const collectData = async (e) => {
        e.preventDefault();
        setError(validate(values));
        navigation('/');


             await fetch('http://127.0.0.1:3200/signup',{
              method: 'post',
              body:JSON.stringify({
                "Username": values.Username,
                "Phone": values.Phone, 
                "Email": values.Email,
                "password": values.password
              }),
              headers:{
                'Content-Type':'application/json'
              },
            })
            .then(resp => resp.json())
            .then((result) => {
                console.log(`Username is: ${values.Username} Email: ${values.Email} Password: ${values.password} Phone: ${values.Phone}`);
                console.log(result);
              },
              (error) => {
                console.log(error);
              }
            )
            // .then(resp => resp.json())
            //.then(result=>{
            //     if(resp.data==="exist"){
            //         alert("user already exist")
            //     }
            //     else if(resp.data==="notexist"){
                    
            //     }


            // })

        //     console.warn(result);
        //     localStorage.setItem("user",result);



    }
    function validate(value) {
        const error = {}

        if (!value.Username) {
            error.Username = "*Username is required";
        }

        if (!value.Email) {
            error.Email = "*Email is required";
        }
        if (!value.Phone) {
            error.Phone = "*Phone Number is required"
        }
        if (!value.password) {
            error.password = "*Password is required"
        }
        else if (!value.password.length > 6) {
            error.password = "*Password must be 6 characters or more"
        }
        if (!value.cpassword) {
            error.cpassword = "*Confirm Password is required"
        }
        else if (value.cpassword !== value.password) {
            error.cpassword = "*Password do not match"
        }
        return error;
    }
    // const handleClick = () => {
    //         navigate('/about');

    //   };
    return (
        <>
            <section className="container containeer forms">
                <div className="row">
                    <div className="col-sm-6 logpic">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700"
                            height="1100" src={sign} alt="" />
                    </div>
                    <div className="col-sm-6">
                        <div className="log-form login">
                            <div className="form-content">
                                <header>Signup</header>
                                <form name="myForm" action="POST" onSubmit={collectData}>
                                    <div className="field input-field" id="name">
                                        <input type="text" name="Username" value={values.Username} className="inputs"
                                            onChange={handleChange}
                                            placeholder="Enter Your Name" />
                                        <span className="formerror">{errors.Username}</span>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="phone">
                                        <input type="tel" name="Phone" value={values.Phone} className="inputs"
                                            onChange={handleChange}
                                            placeholder="Enter Your Phone Number" />
                                        <span className="formerror">{errors.Phone}</span>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="email">
                                        <input type="email" name="Email" value={values.Email} className="inputs"
                                            onChange={handleChange}
                                            placeholder="Enter Your Email" />
                                        <span className="formerror">{errors.Email}</span>
                                        {/* <span className="formerror"> </span> */}
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="pass">
                                        <input type="password" name="password" value={values.password} className="password"
                                            onChange={handleChange} placeholder="Password" />
                                        <span className="formerror">{errors.password}</span>
                                        <i className="bx bx-hide eye-icon" ></i>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="cpass">
                                        <input type="password" name="cpassword" className="password" value={values.cpassword}
                                            onChange={handleChange} placeholder="Confirm password" />
                                        <span className="formerror">{errors.cpassword}</span>
                                        {/* <i className="bx bx-hide eye-icon"></i> */}
                                        {/* <FontAwesomeIcon icon="fa-solid fa-eye" />                                */}
                                        <div className="underline"></div>

                                    </div>
                                    <div className="field input-field" id="role">
                                        <label htmlFor="Role">Enter Your Role:</label>
                                        <select name="Role" required>
                                            <option value="">...</option>
                                            <option value="doctor">Doctor</option>
                                            <option value="pharmacy">Pharmacy</option>
                                            <option value="Hospital">Hospital</option>
                                        </select>
                                        <span className="formerror"> </span>
                                    </div>
                                    <div className="field input-box button ">
                                        <input type="submit" name="signup" value="Signup" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
