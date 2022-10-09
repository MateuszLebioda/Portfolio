import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { notTranslationSiteData } from "../../../data/string-data";
import SocialIconButton from "../../utils/SocialIconButton";
import { social } from "../../../data/social";
import { useContext } from "react";
import { LanguageContext } from "../../../language/languageContext";
import { translate } from "../../../language/languageUtils";

const PreviewTemplate = props => {
  const PreviewStyle = styled.section`
    font-family: "Press Start 2P", cursive;
    font-size: 14px;

    min-height: 100vh;

    padding-left: 3.5rem;
    padding-right: 3.5rem;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    h1,
    .preview-paragraf {
      font-family: "Silkscreen", cursive;
    }

    .preview-description {
      line-height: 2;
      max-width: 550px;
      margin-left: auto;
      margin-right: auto;
    }

    .preview-avatar-image {
      max-width: ${props.maxWidth || "35vw"};
      min-width: 430px;
    }

    .preview-info-content {
      h1 {
        font-size: 2.8rem;
      }
    }

    .preview-description-container {
      display: flex;
      justify-content: center;

      div {
        font-size: 1.3rem;
      }
    }

    @media only screen and (max-width: 860px) {
      min-height: calc(100vh - 90px) !important;

      padding-left: 1rem;
      padding-right: 1rem;

      justify-content: start;
      flex-direction: column;

      .preview-description {
        line-height: 1;
      }

      h1 {
        margin-left: 15px;
        margin-right: 15px;
      }

      p {
        max-width: 580px;
        margin-left: auto;
        margin-right: auto;
      }

      .preview-content-style {
        margin-top: 1%;

        justify-content: start;
        flex-direction: column;
        min-height: calc(100vh - 85px);
      }

      min-height: 100vh;

      .preview-info-content {
        max-height: 40vh;
        h1 {
          font-size: 2rem;

          margin-bottom: 25px;
          margin-top: 15px;
        }
      }

      .preview-description-container {
        div {
          font-size: 1rem;
        }
      }

      .previe-image-container {
        max-height: 35vh;
        margin-top: 25px;
      }

      .preview-avatar-image {
        margin-left: auto;
        margin-right: auto;
        max-width: 330px;
        min-width: 100px;
      }
    }
  `;

  const query = graphql`
    {
      fileAvatar: file(name: { in: "logo-technologies" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
      fileBackground: file(name: { in: "code-background" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  `;

  const file = useStaticQuery(query);
  const imageAvatar = file.fileAvatar?.childImageSharp;
  const imageBackground = file.fileBackground?.childImageSharp;

  const { language } = useContext(LanguageContext);

  return (
    <PreviewStyle>
      <GatsbyImage
        image={getImage(imageBackground)}
        className={` ${
          props.fixed ? "fixed" : "absolute"
        } preview-avatar-background`}
        alt="background"
      />
      <div className="flex preview-content-style">
        <div className="preview-info-content flex-1 flex flex-column justify-content-center z-2">
          <h1 className="text-center">{notTranslationSiteData.myName}</h1>
          {props.jobs &&
            translate("programingTechnologies", language).map((t, index) => (
              <div
                className="preview-description-container my-2"
                key={`description-${index}`}
              >
                <div className="preview-paragraf text-center">{t}</div>
              </div>
            ))}
          {props.desc && <p className="preview-description">{props.desc}</p>}
          {props.social && (
            <div className="flex justify-content-center">
              {social.map((i, index) => (
                <SocialIconButton key={index} {...i} />
              ))}
            </div>
          )}
        </div>
        <div className="previe-image-container flex-1 flex ">
          <GatsbyImage
            image={getImage(imageAvatar)}
            className="preview-avatar-image m-auto"
            alt="avatar"
          />
        </div>
      </div>
      {props.children}
    </PreviewStyle>
  );
};

export default PreviewTemplate;
