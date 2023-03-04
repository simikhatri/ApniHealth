import React from "react";
import doctor from './images/Doctors.png';
import Pharma from './images/Pharma.png';
import Hospi from './images/Hospi.png';
import Teamgoal from './images/Teamgoals.png';
import { Link   } from 'react-router-dom';

import "./css/style.css";


function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/medical-stethoscope-with-paper-cut-family_23-2148488217.jpg?w=2000"
                            height="550" width="1000" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to ApniHealth</h2>
                            <p className="para1">advancing everybody's future to one that is better and healthier</p>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://thumbs.dreamstime.com/b/medicine-doctor-holding-red-heart-shape-hand-medical-icon-network-connection-modern-virtual-screen-interface-service-mind-99681240.jpg"
                            height="550" width="1000" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to ApniHealth</h2>
                            <p className="para1">advancing everybody's future to one that is better and healthier</p>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.japantimes.co.jp/wp-content/uploads/2019/05/n-yenforliving-a-20190510.jpg"
                            height="550" width="1000" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block ">
                            <h2>Welcome to ApniHealth</h2>
                            <p className="para1">advancing everybody's future to one that is better and healthier</p>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <section className="our-services py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="center-heading-box">
                                <h1 className="bottom_border_heading">OUR SERVICES</h1>
                            </div>

                        </div>
                    </div>
                    <div className="underlines"></div>
                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 my-4 my-sm-5">
                            <Link   className="text-decoration-none" to="/">
                                <div className="theme-card primary-shadow  service1">
                                    <div className="theme-card-image">
                                    <img className="theme-card-3" height="200" width="300" src={doctor} alt="" />
                                    </div>
                                    <div className="theme-card-description">
                                        <div className="theme-card-description-inner ">
                                            <h5 className="">FIND A DOCTOR</h5>
                                            <p>I need to Find A Doctor.</p>
                                        </div>
                                        <Link to="Doctor"><button className="btn">SEARCH
                                            NOW</button></Link>
                                    </div>
                                </div>
                            </Link  >
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 my-4 my-sm-5">
                            <Link className="text-decoration-none" to="Pharmacy">
                                <div className="theme-card primary-shadow service1">
                                    <div className="theme-card-image">
                                    <img className="theme-card-3" height="200" width="300" src={Pharma} alt="" />
                                    </div>
                                    <div className="theme-card-description theme-card-margin">
                                        <div className="theme-card-description-inner">
                                            <h5>PHARMACY</h5>
                                            <p>Search A Pharmacy.</p>
                                        </div>
                                        <Link to="Pharmacy"><button className="btn">SEARCH
                                            NOW</button></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 my-4 my-sm-5">
                            <Link className="text-decoration-none" to="Doctor">
                                <div className="theme-card primary-shadow service1">
                                    <div className="theme-card-image">
                                        <img className="theme-card-3" height="200" width="300" src={Hospi} alt="" />
                                    </div>
                                    <div className="theme-card-description theme-card-margin">
                                        <div className="theme-card-description-inner">
                                            <h5>HOSPITAL</h5>
                                            <p>Search A Hospital</p>
                                        </div>
                                        <Link to="Hospital"><button className="btn">SEARCH
                                            NOW</button></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container my-4">
        <div class="row">
            <div class="col-12 text-center">
                <div class="center-heading-box">
                    <h1 class="bottom_border_heading">WHO WE ARE</h1>
                </div>

            </div>
        </div>
        <div class="underlines"></div>
        <div class="row featurette d-flex justify-content-center align-items-center team-goals">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading fw-normal lh-1">Advancing everybody's future to one that is better and
                    healthier.</h2>
                <p class="lead">Our primary goal is to offer superior medical facilities for your maximum comfort. We
                    want healthcare to be dependable, trustworthy, and practical.<br/> Healthcare is Link   crucial industry
                    everywhere in the world, but Pakistan has tragically lagged behind throughout time. Additionally, it
                    is among the biggest and fastest-growing global industries. We are here to change the world and
                    flourish in ways that hopefully benefit not only ourselves but also all future generations.
                <br/>In this modern world, technology has become Link   replacement of some tools for 
                solving many problems, as it arise everything has been easy for us. Health is the main domain 
                in which we are facing different issues.<br/>
                To resolve this, this health application can help people in any 
                emergency situation, providing them information & medical services. This is because many 
                people are mobile & internet users. With the help of this health application we’ll provide full 
                time services, medical/pharmacy information, and quick response in any emergency situation </p>
            </div>
            <div class="col-md-5">
                <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="600"
                    height="600" src={Teamgoal} alt=""/>

            </div>
        </div>
    </div>
        </>
    );
}

export default Home;