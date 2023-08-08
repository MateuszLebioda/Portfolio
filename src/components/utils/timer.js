import moment from "moment/moment";
import React from "react";
import styled from "styled-components";
import ContentContainer from "../wrappers/content-container.js";

const Container = styled.div`
  @media only screen and (max-width: 860px) {
    display: flex;
    justify-content: center;

    .container-width {
      width: 250px;
    }
  }
`;

const TimerStyle = styled.div`
  text-align: center;
  min-width: 150px;
`;

const Timer = (props) => {
  const value = () => {
    const now = moment(moment.now());
    const date = moment(props.date);
    return now.diff(date, props.time);
  };

  return (
    <Container>
      <ContentContainer className="container-width p-2">
        <TimerStyle className={props.className}>
          <h1>{value()}</h1>
          <h3>{props.diff}</h3>
        </TimerStyle>
      </ContentContainer>
    </Container>
  );
};

export default Timer;
