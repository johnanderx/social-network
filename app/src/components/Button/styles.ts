import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.button};

  width: 50%;
  padding: 20px;
  border-radius: 12px;

  align-items: center;
`;

export { Button };
