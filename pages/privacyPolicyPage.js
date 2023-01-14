import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import PrivacyPolicy from '../components/TermsAndCondition/PrivacyPolicy';

const privacyPolicyPage = () => {
    return (
        <div>
             <Header/>
            <PrivacyPolicy/>
            <Footer/>
        </div>
    );
};

export default privacyPolicyPage;