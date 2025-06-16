import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RegisterScreen, LoginScreen, HomeScreen } from "../screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const auth = true;

export function Route() {
  return auth ? <TabRoute /> : <StackRoute />;
}
export function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function TabRoute() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={30} color="black" />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="search-outline" size={30} color="black" />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Post"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="add-circle-outline" size={30} color="black" />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Rells"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="play-circle-outline" size={30} color="black" />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="manage-accounts" size={30} color="black" />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
