import React from "react";

import * as FaFontAwesome from "react-icons/fa";
import * as BiFontAwesome from "react-icons/bi";
import * as MdFontAwesome from "react-icons/md";
import * as GiFontAwesome from "react-icons/gi";

const icons = {
  Bi: BiFontAwesome,
  Fa: FaFontAwesome,
  Md: MdFontAwesome,
  Gi: GiFontAwesome,
};

const Icon = (props) => {
  const getIconObject = () => {
    for (const [key, value] of Object.entries(icons)) {
      if (props.icon.startsWith(key)) {
        return value;
      }
    }
  };

  const createIcon = () => {
    const icon = getIconObject(props.icon);
    return React.createElement(icon[props.icon], props.config);
  };

  return <div className={props.className}>{createIcon()}</div>;
};

export default Icon;
