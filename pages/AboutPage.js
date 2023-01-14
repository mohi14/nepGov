import React from 'react';
import About from '../components/About/About';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const AboutPage = () => {
    return (
        <div>
            <Header/>
           <About/> 
           <Footer/>
        </div>
    );
};

export default AboutPage;