import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import './App.css'
// Import CSS files
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-datetimepicker.min.css';
import './assets/css/themify-icons.css';
import './assets/css/flaticon.css';
import './assets/css/font-awesome.min.css';
import './assets/css/animate.css';
import './assets/css/owl.carousel.css';
import './assets/css/owl.theme.css';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/swiper.min.css';
import './assets/css/owl.transitions.css';
import './assets/css/jquery.fancybox.css';
import './assets/css/odometer-theme-default.css';
import './assets/sass/style.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Appointment from './pages/Appointment';
import Preloader from './components/Preloader';
import Service from './pages/Service';

function App() {
    return (
        <Router>
            <div className="page-wrapper">
                <Preloader />
                <Toaster></Toaster>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/appointment" element={<Appointment />} />
                    {/* Add other routes */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;