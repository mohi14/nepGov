import Image from 'next/image';
import React from 'react';
import about1 from '../../public/about/about1.png';
import about2 from '../../public/about/about2.png';
import about3 from '../../public/about/about3.png';

const About = () => {
    const about_info = [
        {
          title: "",
          content:
            "Our data-led offering supports and improves a wide spectrum of marketing activities of a customer base including media owners, brands and media agencies. We work with some of the world’s most recognised brands.Our ground-breaking syndicated data solutions include the daily brand perception tracker, YouGov BrandIndex, and the media planning and segmentation tool, YouGov Profiles. Our market-leading YouGov Realtime service provides a fast and cost-effective solution for reaching nationally representative and specialist samples. YouGov’s Custom Research division offers a wide range of quantitative and qualitative research, tailored by sector specialist teams to meet clients’ specific requirements. As the pioneer of online market research, we have a strong record for data accuracy and innovation. A study by the Pew Research Center concluded that YouGov “consistently outperforms competitors on accuracy” as a vendor of choice. We are the market research pioneer of Multi-level Regression with Post-stratification (“MRP”) for accurate predictions at a granular level. YouGov data is regularly referenced by the press worldwide and we are the most quoted market research source in the world. With a proprietary panel of over 22 million registered members globally and operations in the UK, Americas, Mainland Europe, Middle East, India and Asia Pacific, YouGov has one of the world’s largest research networks.",
          image: about1,
        },
        {
          title: "Our mission, vision and values",
          content:
            "Our mission is to supply a continuous stream of accurate data and insight into what the world thinks, so that companies, governments and institutions can better serve the people and communities that sustain them. Our vision is for YouGov data to be a valued public resource used by hundreds of millions of people on a daily basis, enabling intelligent decision-making and informed conversations. We are driven by a set of shared values. We are fast, fearless and innovative. We work diligently to get it right. We are guided by accuracy, ethics and proven methodologies. We trust each other and bring these values into everything that we do.",
        },
        {
          title: "Our strategy",
          content:
            'The underlying strategy that drives our long-term growth plan is defined by the mantra: "YouGov. Best panel - Best data - Best tools.|"',
          image: about2,
        },
        {
          title: "Best Data",
          content:
            "The YouGov Cube is a unique single-source connected-data library that holds over ten years of longitudinal data. We leverage this data using our research expertise, including our application of Multilevel Regression with Post-stratification (“MRP”) methodology, to make accurate predictions at a granular level.",
        },
        {
          title: "How we operate",
          content:
            "Our mission is to supply a continuous stream of accurate data and insight into what the world thinks, so that companies, governments and institutions can better serve the people and communities that sustain them. Our vision is for YouGov data to be a valued public resource used by hundreds of millions of people on a daily basis, enabling intelligent decision-making and informed conversations. We are driven by a set of shared values. We are fast, fearless and innovative. We work diligently to get it right. We are guided by accuracy, ethics and proven methodologies. We trust each other and bring these values into everything that we do. Our mission is to supply a continuous stream of accurate data and insight into what the world thinks, so that companies, governments and institutions can better serve the people and communities that sustain them. Our vision is for YouGov data to be a valued public resource used by hundreds of millions of people on a daily basis, enabling intelligent decision-making and informed conversations. We are driven by a set of shared values. We are fast, fearless and innovative. We work diligently to get it right. We are guided by accuracy, ethics and proven methodologies. We trust each other and bring these values into everything that we do.",
        },
        {
          title: "Best Data",
          content:
            "The YouGov Cube is a unique single-source connected-data library that holds over ten years of longitudinal data. We leverage this data using our research expertise, including our application of Multilevel Regression with Post-stratification (“MRP”) methodology, to make accurate predictions at a granular level.",
          image: about3,
        },
      ];
    return (
        <section className="about__section">
        <div className=" mx-auto custom__container">
          <div className="about__inner">
            <h2 className="section__gap3">About NepGov</h2>
            {about_info.map((item, index) => {
              return (
                <div className="about__box" key={index}>
                  
                  <h4 className="">{item.title}</h4>
                  <p className="section__gap3">{item.content}</p>
                  <Image className="section__gap3" src={item?.image} alt="img" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default About;