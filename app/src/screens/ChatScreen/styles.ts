import styled from "styled-components/native";
import { colors } from "../../global/styles";

const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;

  margin-top: 40px;
  padding: 30px;

  border-radius: 12px;

  background-color: ${colors["color-01"]};
`;

export { Header };
