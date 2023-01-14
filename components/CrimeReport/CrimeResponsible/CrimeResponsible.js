import React from "react";
import BtnBackSubmit from "../../shared/BtnBackSubmit";


const CrimeResponsible = () => {
  return (
    <div className="custom__container mx-auto mb-[40px]">
      <div className="bg-white lg:px-[129px] py-[89px] px-[20px]">
        <p className="qus">
          Please tell us about the person or people involved or responsible for
          the crime.
        </p>
        <div class="form-control w-full">
          <div className="">
            <label class="label">
              <span class="label-text p_tag">
                What do you know about the person / people? Can you tell us
                their names, age or where they live (if different from the
                address of the crime)?
              </span>
            </label>
            <textarea class="w-full textarea textarea-bordered"></textarea>
          </div>
          <div className="">
            <label class="label">
              <span class="label-text p_tag]">
                What does the person / people look like?
              </span>
            </label>
            <textarea class="w-full textarea textarea-bordered"></textarea>
          </div>
          <div className="mb-[50px]">
            <label class="label">
              <span class="label-text p_tag">
                Do you know any contact details for the person / people?
              </span>
            </label>
            <textarea class="w-full textarea textarea-bordered"></textarea>
          </div>
        </div>
        <hr/>
        <BtnBackSubmit page="CrimeExtraInfoPage" />
      </div>
    </div>
  );
};

export default CrimeResponsible;
