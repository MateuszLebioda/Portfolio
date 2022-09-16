import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import skillsData from "../../../data/skill-data";
import Skill from "./skill";

const SkillStyle = styled.div``;

const Skills = props => {
  const files = useStaticQuery(query);
  const images = files.skillsImages?.nodes;

  return (
    <SkillStyle>
      <h1 className="text-center text-5xl">Technologie</h1>
      {skillsData.map((sk, index) => (
        <Skill
          {...sk}
          img={getImage(images.find(i => i.name === sk.img))}
          img2={getImage(images.find(i => i.name === sk.img2))}
          right={index % 2 === 1}
        />
      ))}
    </SkillStyle>
  );
};

const query = graphql`
  {
    skillsImages: allFile(filter: { sourceInstanceName: { eq: "logoTech" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, height: 175)
        }
        name
      }
    }
  }
`;

export default Skills;
