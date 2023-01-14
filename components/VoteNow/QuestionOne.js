import React, { useContext, useState } from "react";
import { QuestionContext } from "../Contexts/ContextsProvider";
import ProgressBar from "./ProgressBar";
import facebook from "../../public/icon/fb.png";
import twiter from "../../public/icon/tw.png";
import linkedIn from "../../public/icon/in.png";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "../ContextAPI/AuthProvider";

const QuestionOne = ({ question }) => {
  // const { setIsSelected, isSelected } = useContext(QuestionContext);
  // const percentage = "20";

  const { handleYes } = useContext(AuthContext);
  const [isSelected, setIsSelected] = useState(false);

  const onChange = (id) => {
    handleYes();
    setIsSelected(true);
    console.log(isSelected);
  };

  if (isSelected) {
    setTimeout(() => {
      if (isSelected) {
        let progressBars = document.querySelectorAll(".progress-bar");
        let values = ["90%", "80%", "70%", "60%", "50%"];

        progressBars.forEach((progress, index) => {
          progress.style.width = "80%";
        });
      }
    }, 0);
  }

  const faq = [
    {
      name: "Somewhat support",
      ratio: "90",
    },
    {
      name: "Strongly support",
      ratio: "80",
    },
    {
      name: "Somewhat oppose",
      ratio: "70",
    },
    {
      name: "Strongly oppose",
      ratio: "60",
    },
    {
      name: "Don't know",
      ratio: "50",
    },
  ];

  return (
    <div className="">
      <div className="border-y mb-[30px] border-[#808DA5] border-3 py-[10px] flex ">
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4 mt-2"
        >
          <path
            d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
            fill="#3560AD"
          />
        </svg>
        <p className="text-[16px] font-[400]">
          Do you think the World Cup 2022 in Qatar has been successful or
          unsuccessful?
        </p>
      </div>

      <p className="bg-[#808DA5] block h-[23px] w-[94px] flex justify-center items-center  text-white  ml-[64px] text-[14px] font-[700] mb-[10px]">
        Question {question}
      </p>

      <div className="ml-[64px]">
        <p className=" text-[20px] font-[500] mb-[30px]">
          Would you support or oppose increased security in stadiums in Qatar
          world cup?
        </p>
      </div>

      <div className="ml-[64px]">
        {faq.map((it, index) => (
          <div key={index} className="flex mb-[28px] mt-[30px]">
            <input
              type="checkbox"
              className="checkbox vote_checkbox"
              onClick={() => onChange(it)}
              disabled={isSelected}
            />
            {isSelected ? (
              <label className="ml-3 w-full">
                <div className="flex justify-between">
                  <p>{it.name}</p>
                  <p>{it.ratio}%</p>
                </div>
                {/* <ProgressBar></ProgressBar> */}
                {/* <progress
                  className="progress  w-full"
                  value={it.ratio}
                  max="100"
                ></progress> */}
                <progress
                  className="progress"
                  value={it.ratio}
                  max="100"
                ></progress>
              </label>
            ) : (
              <label className="ml-3 w-full">{it.name}</label>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto">
        <div className="flex gap-[10px] items-center justify-center lg:justify-end pt-[30px] pb-[20px]">
          <p className="text-[14px] font-[400]">Share with:</p>
          <Link href="#">
            <Image src={facebook} alt="fb" />
          </Link>
          <Link href="#">
            <Image src={twiter} alt="fb" />
          </Link>
          <Link href="#">
            <Image src={linkedIn} alt="fb" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionOne;
