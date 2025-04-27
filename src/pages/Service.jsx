import React from "react";
import ServiceImg01 from "../assets/images/service-single/1.jpg";
import ServiceImg02 from "../assets/images/service-single/2.jpg";
import ServiceImg03 from "../assets/images/service-single/3.jpg";
import TeamImg01 from "../assets/images/team/01.jpg";
import TeamImg02 from "../assets/images/team/02.jpg";
import TeamImg03 from "../assets/images/team/03.jpg";
const Service = () => {
    return (
        <div>
            <section className="wpo-page-title">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="wpo-breadcumb-wrap">
                                <h2>Service</h2>
                                <ol className="wpo-breadcumb-wrap">
                                    <li><a href="/">Home</a></li>
                                    <li>Service</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="wpo-service-single-area section-padding pb-5 mb-5">
                <div className="container pb-5 mb-5">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={ServiceImg01} alt="" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>Dentisty</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet
                                        tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus
                                        velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                        quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                        sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur
                                        amet risus bibendum. Posuere et eget orci, tempor enim.</p>
                                    <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio
                                        facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at
                                        rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={ServiceImg02} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={ServiceImg03} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-dec">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="wpo-service-single-item list-widget">
                                                <div className="wpo-service-single-title">
                                                    <h3>Our Capabilities</h3>
                                                </div>
                                                <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                                    quam. Id
                                                    risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet
                                                    duis
                                                    sollicitudin diam.</p>
                                                <ul>
                                                    <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                    <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                    <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                    <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                    <li>Elit curabitur amet risus bibendum.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="wpo-service-single-item list-widget">
                                                <div className="wpo-service-single-title">
                                                    <h3>Our Work Process</h3>
                                                </div>
                                                <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                                    quam. Id
                                                    risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet
                                                    duis
                                                    sollicitudin diam.</p>
                                                <ul>
                                                    <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                    <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                    <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                    <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                    <li>Elit curabitur amet risus bibendum.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-team-section-s2 Specialist dentist">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Dentist Specialist</h3>
                                    </div>
                                    <div className="team-wrap">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                <div className="team-single">
                                                    <div className="team-boder-shapes-1">
                                                        <div className="team-single-img">
                                                            <img src={TeamImg01} alt="" />
                                                        </div>
                                                        <div className="team-single-text">
                                                            <h2><a href="team-single.html">Dr. Belinda Walters</a></h2>
                                                            <span>Dentist</span>
                                                            <p>Appointment price: $50</p>
                                                            <a className="theme-btn" href="/appointment">Make an appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                <div className="team-single">
                                                    <div className="team-boder-shapes-1">
                                                        <div className="team-single-img">
                                                            <img src={TeamImg02} alt="" />
                                                        </div>
                                                        <div className="team-single-text">
                                                            <h2><a href="team-single.html">Dr. Allison Katrina</a></h2>
                                                            <span>Dentist</span>
                                                            <p>Appointment price: $80</p>
                                                            <a className="theme-btn" href="appoinment.html">Make an appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                                <div className="team-single">
                                                    <div className="team-boder-shapes-1">
                                                        <div className="team-single-img">
                                                            <img src={TeamImg03} alt="" />
                                                        </div>
                                                        <div className="team-single-text">
                                                            <h2><a href="team-single.html">Dr. Raquel Riley</a></h2>
                                                            <span>Dentist</span>
                                                            <p>Appointment price: $30</p>
                                                            <a className="theme-btn" href="appoinment.html">Make an appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;