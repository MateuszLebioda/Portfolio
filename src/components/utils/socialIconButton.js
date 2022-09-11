import React, { useState } from "react";
import styled from "styled-components";
import * as FontAwesome from "react-icons/fa";

const SocialIconButtonStyle = styled.div`
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;

  .social-icon-color {
    transition: 1s;
  }
`;

const SocialIconButton = (props) => {
  const [isHover, setIsHover] = useState(false);

  const iconStyle = { color: isHover && props.color };

  return (
    <SocialIconButtonStyle>
      <a href={props.link}>
        <div className={`social-icon-color ${props.className}`}>
          {React.createElement(FontAwesome[props.icon], {
            className: "social-icon-color",
            style: iconStyle,
            onMouseEnter: () => setIsHover(true),
            onMouseLeave: () => setIsHover(false),
          })}
        </div>
      </a>
    </SocialIconButtonStyle>
  );
};

export default SocialIconButton;
