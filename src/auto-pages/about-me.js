import React from "react";
import styled from "styled-components";
import Timer from "../components/utils/timer";
import PreviewTemplate from "../components/views/preview/previewTemplate";
import Skills from "../components/views/skills/skills";
import Layout from "../components/wrappers/Layout";
import { notTranslationSiteData } from "../data/string-data";
import { translate } from "../language/languageUtils";

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

const AboutMe = ({ pageContext }) => {
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

  return (
    <AboutMeStyle>
      <Layout {...pageContext}>
        <PreviewTemplate
          desc={translate("myDescription", pageContext.lang)}
          fixed
          social
          maxWidth="25vw"
        >
          <div>
            <h2 className="text-center about-me-font">
              {translate("developerFor", pageContext.lang)}
            </h2>
            <div className="flex about-me-timer-container">
              {time.map((t, index) => (
                <Timer
                  date={Date.parse(notTranslationSiteData.startIT)}
                  {...t}
                  key={`timer-${index}`}
                />
              ))}
            </div>
          </div>
        </PreviewTemplate>
        <Skills />
      </Layout>
    </AboutMeStyle>
  );
};

export default AboutMe;
