import React from "react";
import ApprovalChart from "./ApprovalChart";
import TrackBtn from "./TrackBtn";

const PreviousTrackers = () => {
  return (
    <section className="tracker__section section__gap">
      <div className="container mx-auto">
        <h3 className="hidden lg:block">Previous Trackers</h3>
        <h3 className="lg:hidden">Trackers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          <div >
            <ApprovalChart />
          </div>
          <div >
          <ApprovalChart />
          </div>
          <div >
          <ApprovalChart />
          </div>
        </div>
        <TrackBtn />
      </div>
    </section>
  );
};

export default PreviousTrackers;
