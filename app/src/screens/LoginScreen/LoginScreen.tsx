import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { Input, CreateCccountButton } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../@types/navigation";
import { TextBase } from "../../base/styles";
import * as C from "./styles";

export default function LoginScreen() {
  const navigation = useNavigation<NavigationType>();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 8,
      }}
    >
      <C.Title>Login</C.Title>
      <Input type="email-address" text="Seu e-mail" />
      <Input type="visible-password" text="Sua senha" />
      <TextBase onPress={() => navigation.navigate("Register")}>
        Não tem uma conta? Criar conta.
      </TextBase>
      <CreateCccountButton textButton="Login" />
    </View>
  );
}
