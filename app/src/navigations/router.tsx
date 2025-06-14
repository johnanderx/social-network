import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen, LoginScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
