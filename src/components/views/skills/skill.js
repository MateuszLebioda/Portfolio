import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../../language/languageContext";
import { translate } from "../../../language/languageUtils";
import ContentContainer from "../../wrappers/content-container.js";
import parse from "html-react-parser";
const SkillStyle = styled.div`
  margin-bottom: 25px;

  .skill-container {
    display: flex;
    justify-content: center;
    flex-direction: row;

    margin-left: 35px;
    margin-right: 35px;
    gap: 1rem;

    h2 {
      font-weight: bold;
    }
  }

  .skill-right-content {
    flex-direction: row-reverse;
  }

  .skill-desc-container {
    text-align: center;
    max-width: 55vw;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .skill-desc-container-more {
    max-width: calc(55vw - 175px);
  }

  .skill-image-container {
    max-width: 175px;
    max-height: 175px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .image-container {
    padding-top: 75px;
  }

  .connected-skills-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 860px) {
    .skill-container {
      display: flex;
      flex-direction: column;
      h2 {
        text-align: center;
      }
    }

    .skill-right-content {
      flex-direction: column;
    }

    .skill-desc-container {
      max-width: 580px;
      margin-left: auto;
      margin-right: auto;
    }

    .skill-image-container {
      max-width: 175px;
      margin-right: auto;
      margin-left: auto;
    }

    .image-container {
      padding-top: 0px;
    }

    .content-container {
      max-width: 250px;
    }

    /* .connected-skills-container {
      display: flex;
      justify-content: center;
      
    } */
  }
`;

const Skill = (props) => {
  const { language } = useContext(LanguageContext);

  const ConnectedSkills = () => {
    return (
      props.connectedSills && (
        <>
          <h3 className="text-center">{translate("workedWith", language)}</h3>
          <div className="connected-skills-container">
            {props.connectedSills.map((i) => (
              <GatsbyImage key={i.name} image={getImage(i)} alt="techImage" />
            ))}
          </div>
        </>
      )
    );
  };

  return (
    <SkillStyle>
      <div
        className={`skill-container ${props.right && "skill-right-content"}`}
      >
        <div className="image-container flex flex-column justify-content-center">
          <div className="flex justify-content-center">
            <GatsbyImage
              className="skill-image-container"
              image={props.img}
              alt="techImage"
            />
            {props.img2 && (
              <GatsbyImage
                className="skill-image-container"
                image={props.img2}
                alt="techImage"
              />
            )}
          </div>
        </div>
        <div className="flex flex-column justify-content-center">
          <h1 className="text-center">{props.name}</h1>
          <ContentContainer>
            <div
              className={`skill-desc-container my-auto ${
                props.img2 && "skill-desc-container-more"
              }`}
            >
              {parse(translate(props.desc, language))}
            </div>
            <ConnectedSkills />
          </ContentContainer>
        </div>
      </div>
    </SkillStyle>
  );
};

export default Skill;
