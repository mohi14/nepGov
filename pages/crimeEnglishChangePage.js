import React from 'react';
import EnglishChange from '../components/CrimeReport/EnglishChange';
import Header from '../components/shared/Header';
import SubFooter from '../components/shared/SubFooter';

const crimeEnglishChangePage = () => {
    return (
        <div className='gradient_bg '>
            {/* <Header/> */}
            <EnglishChange/>
            <SubFooter/>
        </div>
    );
};

export default crimeEnglishChangePage;