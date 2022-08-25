import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;

  .navbar-image-avatar {
  }
  .navbar-image-name {
    margin-left: -1.5rem;
  }
`;

const query = graphql`
  {
    fileAvatar: file(name: { in: "icon" }) {
      childImageSharp {
        gatsbyImageData(height: 60, placeholder: TRACED_SVG)
      }
    }
    fileName: file(name: { in: "logo-name" }) {
      childImageSharp {
        gatsbyImageData(height: 75, placeholder: TRACED_SVG)
      }
    }
  }
`;

const Navbar = () => {
  const file = useStaticQuery(query);
  const imageAvatar = file.fileAvatar?.childImageSharp;
  const imageName = file.fileName?.childImageSharp;

  return (
    <NavbarStyle>
      <div>
        <GatsbyImage
          image={getImage(imageAvatar)}
          className="navbar-image-avatar mt-2"
        />
        <GatsbyImage
          image={getImage(imageName)}
          className="navbar-image-name"
        />
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
