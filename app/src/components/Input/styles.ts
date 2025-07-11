import styled from "styled-components/native";
import { Input, TextBase } from "../../base/styles";

const AccountInput = styled(Input)`
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
`;

const MessageInput = styled(Input)`
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
`;

const MessageError = styled(TextBase)`
  color: red;
`;

export { AccountInput, MessageInput, MessageError };
