import React from 'react';


const Vehicle = () => {
    return (
        <div className="custom__container mx-auto mb-[40px]">
        <div className="bg-white lg:px-[129px] py-[89px] px-[20px]">
          <p className="qus">
          Do any of the people involved in the crime have access to a vehicle(s)?
          </p>
          <div class="form-control w-full">
          <div className="flex gap-2 mb-[31px]">
            <input
              type="text"
              value="Yes"
              class="input input_btn input-bordered w-full"
            />
            <input
              type="text"
              value="No"
              class="input input_btn input-bordered w-full"
            />
            <input
              type="text"
              value="Don’t Know"
              class="input input_btn input-bordered w-full"
            />
          </div>
          </div>
     
        </div>
      </div>
    );
};

export default Vehicle;