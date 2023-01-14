import React from 'react';
import termsCondition from "../../Utils/Data.json";

const TermsCondition = () => {
    return (
        <div className="custom__container terms mx-auto mb-[100px]">
      <h1>Terms & Conditions</h1>
      {termsCondition.termsConditions.map((terms, index) => (
        <div key={index}>
          <h6>{terms.title}</h6>
          <p>{terms.content}</p>
        </div>
      ))}
    </div>
    );
};

export default TermsCondition;