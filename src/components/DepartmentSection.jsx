import React from "react";
import department01 from "../assets/images/department/1.png";
import department02 from "../assets/images/department/2.png";
import department03 from "../assets/images/department/3.png";
import department04 from "../assets/images/department/4.png";
import department05 from "../assets/images/department/5.png";
import department06 from "../assets/images/department/6.png";
import department07 from "../assets/images/department/7.png";
import department08 from "../assets/images/department/8.png";

const DepartmentSection = () => {
    return (
        <section className="wpo-department-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title">
                            <span>Department & Doctors</span>
                            <h2>Find the best doctor or department
                                for perfect treatment.</h2>
                        </div>
                    </div>
                </div>
                <div className="department-wrap">
                    <form className="departmen-search">
                        <input className="search-doctor" type="text" placeholder="Search by department or doctors" />
                            <button type="submit" className="submit-btn">Search Here</button>
                    </form>
                    <div className="department-doctor-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="department-single">
                                    <div className="department-single-img">
                                        <img src={department01} alt="" />
                                    </div>
                                    <span>Neurology</span>
                                    <a href="department-single.html">
                                        <i className="ti-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="department-single">
                                    <div className="department-single-img">
                                        <img src={department02} alt="" />
                                    </div>
                                    <span>Urology</span>
                                    <a href="department-single.html">
                                        <i className="ti-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="department-single">
                                    <div className="department-single-img">
                                        <img src={department03} alt="" />
                                    </div>
                                    <span>Allergy</span>
                                    <a href="department-single.html">
                                        <i className="ti-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="department-single">
                                    <div className="department-single-img">
                                        <img src={department04} alt="" />
                                    </div>
                                    <span>Gestrology</span>
                                    <a href="department-single.html">
                                        <i className="ti-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="department-single">
                                    <div className="department-single-img">
                                        <img src={department05} alt="" />
                                    </div>
                                    <span>HIV/AIDS</span>
                                    <a href="department-single.html">
                                        <i className="ti-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="department-single">
                                    <div className="department-single-img">
                                        <img src={department06} alt="" />
                                    </div>
                                    <span>Dermatology</span>
                                    <a href="department-single.html">
                                        <i className="ti-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="department-single">
                                    <div className="department-single-img">
                                        <img src={department07} alt="" />
                                    </div>
                                    <span>Otolaryngology</span>
                                    <a href="department-single.html">
                                        <i className="ti-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="department-single">
                                    <div className="department-single-img">
                                        <img src={department08} alt="" />
                                    </div>
                                    <span>Dentisty</span>
                                    <a href="department-single.html">
                                        <i className="ti-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default DepartmentSection;