import React from "react";
import CrimeResponsible from "../components/CrimeReport/CrimeResponsible/CrimeResponsible";
import CrimeTab from "../components/CrimeReport/CrimeTab";
import Header from "../components/shared/Header";
import SubFooter from "../components/shared/SubFooter";

const CrimeResponsiblePage = () => {
  return (
    <div>
      <Header />
      <div className="gradient_bg p-[15px] lg:p-0">
        <CrimeTab number={2} />
        <CrimeResponsible />
        <SubFooter />
      </div>
    </div>
  );
};

export default CrimeResponsiblePage;
