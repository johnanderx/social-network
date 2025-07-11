import { View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { AccountInput, ProfileList } from "../../components";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import useStore from "../../zustand/store";
import * as C from "./styles";

export default function MessageScreen() {
  const Data = [
    { id: "1", profilePhoto: "" },
    { id: "2", profilePhoto: "" },
    { id: "4", profilePhoto: "" },
    { id: "5", profilePhoto: "" },
    { id: "6", profilePhoto: "" },
    { id: "7", profilePhoto: "" },
    { id: "8", profilePhoto: "" },
    { id: "9", profilePhoto: "" },
  ];
  const theme = useTheme();
  const { isDarkMode } = useStore();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <C.Container>
        <AccountInput text="Pesquisar alguém" type="default" />
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={() => {
            return (
              <View
                style={{
                  padding: 5,
                  alignItems: "center",
                }}
              >
                <ProfileList />
              </View>
            );
          }}
        />
      </C.Container>
    </SafeAreaView>
  );
}
