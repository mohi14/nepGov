import React from "react";
import MyProfile from "../components/MyProfile/MyProfile";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const myProfilePage = () => {
 
  return (
    <div>
      <Header />
      <MyProfile />
      <Footer />
    </div>
  );
};

export default myProfilePage;
