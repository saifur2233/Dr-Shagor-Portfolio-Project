import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
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
                const response = await fetch('https://formspree.io/f/mdkgkyvb', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
    
                if (response.ok) {
                    setStatus('success');
                    setFormData({ name: '', email: '', phone: '', message: '' }); 
                    toast.success('Successfully Message Sended!');
                } else {
                    const errorData = await response.json();
                    setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
                    setStatus('error');
                    toast.error('Failed to Sended Message!');
                }
            } catch (error) {
                setErrorMessage('An unexpected error occurred. Please try again.');
                setStatus('error');
            }
        };
    return (
        <div>
            <section className="wpo-page-title">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="wpo-breadcumb-wrap">
                                <h2>Contact Us</h2>
                                <ol className="wpo-breadcumb-wrap">
                                    <li><a href="/">Home</a></li>
                                    <li>Contact</li>
                                </ol>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            <section className="wpo-contact-pg-section section-padding mb-5 pb-5">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1">
                            <div className="office-info">
                                <div className="row">
                                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-icon">
                                                <div className="icon">
                                                    <i className="fi flaticon-placeholder"></i>
                                                </div>
                                            </div>
                                            <div className="office-info-text">
                                                <h2>Address</h2>
                                                <p>7 Green Lake Street Crawfordsville, IN 47933</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-icon">
                                                <div className="icon">
                                                    <i className="fi flaticon-email"></i>
                                                </div>
                                            </div>
                                            <div className="office-info-text">
                                                <h2>Email Us</h2>
                                                <p>Dotus@gmail.com</p>
                                                <p>helloyou@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-icon">
                                                <div className="icon">
                                                    <i className="fi flaticon-phone-call"></i>
                                                </div>
                                            </div>
                                            <div className="office-info-text">
                                                <h2>Call Now</h2>
                                                <p>+1 800 123 456 789</p>
                                                <p>+1 800 123 654 987</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-contact-title">
                                <h2>Have Any Question?</h2>
                                <p>It is a long established fact that a reader will be distracted
                                    content of a page when looking.</p>
                            </div>
                            <div className="wpo-contact-form-area">
                                <form method="post" className="contact-validation-active" id="contact-form-main" onSubmit={handleSubmit}>
                                    <div>
                                        <input type="text" className="form-control" name="name" id="name" value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name*" required />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" name="email" id="email"
                                            placeholder="Your Email*" value={formData.email}
                                            onChange={handleChange} required />
                                    </div>
                                    <div className="fullwidth">
                                        <input type="text" className="form-control" name="phone" id="phone"
                                            placeholder="Phone" value={formData.phone}
                                            onChange={handleChange} required />
                                    </div>
                                    
                                    <div className="fullwidth">
                                        <textarea className="form-control" name="message" id="message" value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Message..." required></textarea>
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn-s4">Get in Touch</button>
                                        <div id="loader">
                                            <i className="ti-reload"></i>
                                        </div>
                                    </div>
                                    <div className="clearfix error-handling-messages">
                                        <div id="success">Thank you</div>
                                        <div id="error"> Error occurred while sending email. Please try again later. </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>

            <section className="wpo-contact-map-section mt-5">
                <h2 className="hidden">Contact map</h2>
                <div className="wpo-contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                        allowFullScreen></iframe>
                </div>
            </section>


        </div>
    );
}

export default Contact;