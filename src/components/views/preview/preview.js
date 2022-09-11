import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import previewData from "../../../data/preview-data";
import SocialIconButton from "../../utils/SocialIconButton";

const PreviewStyle = styled.section`
  font-family: "Silkscreen", cursive;

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
      max-height: 50vh;
    }

    .previe-image-container {
      max-height: 50vh;
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
        alt="background"
      />
      <div className="preview-info-content flex-1 flex flex-column justify-content-center z-2">
        <h1 className="text-center text-6xl">{previewData.title}</h1>
        {previewData.description.map((t, index) => (
          <div
            className="preview-description-container text-xl my-2"
            key={`description-${index}`}
          >
            <div className="preview-paragraf text-center">{t.name}</div>
          </div>
        ))}
        <div className="flex justify-content-center">
          {previewData.social.map((i, index) => (
            <SocialIconButton key={index} {...i} />
          ))}
        </div>
      </div>
      <div className="previe-image-container flex-1 flex ">
        <GatsbyImage
          image={getImage(imageAvatar)}
          className="preview-avatar-image m-auto"
          alt="avatar"
        />
      </div>
    </PreviewStyle>
  );
};

export default Preview;
