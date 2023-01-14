import Image from "next/image";
import React, { useState } from "react";
import BtnBackNext from "../shared/BtnBackNext";

const EnglishChange = () => {
  return (
    <div className="crime_english_section mt-[119px] mb-[94px]">
      <div className="custom__container mx-auto bg-white pt-[15px] pb-[90px]">
        <p className="english text-end pr-[18px] mb-[94px]">
          English <span className="text-[#EF4634]">(Change)</span>
        </p>
        <div className="form-control px-[130px] ">
          <label className="cursor-pointer label justify-start gap-[24px] mb-[42px]">
            <input
              type="checkbox"
              //   checked="checked"
              className="checkbox checkbox-error"
            />
            <span className="checkbox_content">
              I confirm that this form is not being used to report something
              that requires urgent Police attention
            </span>
          </label>
          <h6 className="qus">
            What is the crime or incident you would like to tell us about?
          </h6>
          <select className="select select-bordered w-full mb-[50px] eng_select">
            <option disabled selected>
              Please Select
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <hr />
          <BtnBackNext page="crimeIncidentPage" />
        </div>
      </div>
    </div>
  );
};

export default EnglishChange;
