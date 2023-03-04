import React from "react";
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg  navbar-light">
            <div className="container-fluid">
                <img src={logo} className="nav-logo" alt="logo"/>
                <Link className="navbar-brand" to="/">ApniHealth</Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className=" fa-duotone fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact Us</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/Signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;