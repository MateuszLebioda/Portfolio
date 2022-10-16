import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import Timer from "../components/utils/timer";
import SkillsView from "../components/views/skills/skillsView";
import { notTranslationSiteData } from "../language/string-translation-data";
import { LanguageContext } from "../language/languageContext";
import { translate } from "../language/languageUtils";
import Preview from "../components/views/preview/preview";
import { Seo } from "../components/wrappers/seo";

const AboutMeStyle = styled.section`
  .about-me-timer-container {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1380px) {
    .about-me-minute {
      display: none;
    }
  }

  @media only screen and (max-width: 1080px) {
    .about-me-hours {
      display: none;
    }
  }

  @media only screen and (max-width: 860px) {
    .about-me-timer-container {
      flex-direction: column;
    }
    .about-me-minute {
      display: block;
    }
    .about-me-hours {
      display: block;
    }
  }
`;

const AboutMe = () => {
  const time = [
    {
      diff: "years",
      label: "Lat",
    },
    {
      diff: "months",
      label: "Miesiecy",
    },
    {
      diff: "weeks",
      label: "Tygodni",
    },
    {
      diff: "days",
      label: "Dni",
      className: "about-me-days",
    },
    {
      diff: "hours",
      label: "Godzin",
      className: "about-me-hours",
    },
    {
      diff: "minutes",
      label: "Minut",
      className: "about-me-minute",
    },
  ];

  const { language } = useContext(LanguageContext);

  return (
    <AboutMeStyle>
      <Preview
        desc={translate("myDescription", language)}
        fixed
        social
        maxWidth="25vw"
      >
        <div>
          <h2 className="text-center about-me-font">
            {translate("developerFor", language)}
          </h2>
          <div className="flex about-me-timer-container">
            {time.map((t, index) => (
              <Timer
                date={Date.parse(notTranslationSiteData.startIT)}
                time={t.diff}
                diff={translate(t.diff, language)}
                key={`timer-${index}`}
              />
            ))}
          </div>
        </div>
      </Preview>
      <SkillsView />
    </AboutMeStyle>
  );
};

export const Head = () => <Seo />;

export default AboutMe;
