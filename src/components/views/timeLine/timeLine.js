import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styled from "styled-components";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import timeLineData from "./timeLine-data";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import TimeLineTabButton from "./timeLineTagButton";

const TimeLineStyle = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
  .vertical-timeline-element-date {
    color: black;
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
  }
`;
const TimeLine = () => {
  const files = useStaticQuery(query);
  const images = files.timeLineImages?.nodes;
  const imagesIcon = files.timeLineIcons?.nodes;

  const mapTimeLineObject = (timeLineObject) => {
    const img = getImage(images.find((i) => i.name === timeLineObject.image));
    const imageIcon = getImage(
      imagesIcon.find((i) => i.name === timeLineObject.icon.imageIcon)
    );

    const icon = ({ icon }, imageIcon) => {
      if (icon.name) {
        return <FontAwesomeIcon icon={timeLineObject.icon.name} />;
      } else if (imageIcon) {
        return (
          <GatsbyImage image={imageIcon} className="time-line-image-icon" />
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
        date={timeLineObject.date}
        iconStyle={timeLineObject.icon}
        contentArrowStyle={{ border: "solid 0px white" }}
        icon={icon(timeLineObject, imageIcon)}
      >
        <div>
          <h3>{timeLineObject.name}</h3>
          {timeLineObject.image && img && (
            <div className="flex justify-content-center">
              <GatsbyImage image={img} />
            </div>
          )}
          <p className="mt-3">{timeLineObject.desc}</p>
          {timeLineObject.links && (
            <div className="flex flex-row-reverse mt-2">
              {timeLineObject?.links?.map((l) => (
                <TimeLineTabButton {...l} imageIcon={imageIcon} />
              ))}
            </div>
          )}
        </div>
      </VerticalTimelineElement>
    );
  };

  return (
    <TimeLineStyle>
      <VerticalTimeline animate lineColor="Black">
        {timeLineData.map(mapTimeLineObject)}
      </VerticalTimeline>
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
  }
`;
