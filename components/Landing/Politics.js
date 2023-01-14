import Image from "next/image";
import React from "react";
import politics from "../../public/landing/politics.png";
import ApprovalChart from "./ApprovalChart";

const Politics = () => {
  return (
    <section className="section__gap2 politics__section mx-[15px] lg:mx-0">
      <div className="container  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <div className="lg:col-span-2">
            <div className="politics">
              <Image src={politics} alt="img" />
              <div className="content mb-4 mb-lg-0">
                <span>POLITICS</span>
                <h3>
                  What is the current political situation, A complete research!
                </h3>
                <span>30 Minutes Ago</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quis ullamcorper arcu
                  vulputate at aliquam sit viverra felis. Lorem ipsum dolor sit
                  amet consectetur. Quis ullamcorper.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="politics">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[20px]">
                <div>
                  <ApprovalChart />
                </div>
                <div>
                  <ApprovalChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Politics;
