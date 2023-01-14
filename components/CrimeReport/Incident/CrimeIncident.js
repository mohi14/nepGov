import React from "react";

const CrimeIncident = () => {
  return (
    <div className="custom__container mx-auto mb-[40px]">
      <div className="bg-white lg:px-[129px] py-[89px] px-[20px] ">
        <p className="qus">Where did the crime or incident take place?</p>
        <div class="form-control w-full">
            <div className="mb-[31px]">
                
            <label class="label">
            <span class="label-text p_tag">
              Town or city or Postcode (VITAL INFORMATION)
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
            </div>
            <div className="">
                
          <label class="label">
            <span class="label-text p_tag">
              Do you have any other address details e.g property number or road
              name? Can you tell us anything that will help us identify the
              location?
            </span>
          </label>
          <textarea class="w-full textarea textarea-bordered" ></textarea>
            </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default CrimeIncident;
