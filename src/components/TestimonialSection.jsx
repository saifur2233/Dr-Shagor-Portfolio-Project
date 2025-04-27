import React from "react";
import testimonialImg01 from "../assets/images/testimonial/01.jpg";
import testimonialImg02 from "../assets/images/testimonial/02.jpg";
import testimonialImg03 from "../assets/images/testimonial/03.jpg";
import testimonialShape from "../assets/images/testimonial-shape.png";

const TestimonialSection = () => {
    return (
        <section class="wpo-testimonial-section section-padding">
            <div class="testimonial-shape">
                <img src={testimonialShape} alt="" />
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-12">
                        <div class="testimonial-left">
                            <a href="testimonial.html" class="theme-btn">Testimonial</a>
                            <div class="fun-fact-grids clearfix">
                                <div class="grid">
                                    <div class="info">
                                        <h3>
                                            <span class="odometer" data-count="6,000">00</span>
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                        </h3>
                                        <p>Patient’s all around
                                            the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-12">
                        <div class="testimonial-right">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-4 co-12">
                                    <div class="slider-for">
                                        <div class="testimonial-right-img">
                                            <img src={testimonialImg02} alt="" />
                                        </div>
                                        <div class="testimonial-right-img">
                                            <img src={testimonialImg01} alt="" />
                                        </div>
                                        <div class="testimonial-right-img">
                                            <img src={testimonialImg03} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-8 col-12">
                                    <div class="slider-nav">
                                        <div class="testimonial-right-text">
                                            <p>Lorem Ipsum is simply dummy text the printing
                                                typesetting industry has been the industry standard
                                                text ever since the 1500s , when an unknown printer
                                                book survived five centuries.</p>
                                            <a href="testimonial.html">
                                                <h2>Allan Roberson</h2>
                                            </a>
                                            <span>Medicine Doctor</span>
                                        </div>
                                        <div class="testimonial-right-text">
                                            <p>Lorem Ipsum is simply dummy text the printing
                                                typesetting industry has been the industry standard
                                                text ever since the 1500s , when an unknown printer
                                                book survived five centuries.</p>
                                            <a href="testimonial.html">
                                                <h2>PK Halder</h2>
                                            </a>
                                            <span>Pathologists Doctor</span>
                                        </div>
                                        <div class="testimonial-right-text">
                                            <p>Lorem Ipsum is simply dummy text the printing
                                                typesetting industry has been the industry standard
                                                text ever since the 1500s , when an unknown printer
                                                book survived five centuries.</p>
                                            <a href="testimonial.html">
                                                <h2>Jon Dov</h2>
                                            </a>
                                            <span>Gastroenterology Doctor</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;