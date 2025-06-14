import React from "react";
import * as C from "./styles";
interface InputProps {
  type: "email-address" | "visible-password" | "default";
  text: string;
}
export default function Input({ type, text }: InputProps) {
  return <C.InputAccount keyboardType={type} placeholder={text} />;
}
