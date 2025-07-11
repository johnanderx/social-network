import styled from "styled-components/native";

const Card = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.input};
  border-radius: 14px;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;

export { Card };
