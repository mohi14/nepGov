import React from 'react';
import FooterCopy from '../components/shared/FooterCopy';
import Header from '../components/shared/Header';
import Voting from '../components/VoteNow/Voting';

const voteNowPage = () => {
    return (
        <div>
            <Header/>
            <div className='gradient_bg'>
                <Voting/>
                <FooterCopy/>
            </div>
        </div>
    );
};

export default voteNowPage;