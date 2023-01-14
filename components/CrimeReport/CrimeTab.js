import Link from "next/link";
import React, { useState } from "react";
import buttons from "../../Utils/Data.json";

const CrimeTab = ({ number }) => {
  const [toggleState, setToggleState] = useState(number);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div
      className="custom__container mx-auto text-center text-lg-end mb-[40px] lg:mt-[119px]"
      aria-label="Basic example"
    >
      <div className="crime_tab w-full flex flex-col md:flex-row text-white">
        {buttons.button.map((btn, index) => (
          <Link
            key={index}
            href={btn.path}
            onClick={() => toggleTab(index)}
            className={
              toggleState == index
                ? "border bg-[#3560AD] text-white flex items-center justify-center"
                : "border bg-white text-[#3560AD] flex items-center justify-center"
            }
          >
            {btn.btnName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CrimeTab;
