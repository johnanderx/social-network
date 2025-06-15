import { StatusBar } from "expo-status-bar";
import { Route } from "./src/navigations/router";
import { TextBase } from "./src/base/styles";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <TextBase>Fontes não carregadas.</TextBase>;
  }
  return <Route />;
}
