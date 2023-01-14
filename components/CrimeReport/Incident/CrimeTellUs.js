import React from "react";
import BtnBackNext from "../../shared/BtnBackNext";

const CrimeTellUs = () => {
  return (
    <div className="custom__container mx-auto mb-[40px]">
      <div className="bg-white lg:px-[129px] py-[89px] px-[20px]">
        <p className="qus">
          Tell us more about the crime: what you heard, saw or know about.
        </p>
        <div class="form-control w-full">
          <div className="">
            <label class="label">
              <span class="label-text p_tag">
                Please don't give information about the people involved as you
                will be asked details about this in the next section. (Required
                Info)
              </span>
            </label>
            <textarea class="w-full textarea textarea-bordered"></textarea>
          </div>
        </div>
        <BtnBackNext page="CrimeResponsiblePage" />
      </div>
    </div>
  );
};

export default CrimeTellUs;
