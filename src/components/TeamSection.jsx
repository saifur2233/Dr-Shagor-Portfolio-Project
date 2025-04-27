import React from "react";
import TeamImg01 from "../assets/images/team/01.jpg";
import TeamImg02 from "../assets/images/team/02.jpg";
import TeamImg03 from "../assets/images/team/03.jpg";

const TeamSection = () => {
    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title">
                            <span>Meet Great Doctor’s</span>
                            <h2>High qualified doctor’s</h2>
                        </div>
                    </div>
                </div>
                <div className="team-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="team-single">
                                <div className="team-boder-shapes-1">
                                    <div className="team-single-img">
                                        <img src={TeamImg01} alt="" />
                                    </div>
                                    <div className="team-single-text">
                                        <h2><a href="team-single.html">Dr. Belinda Walters</a></h2>
                                        <span>Cancer Specialist</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="team-single">
                                <div className="team-boder-shapes-1">
                                    <div className="team-single-img">
                                        <img src={TeamImg02} alt="" />
                                    </div>
                                    <div className="team-single-text">
                                        <h2><a href="team-single.html">Dr. Allison Katrina</a></h2>
                                        <span>Cosmetic Surgeon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="team-single">
                                <div className="team-boder-shapes-1">
                                    <div className="team-single-img">
                                        <img src={TeamImg03} alt="" />
                                    </div>
                                    <div className="team-single-text">
                                        <h2><a href="team-single.html">Dr. Raquel Riley</a></h2>
                                        <span>Restorative Dentist</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-all">
                        <a href="team.html" className="theme-btn">All Doctor’s</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;