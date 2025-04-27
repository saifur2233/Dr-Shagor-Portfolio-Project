import React from "react";

const PartnerSection = () => {
    return (
        <section className="wpo-partners-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider owl-carousel">
                            <div className="grid">
                                <h2>DOCTOR<i className="ti-star"></i></h2>
                            </div>
                            <div className="grid">
                                <h2>TRETHMENT<i className="ti-star"></i></h2>
                            </div>
                            <div className="grid">
                                <h2>PATIENT<i className="ti-star"></i></h2>
                            </div>
                            <div className="grid">
                                <h2>HOSPITAL<i className="ti-star"></i></h2>
                            </div>
                            <div className="grid">
                                <h2>MEDICINE<i className="ti-star"></i></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;