import React from "react";
import { View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NavigationType } from "../../@types/navigation";
import * as C from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Feed } from "../../components";
export default function HomeScreen() {
  const navigation = useNavigation<NavigationType>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <C.Header>
        <C.Title>JohnCoff.x</C.Title>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <FontAwesome name="heart-o" size={24} color="black" />
          {/* <FontAwesome name="heart" size={24} color="black" /> */}
          <FontAwesome6
            name="message"
            size={24}
            color="black"
            onPress={() => navigation.navigate("MessageScreen")}
          />
        </View>
      </C.Header>
      <Feed />
    </SafeAreaView>
  );
}
