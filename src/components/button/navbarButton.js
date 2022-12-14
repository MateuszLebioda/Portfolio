import { Link } from "gatsby";
import React, { useContext } from "react";

import styled from "styled-components";
import { LanguageContext } from "../../language/languageContext";
import { generateLink } from "../../language/languageUtils";
import Icon from "../utils/icon";

const NavbarButtonStyle = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;

  position: relative;

  .navbar-button-container {
    width: 50px;
    height: 50px;

    position: absolute;
    margin: auto;
    left: 14px;

    padding-left: 10px;
    box-sizing: border-box;

    svg {
      margin-top: 10px;
      margin-left: 7px;
    }

    :hover {
      .navbar-button-label-container {
        background-color: ${props => props.background || "blue"};
        display: inline-block;
        width: ${props => `calc((${props.label.length}rem / 2) + 25px)`};
      }

      .navbar-button-label-container {
        color: ${props => props.color || "white"};
        border: 2px solid white;
        border-color: ${props => props.color || "white"};
      }
    }

    .navbar-button-label-container {
      width: 0;
      overflow: hidden;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: 1s, color 0.4s;
      padding-left: 60px;
      z-index: 12;
      border-radius: 25px;
      font-weight: bold;
      color: transparent;
      white-space: nowrap;
      border: 2px solid transparent;
    }
  }

  .navbar-button-icon {
    z-index: 15;
    position: absolute;
    color: ${props => props.color || "white"};
    font-size: 1.7rem;
    transition: 1s;
  }
`;

const NavbarButton = props => {
  const { language } = useContext(LanguageContext);

  return (
    <NavbarButtonStyle {...props}>
      <Link to={generateLink(props.href, language)} className="">
        <div className="navbar-button-container">
          <Icon icon={props.icon} className="navbar-button-icon" />
          <div className="navbar-button-label-container flex justify-content-center flex-column">
            <div className="">{props.label}</div>
          </div>
        </div>
      </Link>
    </NavbarButtonStyle>
  );
};

export default NavbarButton;
