import styled from "styled-components/native";

const Card = styled.View`
  border-radius: 12px;
  height: 300px;
  width: 90%;
  background-color: ${(props) => props.theme.input};
`;

export { Card };
