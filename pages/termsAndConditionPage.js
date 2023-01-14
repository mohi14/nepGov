import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import TermsCondition from '../components/TermsAndCondition/TermsCondition';

const termsAndConditionPage = () => {
    return (
        <div>
            <Header/>
            <TermsCondition/>
            <Footer/>
        </div>
    );
};

export default termsAndConditionPage;