import React from "react";
import styled from "styled-components";

const UnderlineInputStyle = styled.div`
  width: ${props => props?.style?.width || "85%"};
  background: transparent;
  padding: ${props => props?.style?.padding || "0px"};
  margin: ${props => props?.style?.margin || "auto"};
  padding-top: 1rem;
  padding-bottom: 1rem;

  .underline-data .underline-underline {
    position: absolute;
    bottom: -4px;
    height: 2px;
    width: calc(100% + 3px);
  }

  .underline-data .underline-underline:before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: var(--form-valid-color);
    transform: scaleX(0);
    transition: all 0.5s ease;
  }

  .underline-data {
    height: 40px;
    width: 100%;
    position: relative;

    input {
      height: 100%;
      width: 100%;
      border: none;
      border-bottom: 2px solid var(--form-outline-color);
      background: transparent;
    }

    label {
      position: absolute;
      bottom: 10px;
      left: 0;
      color: var(--form-outline-color);
      pointer-events: none;
      transition: all 0.5s ease;
    }

    input:focus ~ label,
    input:valid ~ label,
    input:not(:placeholder-shown) ~ label {
      transform: translateY(-20px);
      font-size: 0.8rem;
    }

    input:focus ~ .underline-underline:before,
    input:valid ~ .underline-underline:before {
      transform: scaleX(1);
    }

    input:invalid ~ .underline-underline:before {
      transform: scaleX(1);
      background: red;
    }

    input:placeholder-shown ~ .underline-underline:before {
      transform: scaleX(0);
    }
  }
`;

const UnderlineInput = props => {
  console.log(props.label);
  return (
    <UnderlineInputStyle>
      <div className="underline-data">
        <input
          type={props.type || "text"}
          name={props.name}
          required
          placeholder=" "
        />
        <div className="underline-underline"></div>
        <label>{props.label}</label>
      </div>
    </UnderlineInputStyle>
  );
};

export default UnderlineInput;
