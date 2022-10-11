import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const CodeBackgroundStyle = styled.section`
  .preview-avatar-background {
    z-index: -1;
    min-height: 100vh;
    display: flex;
    filter: blur(4px);
    opacity: 0.2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const CodeBackground = () => {
  const data = useStaticQuery(query);
  const imageBackground = data.fileBackground?.childImageSharp;
  return (
    <CodeBackgroundStyle>
      <GatsbyImage
        image={getImage(imageBackground)}
        className="preview-avatar-background"
        alt="avatar"
      />
    </CodeBackgroundStyle>
  );
};

export const query = graphql`
  {
    fileBackground: file(name: { in: "code-background" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;

export default CodeBackground;
