import styled from "styled-components/native";
import { colors } from "../global/styles";

const TextBase = styled.Text`
  font-family: Poppins_400Regular;
`;

const Input = styled.TextInput`
  background-color: ${colors["color-01"]};

  width: 80%;
  padding: 20px;

  border-radius: 8px;
`;
export { TextBase, Input };
