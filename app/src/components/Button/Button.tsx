import React from "react";
import * as C from "./styles";
interface ButtonProps {
  textButton: string;
  event?: () => void;
}

import { TextBase } from "../../base/styles";
export function CreateCccountButton({ textButton, event }: ButtonProps) {
  return (
    <C.Button onPress={event}>
      <TextBase>{textButton}</TextBase>
    </C.Button>
  );
}
