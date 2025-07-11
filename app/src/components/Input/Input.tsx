import React from "react";
import * as C from "./styles";
import { useTheme } from "styled-components/native";

interface InputProps {
  type: "email-address" | "visible-password" | "default";
  text: string;
  error?: string;
  onChangeText?: (text: string) => void;
}

export function AccountInput({ type, text, error, onChangeText }: InputProps) {
  const theme = useTheme();
  return (
    <>
      <C.AccountInput
        keyboardType={type}
        placeholder={text}
        placeholderTextColor={theme.placeholder}
        onChangeText={onChangeText}
      />
      {error && <C.MessageError>{error}</C.MessageError>}
    </>
  );
}

export function MessageInput({ type, text }: InputProps) {
  const theme = useTheme();
  return (
    <C.MessageInput
      keyboardType={type}
      placeholder={text}
      placeholderTextColor={theme.placeholder}
    />
  );
}
