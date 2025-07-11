import React from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NavigationType } from "../../@types/navigation";
import * as C from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Feed } from "../../components";
import { useTheme } from "styled-components/native";
import useStore from "../../zustand/store";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationType>();
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useStore();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <C.Header>
        <C.Title>JohnCoff.x</C.Title>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TouchableOpacity onPress={toggleTheme}>
            <FontAwesome
              name={isDarkMode ? "sun-o" : "moon-o"}
              size={24}
              color={theme.text}
            />
          </TouchableOpacity>
          <FontAwesome name="heart-o" size={24} color={theme.text} />
          <FontAwesome6
            name="message"
            size={24}
            color={theme.text}
            onPress={() => navigation.navigate("MessageScreen")}
          />
        </View>
      </C.Header>
      <Feed />
    </SafeAreaView>
  );
}
