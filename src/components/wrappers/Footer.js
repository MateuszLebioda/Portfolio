import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import styled from "styled-components";
import SocialIconButton from "../button/socialIconButton";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { notTranslationSiteData } from "../../language/string-translation-data";

import { social } from "../../data/social-data";
import { LanguageContext } from "../../language/languageContext";
import { generateLink, translate } from "../../language/languageUtils";

const FooterStyle = styled.footer`
  background-color: black;
  color: white;
  border: 5px solid black;

  display: flex;
  justify-content: space-evenly;

  .footer-contact-value-container {
    padding: 0.5rem;
    color: white;
    text-transform: uppercase;
  }

  .footer-social-buttons {
    color: white;
  }

  @media only screen and (max-width: 860px) {
    flex-direction: column-reverse;
    text-align: center;

    .footer-info-container {
      justify-content: center;
    }
  }
`;

const query = graphql`
  {
    fileAvatar: file(name: { in: "logo-technologies" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, width: 180)
      }
    }
  }
`;

const Footer = () => {
  const file = useStaticQuery(query);
  const imageAvatar = file.fileAvatar?.childImageSharp;

  const { language } = useContext(LanguageContext);

  return (
    <FooterStyle>
      <div className="footer-image my-auto">
        <div className="flex justify-content-center">
          <GatsbyImage
            image={getImage(imageAvatar)}
            alt="avatar"
            className="footer-avatar-image"
          />
        </div>

        <div className="text-center mb-2">
          &copy;
          {` ${new Date().getFullYear()} Copyright - Mateusz Lebioda`}
          <br />
          {translate("rightReserved", language)}
        </div>
      </div>
      <div className="footer-info">
        <h2>{translate("contact", language)}</h2>
        {notTranslationSiteData.phone && (
          <div className="flex footer-info-container">
            <FaPhone className="my-auto" />
            <div className="footer-contact-value-container">
              {notTranslationSiteData.phone}
            </div>
          </div>
        )}
        {notTranslationSiteData.email && (
          <div className="flex footer-info-container">
            <FaEnvelope className="my-auto" />
            <div className="footer-contact-value-container">
              {notTranslationSiteData.email}
            </div>
          </div>
        )}

        <Link
          to={generateLink("/contact/me", language)}
          className="footer-social-buttons flex footer-info-container"
        >
          <BiMessageAltDetail className="my-auto" />
          <div className="footer-contact-value-container">
            {translate("contactForm", language)}
          </div>
        </Link>
        <div className="flex footer-info-container">
          {social.map((i, index) => (
            <SocialIconButton
              key={index}
              {...i}
              className="footer-social-buttons"
            />
          ))}
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
