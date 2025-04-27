import React, { useState } from "react";
import appointmentShape from "../assets/images/appoinment-shape.png";
import toast from "react-hot-toast";

const AppoinmentSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        message: '',
    });

    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('https://formspree.io/f/xovdvyrv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', gender: '', message: '' }); 
                toast.success('Successfully Appointment Submitted!');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
                setStatus('error');
                toast.error('Failed to submit Appointment!');
            }
        } catch (error) {
            setErrorMessage('An unexpected error occurred. Please try again.');
            setStatus('error');
        }
    };
    return (
        <section className="wpo-appoinment-section mt-5">
            <div className="container">
                <div className="appoinment-wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-12 col-12">
                            <div className="appoinment-text">
                                <a href="#" className="appoinment-btn">Appoinment Now</a>
                                <h2>Appoinment
                                    for free online
                                    consultation.</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-12">
                            <div className="appoinment-right">
                                <form method="post" className="contact-validation-active" id="consultancy-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-field col-lg-6">
                                            <input className="form-control-name " type="text" placeholder="Full Name"
                                                name="name" id="name" value={formData.name}
                                                onChange={handleChange} required />
                                        </div>
                                        <div className="form-field col-lg-6">
                                            <input className="form-control-mail" type="email" placeholder="Email"
                                                name="email" id="email" value={formData.email}
                                                onChange={handleChange} />
                                        </div>
                                        <div className="form-field col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input className="form-controls form-control-number " name="phone"
                                                        type="tel" placeholder="Phone No." value={formData.phone}
                                                        onChange={handleChange} required />
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        {/* <div className="form-control-age col-lg-6">
                                                            <select name="age" className="form-control valid" defaultValue={"0"}>
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
                                                        </div> */}
                                                        <div className="form-controls form-control-gender col-lg-12">
                                                            <select name="gender" className="form-control valid" value={formData.gender}
                                                                onChange={handleChange}
                                                                aria-required="true" aria-invalid="false" defaultValue={"Male"}>
                                                                <option value="0" disabled="disabled">Gender
                                                                </option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-controls form-control-choose-department">
                                            <input className="form-control-name " type="text" placeholder="Explain Your Problem"
                                                name="message" id="message" value={formData.message}
                                                onChange={handleChange} required />
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-12">
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
                    <div className="shape-1">
                        <img src={appointmentShape} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppoinmentSection;