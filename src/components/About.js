import React from "react";
import Img1 from './images/story.gif';
import Img2 from './images/Success.gif';
import "./css/about.css";

function About() {
    return (
        <>
            <div id="carouselCaptions" className="carousel slide carousel-fade" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="https://media.istockphoto.com/photos/stack-of-hands-unity-and-teamwork-concept-picture-id1189131883?k=20&m=1189131883&s=612x612&w=0&h=I9DmfWIqvvRZJryXNfgu2zz_09tues9BQjvX5_jmozw="
                            height="500" width="800" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to ApniHealth</h2>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/business-team-joining-hands-together-city-background_53876-104031.jpg?w=2000"
                            height="500" width="800" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to ApniHealth</h2>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/premium-photo/cheerful-people-holding-hands-together-office_23-2147707763.jpg?w=2000"
                            height="500" width="800" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block ">
                            <h2>Welcome to ApniHealth</h2>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container my-4">

                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Our Story</h2>
                        <p className="lead">We are a healthcare startup that started in 2016, a technology that is acting as a
                            bridge between PMC verified doctors, trusted and leading laboratories, and the patients.<br />

                            The basic purpose is to provide better healthcare facilities at your utmost comfort. We offer Lab
                            tests at home, Covid-19 Rapid & PCR Tests at home, PMC verified doctor visits at home, Health
                            Insurance, and Medicine delivery. We have successfully expanded our operations in Islamabad, Pindi,
                            Hyderabad, Lahore, Peshawar, and Multan!.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="600"
                            height="400" src={Img1} alt="" />

                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">OUR MISSION AND VISION.</h2>
                        <p className="lead">The world is moving at its greatest speed in this advanced period, so we must modify our
                            pace to
                            keep up. In today's society, technology has replaced various tools for solving many difficulties,
                            and as a result, everything has become easier for us. The key domain in which we are confronted
                            with many concerns is health. <br />
                            With the technology that we have now, the most essential thing that we need to take care of is
                            our health. Some websites/applications offer health-related material as well as online medical
                            services and information. However, there are still many challenges in the health sector,
                            particularly in the emergency department. <br />
                            To address this, we are developing a health app that will assist people in any emergency
                            circumstance by providing them with information and medical services. This is due to the fact
                            that many individuals utilize mobile phones and the internet. We will give full-time services,
                            medical/pharmacy information, and quick reaction in any emergency case with the help of this
                            health application</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="600"
                            height="600" src={Img2} alt="" />

                    </div>
                </div>
            </div>
            <section id="team" className="team container-fluid py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div>
                            <div className="team-top">
                                <h1 className="heading">OUR TEAM</h1>
                            </div>
                            <div className="underlines"></div>

                            <div className="members">

                                <div className="sm-img card h-100 team-card"
                                    style={{
                                        backgroundColor: 'none',
                                        border: 'none'
                                    }}>
                                    <img src="https://www.shutterstock.com/image-vector/face-expression-woman-smiling-female-260nw-753503635.jpg"
                                        alt="first" className="img" />

                                    <div className="card-body text-center">
                                        <h5 className="card-title">Simran</h5>
                                        <p className="card-text">Web Developer</p>
                                    </div>
                                </div>
                                <div className="sm-img card h-100 team-card"
                                    style={{
                                        backgroundColor: 'none',
                                        border: 'none'
                                    }}>
                                    <img src="https://c8.alamy.com/comp/2E3MM5X/stock-vector-face-expression-of-beautiful-plus-size-woman-cheerful-female-emotion-cute-cartoon-character-in-flat-style-vector-illustration-2E3MM5X.jpg"
                                        alt="second" className="img" />

                                    <div className="card-body text-center">
                                        <h5 className="card-title">Pooja</h5>
                                        <p className="card-text">Web Developer</p>
                                    </div>
                                </div>
                                <div className="sm-img card h-100 team-card"
                                    style={{
                                        backgroundColor: 'none',
                                        border: 'none'
                                    }}>
                                    <img src="https://www.shutterstock.com/image-vector/young-man-face-cartoon-260nw-1224888760.jpg"
                                        alt="first" className="img" />

                                    <div className="card-body text-center">
                                        <h5 className="card-title">Sufyan</h5>
                                        <p className="card-text">Web Developer</p>
                                    </div>
                                </div>
                                <div className="sm-img card h-100 team-card"
                                    style={{
                                        backgroundColor: 'none',
                                        border: 'none'
                                    }}>
                                    <img src="https://c8.alamy.com/comp/T58PKH/face-expression-of-stylish-modern-young-man-calm-male-emotion-handsome-cartoon-character-vector-illustration-isolated-on-white-background-T58PKH.jpg"
                                        alt="first" className="img" />

                                    <div className="card-body text-center">
                                        <h5 className="card-title">Yasir</h5>
                                        <p className="card-text">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;