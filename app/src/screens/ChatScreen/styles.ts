import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props.theme.input};
  margin-top: 40px;
  padding: 30px;
  border-radius: 12px;
`;

const HeaderText = styled.Text`
  color: ${(props) => props.theme.text};
  font-family: Poppins_400Regular;
`;

export { Header, HeaderText };
