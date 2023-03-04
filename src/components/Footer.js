import React from 'react';
import { Link } from 'react-router-dom';
export default function footer() {
    return (
        <>
        <div className="footer-top section">
        <div className="containerr">
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-5">
                    <div className="single-footer links">
                        <h4 className="mb-4"><span className="text-underline">OUR</span>  SERVICES</h4>
                        <ul>
                            <li><Link to="#">Find Link Doctor</Link></li>
                            <li><Link to="#">Find Link Pharmacy</Link></li>
                            <li><Link to="#">Find Link Hospital</Link></li>
                            <li><Link to="#">Call for Embulance </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-5">
                    <div className="single-footer links">
                        <h4 className="mb-4"><span className="text-underline">QUIC</span>K LINKS</h4>
                        <ul>
                            <li><Link to="/"> Home</Link></li>
                            <li><Link to="/about"> About Us</Link></li>
                            <li><Link to="contact.html"> Contact Us</Link></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="copyright-footer">
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="text-center">
                            <p className="mb-0">Copyright © 2022 <Link className="text-white " to="/"
                                target="_blank"><strong> ApniHealth.pk</strong></Link> - All
                                Rights Reserved.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
