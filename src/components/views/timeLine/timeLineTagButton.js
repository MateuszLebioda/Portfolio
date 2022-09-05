import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TimeLineTabButton = (props) => {
  const TimeLineTabButtonStyle = styled.div`
    color: ${props.color};
    font-size: 1.1rem;
    width: max-content;

    border-radius: 1rem;
    border: solid 2px black;
    transition: 1s;
    padding-right: 0.3rem;
    padding-left: 0.1rem;

    :hover {
      border: solid 2px ${props.color};
    }

    a {
      transition: 1s;
    }

    a:hover {
      color: ${props.color};
    }

    .time-line-image {
      height: 20px;
      width: 20px;
      margin: auto;
    }
  `;

  return (
    <TimeLineTabButtonStyle>
      <a href={props.link} className="flex p-1">
        {props.icon && (
          <FontAwesomeIcon icon={props.icon} className="my-auto" />
        )}
        {props.imageIcon && (
          <GatsbyImage
            image={getImage(props.imageIcon)}
            className="time-line-image"
          />
        )}
        <div className="pl-1">{props.name}</div>
      </a>
    </TimeLineTabButtonStyle>
  );
};

export default TimeLineTabButton;
