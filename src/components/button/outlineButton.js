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
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background: #fff;
    transition: 0.5s ease-in-out;
    transform: scaleY(1);
  }

  :hover:before {
    transform: scaleY(0);
  }

  :after {
    content: "";
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background: #fff;
    transition: 0.5s ease-in-out;
    transform: scaleX(1);
  }

  :hover:after {
    transform: scaleX(0);
  }

  span {
    position: relative;
    z-index: 3;
  }

  @media only screen and (max-width: 860px) {
    background: rgb(212, 212, 212);
    :before,
    :after {
      background: rgb(212, 212, 212);
    }
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
