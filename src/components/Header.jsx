import React, { useState } from "react";
import logoImg from "../assets/images/dr shagor.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header id="header">
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <button type="button" className="navbar-toggler open-btn" onClick={toggleMenu}>
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar first-angle"></span>
                                        <span className="icon-bar middle-angle"></span>
                                        <span className="icon-bar last-angle"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="/">
                                        <img src={logoImg} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className={`col-lg-6 col-md-1 col-1 ${isMenuOpen ? 'menu-open' : ''}`}>
                                <div id="navbar" className={`collapse navbar-collapse navigation-holder ${isMenuOpen ? 'show' : ''}`}>
                                    <button className="menu-close" onClick={toggleMenu}><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/service">Service</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <a className="theme-btn" href="/appointment">Book Now</a>
                                    </div>
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button className="search-toggle-btn"><i className="fi flaticon-loupe"></i></button>
                                            <div className="header-search-form">
                                                <form>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                            <button type="submit"><i className="fi flaticon-loupe"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;