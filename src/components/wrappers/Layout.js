import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "normalize.css";
import "primeflex/primeflex.css";
import "../../assets/style/global-style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
  faFontAwesome,
  faJava,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
  faJava,
  faJs,
  faHtml5,
  faCss3Alt,
  faFontAwesome
);

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
