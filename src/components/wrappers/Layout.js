import React from "react";
import Footer from "./Footer";
import "normalize.css";
import "primeflex/primeflex.css";
import "../../assets/style/global-style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faSchool,
  faBriefcase,
  faGraduationCap,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
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
  faNode,
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
  faSchool,
  faBriefcase,
  faGraduationCap,
  faArrowRightToBracket,
  faNode,
  faFontAwesome
);

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
