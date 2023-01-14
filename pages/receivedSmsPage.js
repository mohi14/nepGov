import React from "react";
import ReceivedSms from "../components/CrimeReport/ReceivedSms/ReceivedSms";
import Header from "../components/shared/Header";
import SubFooter from "../components/shared/SubFooter";

const receivedSmsPage = () => {
  return (
    <div>
      <Header />
      <div className="gradient_bg px-[20px] py-[50px]">
        <ReceivedSms />
        <SubFooter />
      </div>
    </div>
  );
};

export default receivedSmsPage;
