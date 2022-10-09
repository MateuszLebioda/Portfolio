import moment from "moment/moment";
import React from "react";
import styled from "styled-components";
import { translate } from "../../language/languageUtils";

const TimerStyle = styled.div`
  text-align: center;
`;

const Timer = props => {
  const value = () => {
    const now = moment(moment.now());
    const date = moment(props.date);
    return now.diff(date, props.diff);
  };

  return (
    <TimerStyle className={props.className}>
      <h1>{value()}</h1>
      <h3>{translate(props.diff, props.lang)}</h3>
    </TimerStyle>
  );
};

export default Timer;
