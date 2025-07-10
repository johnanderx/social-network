import { StatusBar } from "expo-status-bar";
import { Route } from "./src/navigations/router";
import { NavigationContainer } from "@react-navigation/native";
import { TextBase } from "./src/base/styles";
import { ThemeProvider } from "styled-components/native";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "./src/global/styles";
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

  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  if (!fontsLoaded) {
    return <TextBase>Fontes não carregadas.</TextBase>;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </NavigationContainer>
  );
}
