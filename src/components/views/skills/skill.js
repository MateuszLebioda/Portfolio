import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../../language/languageContext";
import { translate } from "../../../language/languageUtils";

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
    text-align: right;
  }

  .skill-desc-container {
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
      text-align: center;
      max-width: 580px;
      margin-left: auto;
      margin-right: auto;
    }

    .skill-image-container {
      max-width: 175px;
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

const Skill = props => {
  const { language } = useContext(LanguageContext);

  return (
    <SkillStyle>
      <div
        className={`skill-container ${props.right && "skill-right-content"}`}
      >
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
        <div>
          <h2>{props.name}</h2>
          <div
            className={`skill-desc-container my-auto ${
              props.img2 && "skill-desc-container-more"
            }`}
          >
            {translate(props.desc, language)}
          </div>
        </div>
      </div>
    </SkillStyle>
  );
};

export default Skill;
