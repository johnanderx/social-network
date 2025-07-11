import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MessageInput } from "../../components/Input/Input";
import * as C from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import useStore from "../../zustand/store";

export default function ChatScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { isDarkMode } = useStore();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.background }}
      behavior={"height"}
      keyboardVerticalOffset={-50}
    >
      <View style={{ flex: 1 }}>
        <StatusBar style={isDarkMode ? "light" : "dark"} />
        <C.Header>
          <FontAwesome5
            onPress={() => navigation.goBack()}
            name="arrow-left"
            size={24}
            color={theme.text}
          />
          <C.HeaderText>Photo</C.HeaderText>
          <C.HeaderText>Nome da pessoa</C.HeaderText>
        </C.Header>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
            marginBottom: 50,
          }}
        >
          <MessageInput text="Mensagem" type="default" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
