import React from "react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
