import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
