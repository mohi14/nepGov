import React from 'react';
import TrackBtn from './TrackBtn';

const LiveTrackers = () => {
    const liverreport = [
        {
            tops  : {
                    left : "DAILY QUESTION",
                    right:"Live"}
                ,
            head : "Will advice to drink less change how much alcohol you drink this Christmas? Plus, present wrapping, and Christmas pudding",
            foot : "Vote Now"
        },
        {
            tops  : {
                    left : "DAILY QUESTION",
                    right:"Live"}
                ,
            head : "Will advice to drink less change how much alcohol you drink this Christmas? Plus, present wrapping, and Christmas pudding",
            foot : "Vote Now"
        },
        {
            tops  : {
                    left : "DAILY QUESTION",
                    right:"Live"}
                ,
            head : "Will advice to drink less change how much alcohol you drink this Christmas? Plus, present wrapping, and Christmas pudding",
            foot : "Vote Now"
        }
        
    ]
    return (
        <section className=' livereport__section section__gap'>
        <div className='container mx-auto'>
            <h3 className='hidden lg:block'>Live Trackers</h3>
            <h3 className='lg:hidden' > Trackers</h3>
            <div className='livereport__inner'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                    {liverreport.map((item, index)=>{
                        return (
                            <div  key={index}>
                                <div className='live__box mb-4 mb-lg-0'> 
                                    <div  className="top flex justify-between items-center">
                                        <span>{item.tops.left}</span>
                                        <span>{item.tops.right}</span>
                                    </div>
                                    <h4>{item.head}</h4>
                                    <a href="#!">{item.foot}</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <TrackBtn/>
        </div>

    </section>
    );
};

export default LiveTrackers;