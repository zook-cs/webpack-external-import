import React from "react";
import "react-select";
import "./style.css";
import { Field } from "tiny-mobx-form";
import lodash from "lodash";

export const Title = ({ title }) => {
  console.log("tree-shake: IValidator", Field);

  if (!lodash.isEmpty([1,2])) {
    debugger;
    console.log("website 2 has lodash")
  }
  return (
    <h1 className="inline-css">
      TITLE COMPONENT - website2:
      {title}
    </h1>
  );
};
