import React from "react";
import * as C from "./styles";
interface ButtonProps {
  textButton: string;
}

import { TextBase } from "../../base/styles";
export function CreateCccountButton({ textButton }: ButtonProps) {
  return (
    <C.Button>
      <TextBase>{textButton}</TextBase>
    </C.Button>
  );
}
