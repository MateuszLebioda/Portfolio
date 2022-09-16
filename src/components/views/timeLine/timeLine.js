import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styled from "styled-components";
import "react-vertical-timeline-component/style.min.css";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import TimeLineTabButton from "./timeLineTagButton";
import timeLineData from "../../../data/timeLine-data";
import * as FontAwesome from "react-icons/fa";

const TimeLineStyle = styled.div`
  .time-line-container {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .default-date-style {
    color: black;
    font-weight: bold !important;
  }

  .white-date-style {
    color: black;
    font-weight: bold !important;
  }

  .vertical-timeline {
    padding-top: 0;
    padding-bottom: 0;
  }

  .time-line-image-icon {
    margin: 12px;
  }

  @media only screen and (max-width: 1170px) {
    .time-line-image-icon {
      margin: 5px;
    }

    .default-date-style {
      color: black;
    }

    .white-date-style {
      color: white;
    }
  }
`;
const TimeLine = props => {
  const files = useStaticQuery(query);
  const images = files.timeLineImages?.nodes;
  const imagesIcon = files.timeLineIcons?.nodes;
  const imageBackground = files.fileBackground?.childImageSharp;

  const [isSmalScreen, setSmalScreen] = useState(null);

  useEffect(() => {
    if (isSmalScreen === null) {
      setSmalScreen(!isSmalScreen && window.innerWidth <= 860);
    }

    window.addEventListener("resize", event => {
      if (isSmalScreen && window.innerWidth > 860) {
        setSmalScreen(false);
      } else if (!isSmalScreen && window.innerWidth <= 860) {
        setSmalScreen(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mapTimeLineObject = (timeLineObject, index) => {
    const img = getImage(images.find(i => i.name === timeLineObject.image));
    const imageIcon = getImage(
      imagesIcon.find(i => i.name === timeLineObject.icon.imageIcon)
    );

    const icon = ({ icon }, imageIcon) => {
      if (icon.name) {
        return React.createElement(FontAwesome[timeLineObject.icon.name], {
          key: `time-line-${index}`,
        });
      } else if (imageIcon) {
        return (
          <GatsbyImage
            key={`time-line-${index}`}
            image={imageIcon}
            className="time-line-image-icon"
            alt="icon"
          />
        );
      }
      return null;
    };

    return (
      <VerticalTimelineElement
        contentStyle={{
          ...timeLineObject.style,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        dateClassName={
          timeLineObject.whiteDate ? "white-date-style" : "default-date-style"
        }
        date={timeLineObject.date}
        iconStyle={timeLineObject.icon}
        contentArrowStyle={{ border: "solid 0px white" }}
        icon={icon(timeLineObject, imageIcon)}
        key={`time-line-object-${index}`}
      >
        <div>
          <h3>{timeLineObject.name}</h3>
          {timeLineObject.image && img && (
            <div className="flex justify-content-center">
              <GatsbyImage image={img} alt="img" />
            </div>
          )}
          <div className="mt-3">{timeLineObject.desc}</div>
          {timeLineObject.links && (
            <div className="flex flex-row-reverse mt-2">
              {timeLineObject?.links?.map((l, index) => (
                <TimeLineTabButton
                  {...l}
                  imageIcon={imageIcon}
                  key={`link-${index}`}
                />
              ))}
            </div>
          )}
        </div>
      </VerticalTimelineElement>
    );
  };

  return (
    <TimeLineStyle>
      <GatsbyImage
        image={getImage(imageBackground)}
        className="fixed preview-avatar-background"
        alt="background"
      />
      <div
        className={`time-line-container ${
          props.gradient && "time-line-gradient"
        }`}
      >
        <VerticalTimeline animate={!isSmalScreen} lineColor="Black">
          {timeLineData.map(mapTimeLineObject)}
        </VerticalTimeline>
      </div>
    </TimeLineStyle>
  );
};

export default TimeLine;

const query = graphql`
  {
    timeLineImages: allFile(
      filter: { sourceInstanceName: { eq: "timeLine" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, height: 75)
        }
        name
      }
    }
    timeLineIcons: allFile(filter: { sourceInstanceName: { eq: "icon" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, height: 40)
        }
        name
      }
    }
    fileBackground: file(name: { in: "code-background" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;
