import React from "react";
import SignUp from "../components/Login/SignUp/SignUp";
import Header from "../components/shared/Header";
import SubFooter from "../components/shared/SubFooter";

const signUpPage = () => {
  return (
    <div>
      <div className="bg-[#EF4634] lg:bg-[#F5F5F5] lg:pt-[112px] px-[15px] py-[50px] lg:py-0 lg:px-0">
        <SignUp />
        <SubFooter style={{ color: "black" }} />
      </div>
    </div>
  );
};

export default signUpPage;
