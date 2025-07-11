import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBorder = styled(LinearGradient)`
  border-radius: 50px;
  height: 104px;
  width: 104px;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.View`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.input};
`;

export { Circle, GradientBorder };
