import React from "react";
import NotFoundPage from "../../auto-pages/404";

import { languages } from "../../language/languages";

const NotFoundEn = props => {
  return (
    <NotFoundPage language={languages.EN} pathName={props.location.pathname} />
  );
};

export const Head = props => {
  return <title>404</title>;
};

export default NotFoundEn;
