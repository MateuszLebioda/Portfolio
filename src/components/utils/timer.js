import moment from "moment/moment";
import React from "react";
import styled from "styled-components";

const TimerStyle = styled.div`
  text-align: center;
`;

const Timer = (props) => {
  const value = () => {
    const now = moment(moment.now());
    const date = moment(props.date);
    return now.diff(date, props.time);
  };

  return (
    <TimerStyle className={props.className}>
      <h1>{value()}</h1>
      <h3>{props.diff}</h3>
    </TimerStyle>
  );
};

export default Timer;
