import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../ContextAPI/AuthProvider";
import { QuestionContext } from "../Contexts/ContextsProvider";

const Banner = () => {
  const { handleYes, handleVoteNow } = useContext(AuthContext);

  const onMarked = () => {
    handleVoteNow();
    console.log("gg");
  };
  const reportComp = [
    {
      tops: {
        left: "CRIME REPORT",
        right: "Live",
      },
      head: "Give crime information  anonymously",
      mid: "Your anonymity is 100% guaranteed.",
      foot: "Give Information Here",
      path: "crimeEnglishChangePage",
    },
    {
      tops: { left: "DAILY QUESTION", right: "Live" },
      head: "Will advice to drink less change how much alcohol you drink this Christmas? Plus, present wrapping, and Christmas pudding",
      foot: "Vote Now",
      path: "voteNowPage",
    },
  ];
  return (
    <section className="report__section lg:mb-[50px]">
      <div className="container mx-auto">
        <div className="report__boxes flex justify-between items-center flex-col-reverse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
            {reportComp.map((item, index) => (
              <div key={index}>
                {index === 1 ? (
                  <div className="report__box box__right  mx-[15px] lg:m-0">
                    <div className="top flex justify-between items-center">
                      <span>{item.tops.left}</span>
                      <span>{item.tops.right}</span>
                    </div>
                    <h4>{item.head}</h4>

                    {/* <p>{item.mid}</p> */}
                    <Link
                      href={item.path}
                      className="text-[#3560AD]"
                      onClick={onMarked}
                    >
                      {item.foot}
                    </Link>
                  </div>
                ) : (
                  <div className="report__box  mx-[15px] lg:m-0">
                    <div className="top flex justify-between items-center">
                      <span>{item.tops.left}</span>
                      <span>{item.tops.right}</span>
                    </div>
                    {index === 1 ? <h4>{item.head}</h4> : <h3>{item.head}</h3>}
                    <p className="text-[16px] font-[400]">{item.mid}</p>{" "}
                    <Link href={item.path} className="text-[#EF4634]">
                      {item.foot}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
