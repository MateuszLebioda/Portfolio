import React from "react";
import NotFoundPage from "../auto-pages/404";
import { languages } from "../language/languages";

const NotFound = props => {
  return (
    <NotFoundPage language={languages.PL} pathName={props.location.pathname} />
  );
};

export const Head = props => {
  return <title>404</title>;
};

export default NotFound;
