import React from "react";
import CrimeTab from "../components/CrimeReport/CrimeTab";
import KeepContact from "../components/CrimeReport/ExtraInfo/KeepContact";
import Vehicle from "../components/CrimeReport/ExtraInfo/Vehicle";
import Weapon from "../components/CrimeReport/ExtraInfo/Weapon";
import Header from "../components/shared/Header";
import SubFooter from "../components/shared/SubFooter";

const CrimeExtraInfoPage = () => {
  return (
    <div>
      <Header />
      <div className="gradient_bg px-[15px] py-[50px] lg:p-0">
        <CrimeTab number={3} />
        <Vehicle />
        <Weapon />
        <KeepContact />
        <SubFooter />
      </div>
    </div>
  );
};

export default CrimeExtraInfoPage;
