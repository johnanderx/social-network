import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { Input } from "../../components";

export default function RegisterScreen() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Input />
      <Input />
    </View>
  );
}
