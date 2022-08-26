import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimeLineTabButton = (props) => {
  const TimeLineTabButtonStyle = styled.div`
    color: ${props.color};
    font-size: 1.1rem;
    width: max-content;

    border-radius: 1rem;
    border: solid 2px black;
    transition: 1s;

    :hover {
      border: solid 2px ${props.color};
    }

    a {
      transition: 1s;
    }

    a:hover {
      color: ${props.color};
    }
  `;

  return (
    <TimeLineTabButtonStyle>
      <a href={props.link} className="flex p-1">
        <FontAwesomeIcon icon={props.icon} className="my-auto" />
        <div className="pl-1">{props.name}</div>
      </a>
    </TimeLineTabButtonStyle>
  );
};

export default TimeLineTabButton;
