import React from "react";
import * as C from "./styles";
import { TextBase } from "../../base/styles";

interface ButtonProps {
  textButton: string;
  event?: () => void;
}

export function CreateCccountButton({ textButton, event }: ButtonProps) {
  return (
    <C.Button onPress={event}>
      <TextBase style={{ color: "white", fontWeight: "bold" }}>
        {textButton}
      </TextBase>
    </C.Button>
  );
}
