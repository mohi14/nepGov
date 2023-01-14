import React from "react";
import CrimeTab from "../components/CrimeReport/CrimeTab";
import CrimeHappend from "../components/CrimeReport/Incident/CrimeHappend";
import CrimeIncident from "../components/CrimeReport/Incident/CrimeIncident";
import CrimeTellUs from "../components/CrimeReport/Incident/CrimeTellUs";
import Header from "../components/shared/Header";
import SubFooter from "../components/shared/SubFooter";

const crimeIncidentPage = () => {
  return (
    <div>
      <Header />
      <div className="gradient_bg  px-[15px]">
        <CrimeTab number={1} />
        <CrimeIncident />
        <CrimeHappend />
        <CrimeTellUs />
        <SubFooter />
      </div>
    </div>
  );
};

export default crimeIncidentPage;
