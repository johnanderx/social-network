import React from "react";
import * as C from "./styles";
import { TextBase } from "../../base/styles";
export default function Story() {
  return (
    <C.GradientBorder
      colors={["#FF0DB9", "#833AB4", "#5851DB", "#F56040", "#FFD500"]}
      start={{ x: 0.0, y: 0.5 }}
      end={{ x: 1.0, y: 0.5 }}
    >
      <C.Circle>
        <TextBase>Profile</TextBase>
      </C.Circle>
    </C.GradientBorder>
  );
}
