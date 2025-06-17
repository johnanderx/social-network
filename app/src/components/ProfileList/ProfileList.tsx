import React from "react";
import { View } from "react-native";
import * as C from "./styles";
import { TextBase } from "../../base/styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../@types/navigation";
export default function ProfileList() {
  const navigation = useNavigation<NavigationType>();

  return (
    <C.Card onPress={() => navigation.navigate("ChatScreen")}>
      <View>
        <TextBase>Photo</TextBase>
      </View>
      <View>
        <TextBase>Nome de usuário</TextBase>
        <TextBase>Nome</TextBase>
      </View>
    </C.Card>
  );
}
