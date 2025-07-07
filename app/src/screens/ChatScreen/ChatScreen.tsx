import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MessageInput } from "../../components/Input/Input";
import * as C from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
export default function ChatScreen() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={"height"}
      keyboardVerticalOffset={-50}
    >
      <View style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <C.Header>
          <FontAwesome5
            onPress={() => navigation.goBack()}
            name="arrow-left"
            size={24}
            color="black"
          />
          <Text>Photo</Text>
          <Text>Nome da pessoa</Text>
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
