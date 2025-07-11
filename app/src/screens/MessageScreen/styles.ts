import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  align-items: center;

  margin-top: 60px;
`;

export { Container };
