import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthProvider";
import { QuestionContext } from "../Contexts/ContextsProvider";
import QuestionOne from "./QuestionOne";

const Voting = () => {
  const { handleYes, q } = useContext(AuthContext);
  // const [activeQuestion, setActiveQuestion] = useState(1);
  // const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const [q, setQ] = useState([1]);

  // const [q, setQ] = useState([1, 2, 3, 4]);
  // const [activeQuestion, setActiveQuestion] = useState(1);

  // const handleYes = () => {
  //   const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //   const newQuestions = [];
  //   console.log(newQuestions);

  //   setTimeout(() => {
  //     for (let i = 0; i < activeQuestion; i++) {
  //       const n = allQuestions[i];
  //       console.log(n);
  //       if (n !== undefined) {
  //         newQuestions.push(n);
  //       }
  //     }
  //     setActiveQuestion(activeQuestion + 1);
  //     setQ(newQuestions);
  //   }, 1500);
  // };

  // const navigate = useNavigate();


  if (q.length === 0) {
    handleYes();
  }
  return (
    <div className="pt-20 background ">
      <div className="p-3 lg:p-0 mx-auto">
        <div className="max-w-[685px] m-auto flex flex-col lg:flex-row items-center gap-[15px]">
          <div className="parent_class">
            <p className=" flex items-center justify-center rounded-[7px] w-[165px]  h-[33px]  normal-case text-[#EF4634] bg-white border-0 text-[16px] font-[700]">
              Change Topic
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3"
              >
                <path
                  d="M6 7.9L0 1.9L1.4 0.5L6 5.1L10.6 0.5L12 1.9L6 7.9Z"
                  fill="#EF4634"
                />
              </svg>
            </p>

            <ul className="childClass">
              <p className="text-[#EF4634] text-[20px] font-[700] mb-[3px]">
                Change Topic
              </p>
              <p className="text-[4B4B4B] font-[400] text-[14px] mb-[16px]">
                Select a topic to vote
              </p>
              <li className="">
                <a>
                  Would you support or opposee a ban on ambulance workers
                  striking?
                </a>
              </li>
              <hr className="mb-[10px]" />
              <li className="">
                <a>
                  What is the most important issue government is facing now?
                </a>
              </li>
              <hr className="mb-[10px]" />
              <li className=" ">
                <a>Do you support current education system?</a>
              </li>
              <hr className="mb-[10px]" />
              <li className="">
                <a>What is the problem student facing most in the country?</a>
              </li>
              <hr className="mb-[10px]" />
              <li className=" ">
                <a>What is the most counsumed product in FMCG category?</a>
              </li>
            </ul>
          </div>
          <input
            id="search"
            type="text"
            placeholder="Search for topics"
            className="input w-full h-[33px]"
          />
        </div>

        <div className="flex flex-col-reverse ">
          {q.map((question, idx) => (
            <div key={idx} timeout={700} classNames="item">
              <div className="bg-white max-w-[685px]  m-auto rounded-[7px] p-[30px] mt-[20px]">
                <QuestionOne handleYes={handleYes} question={question} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Voting;
