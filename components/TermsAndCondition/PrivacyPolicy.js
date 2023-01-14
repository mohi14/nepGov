import React from 'react';
import privacyPolicys from "../../Utils/Data.json";

const PrivacyPolicy = () => {
    return (
        <div className="custom__container terms mx-auto mb-[100px]">
        <h1>Privacy Policy</h1>
        {privacyPolicys.privacyPolicy.map((terms, index) => (
          <div key={index}>
            <h6>{terms.title}</h6>
            <p>{terms.content}</p>
          </div>
        ))}
      </div>
    );
};

export default PrivacyPolicy;