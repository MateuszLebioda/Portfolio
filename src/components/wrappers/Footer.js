import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import footerData from "../../data/footer-data";
import previewData from "../../data/preview-data";
import SocialIconButton from "../utils/SocialIconButton";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { contactData } from "../../data/complex-data";
import { translate } from "../../utils/translator";

import { getLink } from "../../utils/navigation";

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
        gatsbyImageData(placeholder: TRACED_SVG, width: 250)
      }
    }
  }
`;

const Footer = () => {
  const file = useStaticQuery(query);
  const imageAvatar = file.fileAvatar?.childImageSharp;
  const { contact } = footerData;
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
          {translate(contactData, "rightReserved")}
        </div>
      </div>
      <div className="footer-info">
        <h2>{translate(contactData, "contact")}</h2>
        {contactData.phone && (
          <div className="flex footer-info-container">
            <FaPhone className="my-auto" />
            <div className="footer-contact-value-container">
              {contactData.phone}
            </div>
          </div>
        )}
        {contactData.email && (
          <div className="flex footer-info-container">
            <FaEnvelope className="my-auto" />
            <div className="footer-contact-value-container">
              {contactData.email}
            </div>
          </div>
        )}

        <Link
          to={getLink("/contact/me")}
          className="footer-social-buttons flex footer-info-container"
        >
          <BiMessageAltDetail className="my-auto" />
          <div className="footer-contact-value-container">
            {translate(contactData, "contactForm")}
          </div>
        </Link>
        <div className="flex footer-info-container">
          {previewData.social.map((i, index) => (
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
