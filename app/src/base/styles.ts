import styled from "styled-components/native";

const TextBase = styled.Text`
  font-family: Poppins_400Regular;
  color: ${(props) => props.theme.text};
`;

const Input = styled.TextInput`
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};

  width: 80%;
  padding: 20px;

  border-radius: 8px;
`;
export { TextBase, Input };
