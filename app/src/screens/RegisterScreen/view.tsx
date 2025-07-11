import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { NavigationType, RegisterData } from "../../@types/";
import { TextBase } from "../../base/styles";
import * as C from "./styles";
import { AccountInput, CreateCccountButton } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schema";
import useStore from "../../zustand/store";

export default function RegisterScreen() {
  const navigation = useNavigation<NavigationType>();
  const { isDarkMode } = useStore();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterData) => {
    console.log(data);
    navigation.navigate("Login");
  };

  useEffect(() => {
    register("name");
    register("email");
    register("password");
  }, [register]);

  return (
    <C.Container>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <C.Title>Cadastro</C.Title>
      <AccountInput
        type="default"
        text="Seu nome de usuário"
        onChangeText={(text) => setValue("name", text)}
        error={errors.name?.message}
      />
      <AccountInput
        type="email-address"
        text="Seu e-mail"
        onChangeText={(text) => setValue("email", text)}
        error={errors.email?.message}
      />
      <AccountInput
        type="visible-password"
        text="Sua senha"
        onChangeText={(text) => setValue("password", text)}
        error={errors.password?.message}
      />
      <TextBase onPress={() => navigation.navigate("Login")}>
        Já tem uma conta? Ir para login.
      </TextBase>
      <CreateCccountButton
        textButton="Cadastrar"
        event={handleSubmit(onSubmit)}
      />
    </C.Container>
  );
}
