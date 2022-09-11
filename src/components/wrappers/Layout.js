import React from "react";
import Footer from "./footer";
import "normalize.css";
import "primeflex/primeflex.css";
import "../../assets/style/global-style.css";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
