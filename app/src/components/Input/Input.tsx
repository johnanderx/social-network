import React from "react";
import * as C from "./styles";
interface InputProps {
  type: "email-address" | "visible-password" | "default";
  text: string;
  error?: string;
  onChangeText?: (text: string) => void;
}
export function AccountInput({ type, text, error, onChangeText }: InputProps) {
  return (
    <>
      <C.AccountInput
        keyboardType={type}
        placeholder={text}
        onChangeText={onChangeText}
      />
      {error && <C.MessageError>{error}</C.MessageError>}
    </>
  );
}

export function MessageInput({ type, text }: InputProps) {
  return <C.MessageInput keyboardType={type} placeholder={text} />;
}
