import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const SocialIconButton = (props) => {
  const SocialIconButtonStyle = styled.div`
    padding: 1rem;
    font-size: 2rem;
    cursor: pointer;

    .social-icon-color {
      transition: 1s;
    }
    .social-icon-color:hover {
      color: ${props.color};
    }

    .social-icon {
    }
  `;

  return (
    <SocialIconButtonStyle>
      <a href={props.link}>
        <div className="social-icon-color">
          <FontAwesomeIcon icon={props.icon} />
        </div>
      </a>
    </SocialIconButtonStyle>
  );
};

export default SocialIconButton;
