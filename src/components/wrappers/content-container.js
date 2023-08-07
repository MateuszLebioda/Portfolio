import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid black;
  border-radius: 2rem;
  padding: 1.5rem;
  background-color: white;
`;

const ContentContainer = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default ContentContainer;
