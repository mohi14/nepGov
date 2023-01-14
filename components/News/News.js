import Image from 'next/image';
import React from 'react';
import aboutBanner from '../../public/about/about_banner.png';
import about1 from '../../public/about/about1.png';
import about2 from '../../public/about/about2.png';
import about3 from '../../public/about/about3.png';

const News = () => {
    const newsitem = [
        {
          title: "",
          content:
            "Elon Musk launched a Twitter poll this week to ask users of the platform if he should step down as the company’s CEO. The poll saw the majority of participants say “yes” to Musk quitting the role (58% yes vs 43% no). Shortly after, Musk confirmed that he will step down as soon as he finds a replacement. YouGov's polling on the issue saw four in ten Britons (40%) say they would support the billionaire stepping down, while one in eleven (9%) say they would oppose the move.",
          image: about1,
        },
        {
          title:
            "A majority of Britons who use Twitter daily would support Elon Musk stepping down as CEO",
          content:
            "And that’s even higher for Britons who say they use Twitter daily – 60% of them would support Musk stepping down as CEO while just 14% would oppose it. A majority of those daily Twitter users (56%) also say that Musk has been bad for the platform, compared to just 16% who say he’s been good for it.",
        },
        {
          title:
            "Fewer than one in five Britons have a favourable opinion of Elon Musk",
          content:
            "Since Musk began his acquisition of Twitter in April, his popularity has tumbled among the British public. Just 18% of Britons now have a favourable opinion of Musk compared to more than half (54%) who say they think unfavourably of him. That gives him a net favourability rating (the result of subtracting the percentage of people with an unfavourable view from the percentage with a favourable view) of -36, down from -17 in April, when 23% of Britons held a favourable view of him and 40% an unfavourable one.",
          image: about2,
        },
        {
          title: "Does Twitter give users enough freedom to post?",
          content:
            "Upon acquiring the social media giant, Elon Musk made clear his desire to promote more freedom of speech among users. However, a third (34%) of Britons now think that Twitter gives people too much freedom to post what they want and allows too much offensive or harmful content that should be removed – that's up slightly from 32% in April. A far smaller proportion of Britons (11%) think Twitter does not give people enough freedom to post, and often moderates or removes content that should be allowed, while a similar number (12%) believe Twitter gets the balance about right. Among Twitter users, 14% think Twitter does not give people enough freedom to post, while 39% say it gives people too much freedom and allows too much offensive or harmful content that should be removed.",
        },
        {
          title:
            "Four in ten Britons who use Twitter say the platform gives people too much freedom and allows too much harmful content",
          content:
            "Thinking about the extent to which Twitter allows people the freedom to post whatever they want, and the extent to which it acts to remove messages that may be offensive or harmful. Which of the following best reflects your view? % of 1672 Britons, including 681 Twitter users",
          image: about3,
        },
      ];
    return (
        <section className="news__section section__gap">
            <Image style={{maxHeight:"466px"}} className='w-full' src={aboutBanner} alt="img" />
        <div className=" custom__container mx-auto">
          <div className="news__inner">
            <h2 className="section__gap3 mt-[50px] text-[#3560AD]">
              Elon Musk's popularity among Britons has tumbled since he announced
              plans to take over Twitter
            </h2>
            <span className="section__gap3 d-block">
              <i>written by Saul Ramirez | published on 26 Dec 2022, 6:15 AM </i>
            </span>
            {newsitem.map((item, index) => {
              return (
                <div className="news__box" key={index}>
                  <h4>{item.title}</h4>
                  <p className="section__gap3">{item.content}</p>
                  <Image src={item.image} alt="" />
                </div>
              );
            })}
  
            <div></div>
          </div>
        </div>
      </section>
    );
};

export default News;