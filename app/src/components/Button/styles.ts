import styled from "styled-components/native";
import { colors } from "../../global/styles";

const Button = styled.TouchableOpacity`
  background-color: ${colors["color-01"]};

  width: 50%;
  padding: 20px;
  border-radius: 12px;

  align-items: center;
`;

export { Button };
