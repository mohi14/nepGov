import Image from 'next/image';
import React from 'react';
import chart from '../../public/landing/chart.png'

const ApprovalChart = () => {
    return (
        <div  className="govt__box">
             <span>POLITICS</span>
                <h4>Government Approval</h4>
                <div className="approbe__box flex justify-between items-center">
                    <span>Approve</span>
                    <span>Disapprove</span>
                </div>
                <Image src={chart} alt="chart"/>
        </div>
    );
};

export default ApprovalChart;