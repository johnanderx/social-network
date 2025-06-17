import { View, FlatList } from "react-native";
import React from "react";
import { AccountInput, ProfileList } from "../../components";
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
  return (
    <View style={{ marginTop: 50, alignItems: "center" }}>
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
    </View>
  );
}
