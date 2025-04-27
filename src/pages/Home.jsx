import React from 'react';
import HeroSection from '../components/HeroSection';
import PartnerSection from '../components/PartnerSection';
import DepartmentSection from '../components/DepartmentSection';
import ServiceSection from '../components/ServiceSection';
import TeamSection from '../components/TeamSection';
import AppoinmentSection from '../components/AppoinmentSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <PartnerSection />
            <AppoinmentSection />
            <ServiceSection />
            <DepartmentSection />
            <TeamSection />
            {/* <TestimonialSection /> */}
            {/* <BlogSection /> */}
        </>
    );
};

export default Home;