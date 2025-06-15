import styled from "styled-components/native";
import { TextBase } from "../../base/styles";
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 50px;
  padding: 0px 14px 0px 14px;
`;

const Title = styled(TextBase)`
  font-family: Poppins_600SemiBold;
  font-size: 24px;
`;

export { Header, Title };
