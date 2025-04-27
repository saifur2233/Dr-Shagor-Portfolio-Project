import React from 'react';
import aboutImg from '../assets/images/about.jpg';
import atSingleImage from '../assets/images/at-single.jpg';
import certificatesImg1 from '../assets/images/certificates/1.jpg';
import certificatesImg2 from '../assets/images/certificates/2.jpg';
import certificatesImg3 from '../assets/images/certificates/3.jpg';
import certificatesImg4 from '../assets/images/certificates/4.jpg';

const About = () => {
    return (
        <div>
            <section className="wpo-page-title">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="wpo-breadcumb-wrap">
                                <h2>About Us</h2>
                                <ol className="wpo-breadcumb-wrap">
                                    <li><a href="/">Home</a></li>
                                    <li>About</li>
                                </ol>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            <div className="team-pg-area section-padding">
                <div className="container">
                    <div className="team-info-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="team-info-img">
                                    <img src={atSingleImage} alt="Doctor Profile Image" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team-info-text">
                                    <h2>Dr. Shagor Hosen</h2>
                                    <ul>
                                        <li>Specialty: <span>Leading Gynecologist</span></li>
                                        <li>Experience:<span>10 Years</span></li>
                                        <li>Length of Work:<span>Since 2007</span></li>
                                        <li>Phone:<span>+00 568 746 987</span></li>
                                        <li>Email:<span>youremail@gmail.com</span></li>
                                        <li><a className="theme-btn" href="/appointment">Make an appointment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2>About Dr. Shagor Hosen</h2>
                                    <p>The purpose of lorem ipsum is to create a natural looking block oftext (sentence,
                                        paragraph, page, etc.) that doesn't distract from thelayout. A practice not without
                                        controversy, laying out pages withmeaningless filler text can be very useful when
                                        the focus is meantto be on design, not content.There are many variations of passages
                                        of Lorem Ipsum available.</p>
                                    <p>But the majority have suffered alteration in some form, by injected humour, or
                                        randomised words which don’t look even slightly believable. If you are going to use
                                        a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing
                                        hidden in the middle of text generators on the Internet tend to repeat.</p>
                                    <div className="at-progress">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                                <div className="progress yellow">
                                                    <span className="progress-left">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <div className="progress-value">25+</div>
                                                    <div className="progress-name"><span>Awards Winning</span></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                                <div className="progress blue">
                                                    <span className="progress-left">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <div className="progress-value">1200+</div>
                                                    <div className="progress-name"><span>Happy Patient</span></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                                <div className="progress pink">
                                                    <span className="progress-left">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <div className="progress-value">400+</div>
                                                    <div className="progress-name"><span>Surgery Done</span></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                                <div className="progress green">
                                                    <span className="progress-left">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <div className="progress-value">10+</div>
                                                    <div className="progress-name"><span>Year Experience</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="education-area ex-wiget">
                                    <h2>Specialisation</h2>
                                    <ul>
                                        <li>Gynecologist All Surgeon</li>
                                        <li>Performing breast examinations</li>
                                        <li>Prescribing suitable medications</li>
                                        <li>Identifying malignant tumors within the female reproductive system.</li>
                                    </ul>
                                </div>
                                <div className="language-area ex-wiget">
                                    <h2>Language</h2>
                                    <ul>
                                        <li>French(fluent), English (fluent), Greek , chinese.</li>
                                    </ul>
                                </div>
                                <div className="wpo-contact-area ex-wiget certificate">
                                    <h2>Certificates</h2>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="certificate-img">
                                                <div className="img-holder">
                                                    <a href={certificatesImg1} className="fancybox"
                                                        data-fancybox-group="gall-1">
                                                        <img src={certificatesImg1} alt="Certificate 01"
                                                            className="img img-responsive" />
                                                            <div className="hover-content">
                                                                <i className="ti-plus"></i>
                                                            </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="certificate-img">
                                                <div className="img-holder">
                                                    <a href={certificatesImg2} className="fancybox"
                                                        data-fancybox-group="gall-1">
                                                        <img src={certificatesImg2} alt="Certificate 02"
                                                            className="img img-responsive" />
                                                            <div className="hover-content">
                                                                <i className="ti-plus"></i>
                                                            </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="certificate-img">
                                                <div className="img-holder">
                                                    <a href={certificatesImg3} className="fancybox"
                                                        data-fancybox-group="gall-1">
                                                        <img src={certificatesImg3} alt="Certificate 03"
                                                            className="img img-responsive" />
                                                            <div className="hover-content">
                                                                <i className="ti-plus"></i>
                                                            </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="certificate-img">
                                                <div className="img-holder">
                                                    <a href={certificatesImg4} className="fancybox"
                                                        data-fancybox-group="gall-1">
                                                        <img src={certificatesImg4} alt="Certificate 04"
                                                            className="img img-responsive" />
                                                            <div className="hover-content">
                                                                <i className="ti-plus"></i>
                                                            </div>
                                                    </a>
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

            <section className="wpo-about-section section-padding mb-5">
                <div className="container pb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-wrap">
                                <div className="wpo-about-img">
                                    <img src={aboutImg} alt="" />
                                </div>
                                <div className="wpo-about-exprience">
                                    <div className="tp-fun-fact-grids clearfix">
                                        <div className="grid">
                                            <div className="info">
                                                <h3>
                                                    <span className="odometer" data-count="229">00</span>+
                                                </h3>
                                                <p>Doctor’s</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <span> About Us </span>
                                <h2>We are trusted The Best Certificate Healthcare. </h2>
                                <ul>
                                    <li>Scientific Skills For getting a better result</li>
                                    <li>Communication Skills to getting in touch</li>
                                    <li>A Career Overview opportunity Available</li>
                                </ul>
                                <a className="theme-btn" href="/about">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;