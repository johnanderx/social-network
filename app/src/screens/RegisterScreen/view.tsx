import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../@types/navigation";
import { TextBase } from "../../base/styles";
import * as C from "./styles";
import { Input, CreateCccountButton } from "../../components";

export default function RegisterScreen() {
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
      <StatusBar style="dark" />
      <C.Title>Cadastro</C.Title>
      <Input type="default" text="Seu nome de usuário" />
      <Input type="email-address" text="Seu e-mail" />
      <Input type="visible-password" text="Sua senha" />
      <TextBase onPress={() => navigation.navigate("Login")}>
        Já tem uma conta? Ir para login.
      </TextBase>
      <CreateCccountButton textButton="Cadastrar" />
    </View>
  );
}
