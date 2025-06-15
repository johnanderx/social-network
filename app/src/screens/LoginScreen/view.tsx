import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../@types/navigation";
import { TextBase } from "../../base/styles";
import { Input, CreateCccountButton } from "../../components";
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
      <StatusBar style="dark" />
      <C.Title>Login</C.Title>
      <Input type="email-address" text="Seu e-mail" />
      <Input type="visible-password" text="Sua senha" />
      <TextBase onPress={() => navigation.navigate("Register")}>
        Não tem uma conta? Criar conta.
      </TextBase>
      <CreateCccountButton
        textButton="Login"
        event={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}
