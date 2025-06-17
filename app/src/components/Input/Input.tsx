import React from "react";
import * as C from "./styles";
interface InputProps {
  type: "email-address" | "visible-password" | "default";
  text: string;
}
export function AccountInput({ type, text }: InputProps) {
  return <C.AccountInput keyboardType={type} placeholder={text} />;
}

export function MessageInput({ type, text }: InputProps) {
  return <C.MessageInput keyboardType={type} placeholder={text} />;
}
