import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const AvatarPageStyle = styled.section`
  min-height: 100vh;

  .preview-avatar-background {
    z-index: -1;
    min-height: 100vh;
  }

  @media only screen and (max-width: 860px) {
    min-height: calc(100vh - 80px);

    .preview-avatar-background {
      min-height: 100vh;
    }
  }
`;

const AvatarPage = props => {
  const data = useStaticQuery(query);
  const imageBackground = data.fileBackground?.childImageSharp;
  const imageAvatar = data.fileAvatar?.childImageSharp;

  return (
    <AvatarPageStyle className="flex justify-content-center">
      <GatsbyImage
        image={getImage(imageBackground)}
        className="preview-avatar-background fixed"
        alt="avatar"
      />
      <div className="m-auto">
        <div className="flex justify-content-center">
          <GatsbyImage image={getImage(imageAvatar)} alt="background" />
        </div>

        <h1 className="text-center">{props.header}</h1>
        <h3 className="text-center">{props.message}</h3>
      </div>
    </AvatarPageStyle>
  );
};

export const query = graphql`
  {
    fileBackground: file(name: { in: "code-background" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    fileAvatar: file(name: { in: "logo-technologies" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, width: 500)
      }
    }
  }
`;

export default AvatarPage;
