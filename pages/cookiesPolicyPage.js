import React from "react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import CookiesPolicy from "../components/TermsAndCondition/CookiesPolicy";

const cookiesPolicyPage = () => {
  return (
    <div>
      <Header />
      <CookiesPolicy />
      <Footer />
    </div>
  );
};

export default cookiesPolicyPage;
