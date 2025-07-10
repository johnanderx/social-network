import { View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import Story from "../Story/Story";
import Posts from "../Posts/Posts";

export default function Feed() {
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

  const DataTwo = [
    {
      id: "1",
    },

    { id: "2" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={() => {
          return (
            <View style={{ padding: 5, marginBottom: 40 }}>
              <Story />
            </View>
          );
        }}
      />
      <FlatList
        data={DataTwo}
        keyExtractor={(item) => item.id}
        renderItem={() => {
          return (
            <View
              style={{
                padding: 5,
                alignItems: "center",
              }}
            >
              <Posts />
            </View>
          );
        }}
      />
    </View>
  );
}
