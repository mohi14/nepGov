import React from "react";
import Login from "../components/Login/Login";
import Header from "../components/shared/Header";
import SubFooter from "../components/shared/SubFooter";

const loginPage = () => {
  return (
    <div>
      <div className="bg-[#F5F5F5] pt-[112px]">
        <Login />
        <SubFooter style={{ color: "black" }} />
      </div>
    </div>
  );
};

export default loginPage;
