import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import SocialIconButton from "../../utils/SocialIconButton";
import previewData from "./preview-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PreviewStyle = styled.section`
  min-height: 100vh;
  display: flex;
  padding-left: 5rem;
  padding-right: 5rem;

  .preview-avatar-image {
    max-width: 35vw;
    min-width: 450px;
  }

  .preview-description-container {
    display: flex;
    justify-content: center;
  }

  .preview-avatar-background {
    filter: blur(4px);
    opacity: 0.2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media only screen and (max-width: 860px) {
    padding-left: 1rem;
    padding-right: 1rem;

    flex-direction: column;

    .preview-description-container {
      display: flex;
      flex-direction: column;
    }

    .preview-info-content {
      margin-top: 0px;
    }
    .preview-avatar-image {
      margin-left: auto;
      margin-right: auto;
      max-width: 430px;
      min-width: 150px;
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

const Preview = () => {
  const file = useStaticQuery(query);
  const imageAvatar = file.fileAvatar?.childImageSharp;
  const imageBackground = file.fileBackground?.childImageSharp;

  return (
    <PreviewStyle>
      <GatsbyImage
        image={getImage(imageBackground)}
        className="preview-avatar-background"
      />
      <div className="preview-info-content flex-1 flex flex-column justify-content-center z-2">
        <div>
          <h1 className="text-center text-6xl">{previewData.title}</h1>
          {previewData.description.map((t) => (
            <p className="preview-description-container text-xl">
              <div className="preview-paragraf text-center">{t.name}</div>
            </p>
          ))}
          <div className="flex justify-content-center">
            {previewData.social.map((i, index) => (
              <SocialIconButton key={index} {...i} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex previe-image-container">
        <GatsbyImage
          image={getImage(imageAvatar)}
          className="preview-avatar-image m-auto"
        />
      </div>
    </PreviewStyle>
  );
};

export default Preview;
