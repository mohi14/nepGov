import Image from "next/image";
import React from "react";
import checkbox from "../../public/icon/check_box.png";

const ReportReceived = () => {
  return (
    <div className="custom__container mx-auto mb-[40px]">
      <div className="bg-white px-[129px] py-[89px]">
        <Image src={checkbox} alt="icon" />
        <p className="qus">Your report was received</p>
        <p>
          Thanks for your information. We will look into the case and take
          necessary steps as soon as possible.
        </p>
        <a className="btn signup_btn normal-case">Back to home</a>
      </div>
    </div>
  );
};

export default ReportReceived;
