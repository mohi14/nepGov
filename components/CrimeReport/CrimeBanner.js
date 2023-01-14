import Link from "next/link";
import React from "react";

const CrimeBanner = () => {
  return (
    <div className="gradient_bg crime_banner">
      <h1>
        Give crime information <br /> anonymously
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Gravida non non morbi <br />
        bibendum magna. Semper ultrices lacus et dui proin.
      </p>
      <Link href="crimeEnglishChangePage" className="btn crime_banner_info_btn normal-case">
        Give Information Here
      </Link>
    </div>
  );
};

export default CrimeBanner;
