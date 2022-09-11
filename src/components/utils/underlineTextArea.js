import React from "react";
import styled from "styled-components";

const UnderlineTextAreaStyle = styled.div`
  margin-top: 1rem;
  position: relative;
  width: 75%;
  min-height: 30vh;

  textarea {
    width: 100% !important;
    height: 100% !important;
    resize: none;
    background: transparent;
    border: 2px solid var(--form-outline-color);
    transition: all 2s ease;
  }

  label {
    position: absolute;
    top: 5px;
    left: 5px;
    color: var(--form-outline-color);
    pointer-events: none;
    transition: all 0.5s ease;
  }

  textarea:focus ~ label,
  textarea:valid ~ label,
  textarea:not(:placeholder-shown) ~ label {
    transform: translate(-5px, -25px);
    font-size: 0.8rem;
  }

  textarea:focus,
  textarea:valid,
  textarea:not(:placeholder-shown) {
    border: 2px solid var(--form-valid-color);
  }
`;

const UnderlineTextArea = (props) => {
  return (
    <UnderlineTextAreaStyle>
      <textarea placeholder=" " required name={props.name} />
      <label>{props.label}</label>
    </UnderlineTextAreaStyle>
  );
};

export default UnderlineTextArea;
