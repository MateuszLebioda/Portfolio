import React from "react";
import styled from "styled-components";

const OutlineButtonStyle = styled.button`
  position: relative;
  display: inline-block;
  border: 2px solid #111;
  padding: 15px 30px;
  width: 100%;
  text-align: center;

  color: var(--form-color);
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;

  background: transparent;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: -2px;
    width: calc(100% + 4px);
    height: 100%;
    background: #fff;
  }

  span {
    position: relative;
    z-index: 3;
  }
`;

const OutlineButton = (props) => {
  return (
    <OutlineButtonStyle type="submit">
      <span>{props.label}</span>
    </OutlineButtonStyle>
  );
};

export default OutlineButton;
