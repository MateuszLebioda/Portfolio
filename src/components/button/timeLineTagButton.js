import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as FontAwesome from "react-icons/fa";

const TimeLineTabButtonStyle = styled.div`
  color: ${props => props.color};
  font-size: 1.1rem;
  width: max-content;

  border-radius: 1rem;
  border: solid 2px black;
  transition: 1s;
  padding-right: 0.3rem;
  padding-left: 0.1rem;

  :hover {
    border: solid 2px ${props => props.color};
  }

  a {
    transition: 1s;
  }

  a:hover {
    .time-line-image {
      filter: grayscale(0);
    }
  }

  .time-line-image {
    height: 20px;
    width: 20px;
    margin: auto;
    filter: grayscale(100%);
    transition: 1s;
  }
`;

const TimeLineTabButton = props => {
  const [isHover, setIsHover] = useState(false);

  const iconStyle = {
    transition: "1s",
    color: isHover && props.color,
  };

  return (
    <TimeLineTabButtonStyle
      style={iconStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a href={props.link} className="flex p-1">
        {props.icon &&
          React.createElement(FontAwesome[props.icon], {
            style: iconStyle,
            className: "my-auto",
          })}
        {props.imageIcon && (
          <GatsbyImage
            image={getImage(props.imageIcon)}
            className="time-line-image"
            alt="icon"
          />
        )}
        <div className="pl-1" style={iconStyle}>
          {props.name}
        </div>
      </a>
    </TimeLineTabButtonStyle>
  );
};

export default TimeLineTabButton;
