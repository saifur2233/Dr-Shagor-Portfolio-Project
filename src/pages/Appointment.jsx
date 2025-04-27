import React from 'react';

const Appointment = () => {
    return (
        <div>
            <section className="wpo-page-title">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="wpo-breadcumb-wrap">
                                <h2>Appointment</h2>
                                <ol className="wpo-breadcumb-wrap">
                                    <li><a href="/">Home</a></li>
                                    <li>Appointment</li>
                                </ol>
                            </div>
                        </div>
                    </div> 
                </div> 
            </section>

            <section className="wpo-appoinment-section-s2 section-padding mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="appoinment-wrap">
                                <div className="appoinment-right">
                                    <form method="post" className="contact-validation-active" id="consultancy-form">
                                        <div className="row">
                                            <div className="form-field col-lg-12">
                                                <div className="date">
                                                    <label htmlFor="date"><i className="ti-calendar"></i></label>
                                                    <input id="date" type="text" value="2021-04-16 14:45" className="datepicker form-control-name" />
                                                </div>
                                            </div>
                                            <div className="form-field col-lg-6">
                                                <input className="form-control-name" type="text" placeholder="Full Name"
                                                    name="name" id="name" />
                                            </div>
                                            <div className="form-field col-lg-6">
                                                <input className="form-control-mail" type="email" placeholder="Email"
                                                    name="email" id="email" />
                                            </div>
                                            <div className="form-field col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <input className="form-controls form-control-number " name="phone"
                                                            type="text" placeholder="Phone No." />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="form-control-age col-lg-6">
                                                                <select name="age" className="form-control valid" defaultValue={"22"}>
                                                                    <option value="0" disabled="disabled">Age
                                                                    </option>
                                                                    <option value="1">22</option>
                                                                    <option value="2">23</option>
                                                                    <option value="3">24</option>
                                                                    <option value="4">25</option>
                                                                    <option value="5">26</option>
                                                                    <option value="6">27</option>
                                                                    <option value="7">28</option>
                                                                    <option value="8">29</option>
                                                                    <option value="9">30</option>
                                                                    <option value="10">31</option>
                                                                    <option value="11">32</option>
                                                                    <option value="12">33</option>
                                                                </select>
                                                            </div>

                                                            <div className="form-controls form-control-gender col-lg-6">
                                                                <select name="gender" className="form-control valid"
                                                                    aria-required="true" aria-invalid="false" defaultValue={"Male"}>
                                                                    <option value="0" disabled="disabled">Gender
                                                                    </option>
                                                                    <option value="1">Male</option>
                                                                    <option value="2">Female</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-field col-lg-12 col-12">
                                                <textarea className="form-control" name="note" id="note" placeholder="Message..."></textarea>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="submit-area">
                                                    <button type="submit" className="theme-btn">Book Appoinment</button>
                                                    <div id="loader">
                                                        <i className="ti-reload"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix error-handling-messages">
                                                <div id="success">Thank you</div>
                                                <div id="error"> Error occurred while sending email. Please try again later.
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;