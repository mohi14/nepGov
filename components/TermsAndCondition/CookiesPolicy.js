import React from 'react';
import cookiePolicyes from "../../Utils/Data.json";

const CookiesPolicy = () => {
    return (
        <div className="custom__container terms mx-auto mb-[100px]">
        <h1>Cookie Policy</h1>
        {cookiePolicyes.cookiePolicy.map((terms, index) => (
          <div key={index}>
            <h6>{terms.title}</h6>
            <p>{terms.content}</p>
          </div>
        ))}
      </div>
    );
};

export default CookiesPolicy;