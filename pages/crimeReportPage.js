import React from "react";
import CrimeBanner from "../components/CrimeReport/CrimeBanner";
import CrimeCard from "../components/CrimeReport/CrimeCard";
import CrimeInformation from "../components/CrimeReport/CrimeInformation";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const crimeReportPage = () => {
  return (
    <div>
      <Header />
      <CrimeBanner />
      <CrimeCard />
      <CrimeInformation />
      <Footer />
    </div>
  );
};

export default crimeReportPage;
