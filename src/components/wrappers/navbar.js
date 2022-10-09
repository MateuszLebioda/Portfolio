import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../language/languageContext";
import { links } from "../../data/links";
import { social } from "../../data/social";
import Icon from "../utils/icon";
import NavbarButton from "../utils/navbarButton";
import SocialIconButton from "../utils/SocialIconButton";
import { generateLink, translate } from "../../language/languageUtils";

const NavbarStyle = styled.nav`
  z-index: 10;
  height: 100vh;
  width: 90px;
  position: fixed;
  top: 0;
  left: 0;

  .navbar-container {
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    transition: 3s;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .navbar-avatar-navigation {
      width: 90px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 0.5rem;
      .navbar-image-avatar {
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.5rem;
      }
    }

    .navbar-navigation {
      display: flex;
      justify-content: start;
      flex-direction: column;
      margin-top: 1rem;
    }

    .navbar-social-buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        color: white;
      }
    }

    .navbar-hamburger-icon {
      display: none;
    }
  }

  .navbar-non-top-container {
    background-color: rgba(133, 133, 133, 0.5);
    .navbar-social-buttons {
      a {
        color: black;
      }
    }

    .navbar-small-menu {
      display: none;
    }
  }

  @media only screen and (max-width: 860px) {
    height: 90px;
    width: 100vw;

    .navbar-top-color {
      background-color: rgba(0, 0, 0, 0.9);
      a {
        color: white;
      }
    }

    .navbar-non-top-container {
      background-color: rgba(133, 133, 133, 0.98);
      color: black;
    }

    .navbar-container {
      flex-direction: row;
      .navbar-avatar-navigation {
        flex-direction: row;
        .navbar-image-avatar {
          margin-top: auto;
        }

        .navbar-navigation {
          display: none;
        }
      }
      .navbar-social-buttons {
        display: none;
      }

      .navbar-hamburger-icon {
        display: flex;
        font-size: 2.5rem;
        cursor: pointer;
        padding-right: 10px;
        padding-left: 10px;
        margin-right: 15px;
      }
    }

    .navbar-small-menu {
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: 1.5rem;
      transition: 3s;
    }
  }
`;

const Navbar = props => {
  const file = useStaticQuery(query);
  const imageAvatar = file.fileAvatar?.childImageSharp;

  const [isTop, setTop] = useState(true);
  const [isMenuActive, setMenuActive] = useState(false);

  const { language, pagePath, nextLanguage } = useContext(LanguageContext);

  useEffect(() => {
    window.onscroll = () => {
      if (isTop && window.pageYOffset >= 3) {
        setTop(false);
      } else if (isTop && window.pageYOffset === 0) {
        setTop(true);
      }
    };
  }, []);

  return (
    <NavbarStyle>
      <div
        className={`navbar-container ${!isTop && "navbar-non-top-container"}`}
      >
        <div className="navbar-avatar-navigation">
          <div className="flex justify-content-center">
            <Link to={generateLink("/", language)}>
              <GatsbyImage
                image={getImage(imageAvatar)}
                alt="avatar"
                className="navbar-image-avatar"
              />
            </Link>
          </div>
          <div className="navbar-navigation">
            {links.map(l => (
              <div className="my-2">
                <NavbarButton
                  {...l}
                  label={translate(l.label, language)}
                  key={`navbar-button-${l.lp}`}
                  color={!isTop && "black"}
                />
              </div>
            ))}
          </div>
        </div>
        <Link
          to={generateLink(pagePath, nextLanguage)}
          style={{ color: "white" }}
        >
          {language}
        </Link>

        <div className="navbar-social-buttons">
          {social.map((i, index) => (
            <SocialIconButton
              key={`navbar-social-${index}`}
              {...i}
              className="flex justify-content-center"
            />
          ))}
        </div>
        <div className="navbar-hamburger-icon">
          <Icon
            icon="GiHamburgerMenu"
            className={`${
              isTop ? "text-white" : "text-black"
            } flex justify-content-center flex-column`}
            config={{
              onClick: () => {
                setMenuActive(prev => !prev);
              },
            }}
          />
        </div>
      </div>

      <div
        className={`navbar-small-menu ${!isMenuActive && "hidden h-0"} ${
          isTop ? "navbar-top-color" : "navbar-non-top-container"
        }`}
      >
        {links.map(l => (
          <Link to={l.href} onClick={() => setMenuActive(false)}>
            <div className="flex my-1 ml-3">
              <Icon icon={l.icon} className="my-auto mx-2" />
              <div className="my-2">{translate(l.label, language)}</div>
            </div>
          </Link>
        ))}
      </div>
    </NavbarStyle>
  );
};

const query = graphql`
  {
    fileAvatar: file(name: { in: "icon" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, width: 75)
      }
    }
  }
`;

export default Navbar;
