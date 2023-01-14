import React from "react";
import arrowForward from '../../public/icon/arrow_forward.png';
import arrowBack from '../../public/icon/arrow_back.png';
import Image from "next/image";
import Link from "next/link";

const BtnBackSubmit = ({ page = "/" }) => {
  return (
    <div className="mt-[20px] flex justify-between items-center">
      <button
        style={{
          fontSize: "18px",
          backgroundColor: "transparent",
          color: "#3560AD",
        }}
        className="normal-case back_btn flex"
        type=""
      >
        <Image src={arrowBack} alt="icon" /> Go Back{" "}
      </button>
      <Link
        href={page}
        style={{ fontSize: "18px" }}
        className="con_btn normal-case"
        type=""
      >
        Submit <Image src={arrowForward} alt="icon" />
      </Link>
    </div>
  );
};

export default BtnBackSubmit;
