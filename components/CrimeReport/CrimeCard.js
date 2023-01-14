import React from "react";

const CrimeCard = () => {
  const cardDetails = [
    {
      title: "NepGov is is not the police ",
      content: "We are an independent charity working to help communities",
    },
    {
      title: "Nobody will know you have helped us",
      content:
        "Your computer and mobile phone IP addresses cannot be tracked or saved. It's completely anonymous",
    },
    {
      title: "We pay cash rewards of up to £1,000",
      content:
        "If the information you give us leads to an arrest or is of significant use you will be rewarded.",
    },
  ];
  return (
    <div className="crime_card_section my-[100px]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[21px]">
          {cardDetails.map((details, index) => (
            <div className="crime_card" key={index}>
              <h5>{details.title}</h5>
              <p>{details.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrimeCard;
