import React from "react";

const CrimeHappend = () => {
  return (
    <div className="custom__container mx-auto mb-[40px]">
      <div className="bg-white lg:px-[129px] py-[89px] px-[20px]">
        <p className="qus">Do you know when it happened?</p>
        <div class="form-control w-full">
          <div className="flex gap-2 mb-[31px]">
            <input
              type="text"
              value="Yes"
              class="input input-bordered w-full"
            />
            <input
              type="text"
              value="No"
              class="input input-bordered w-full"
            />
          </div>
          <div className="">
          <label class="label">
            <span class="label-text p_tag">
            When did it happen?
            </span>
          </label>
            <select class="select select-bordered w-full mb-[50px] ">
              <option disabled selected>
                Please Select
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrimeHappend;
