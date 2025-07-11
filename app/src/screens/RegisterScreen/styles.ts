import styled from "styled-components/native";
import { TextBase } from "../../base/styles";

const Container = styled.View`
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 8px;
`;

const Title = styled(TextBase)`
  font-size: 24px;
  font-family: Poppins_700Bold;
  color: ${(props) => props.theme.text};
`;

export { Title, Container };
