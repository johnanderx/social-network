import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NavigationType, LoginData } from "../../@types/";
import { TextBase } from "../../base/styles";
import * as C from "./styles";
import { AccountInput, CreateCccountButton } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schema";
import useStore from "../../zustand/store";
export default function LoginScreen() {
  const navigation = useNavigation<NavigationType>();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);
  const { isDarkMode } = useStore();
  return (
    <C.Container>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <C.Title>Login</C.Title>
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
      <TextBase onPress={() => navigation.navigate("Register")}>
        Não tem uma conta? Criar conta.
      </TextBase>
      <CreateCccountButton textButton="Login" event={handleSubmit(onSubmit)} />
    </C.Container>
  );
}
