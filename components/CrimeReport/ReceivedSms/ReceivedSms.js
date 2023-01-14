import Image from "next/image";
import Link from "next/link";
import React from "react";
import checkbox from "../../../public/icon/check_box.png";

const ReceivedSms = () => {
  return (
    <div className="custom__container mx-auto lg:my-[119px]">
      <div className="bg-white lg:px-[129px] py-[89px] px-[20px]">
        <Image className="mb-[24px]" src={checkbox} alt="icon" />
        <p style={{ marginBottom: "20px" }} className="qus">
          Your report was received
        </p>
        <p className="keep_content">
          Thanks for your information. We will look into the case and take
          necessary steps as soon as possible.
        </p>
        <div className="text-center">
          <Link
            style={{ marginTop: "20px", marginBottom: "0" }}
            href="/"
            className="crime_info_btn btn normal-case"
            type=""
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReceivedSms;
