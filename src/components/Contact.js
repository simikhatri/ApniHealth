import React from 'react';
import './css/contact.css';
import contact from './images/Contact.png'

function Contact() {
    return (
        <>
            <section className="container containeer forms">
                <div className="row content">
                    <div className="col-sm-6 logpic">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700"
                            height="1100" src={contact} alt="" />
                    </div>
                    <div className="col-sm-6">
                        <div className="log-form login">
                            <div className="form-content">
                                <header>Contact Us</header>
                                <form action="/Sign-Up" name="myForm" onsubmit="return validateForm()" method="post">
                                    <div className="field input-field" id="name">
                                        <input type="text" name="fname" className="inputs" maxlength="30" placeholder="Enter Your Name"
                                            required /><span className="formerror"> </span>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="cnic">
                                        <input type="text" name="fcnic" className="inputs" pattern="^[0-9]{5}-[0-9]{7}-[0-9]{1}$"
                                            placeholder="CNIC Number" required /><span className="formerror"> </span>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="email">
                                        <input type="email" name="femail" className="inputs" maxlength="30" placeholder="Enter Your Email"
                                            required/><span className="formerror" > </span>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="email">
                                        <input type="tel" name="PhoneNo" className="inputs" maxlength="11" placeholder="Enter Your Phone Number"
                                            required /><span className="formerror"> </span>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="email" >
                                        <textarea name="para" cols="55" rows="5" className="input" placeholder="Enter Your Comments..."></textarea> <span className="formerror"> </span>
                                    </div>

                            <div className="field input-box button ">
                                <input type="submit" name="Send" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
   
  </section >
    </>
  )
}

export default Contact
