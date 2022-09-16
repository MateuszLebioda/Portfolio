import React from "react";
import Footer from "./footer";
import "normalize.css";
import "primeflex/primeflex.css";
import "../../assets/style/global-style.css";
import Navbar from "./navbar";
import styled from "styled-components";

const LayoutStyle = styled.div`
  .layout-container {
    margin-left: 90px;
  }

  .layout-container-all {
    margin-top: 0;
  }

  @media only screen and (max-width: 860px) {
    .layout-container {
      margin-left: 0;
    }

    .layout-container-all {
      margin-top: 80px;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <Navbar />
      <div className="layout-container-all">
        <div className="layout-container">{children}</div>
        <div className="layout-container">
          <Footer />
        </div>
      </div>
    </LayoutStyle>
  );
};

export default Layout;
