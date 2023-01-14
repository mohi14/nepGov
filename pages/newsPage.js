import React from "react";
import News from "../components/News/News";
import ReadMore from "../components/News/ReadMore";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const newsPage = () => {
  return (
    <div>
      <Header />
      <News />
      <ReadMore/>
      <Footer />
    </div>
  );
};

export default newsPage;
