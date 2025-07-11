import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  RegisterScreen,
  LoginScreen,
  HomeScreen,
  MessageScreen,
  ChatScreen,
} from "../screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "styled-components/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const auth = true;

export function Route() {
  return auth ? <PrivateRoute /> : <PublicRoute />;
}

export function PublicRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export function PrivateRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={TabRoute} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export function TabRoute() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.input,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: theme.button,
        tabBarInactiveTintColor: theme.text,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Post"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Rells"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-circle-outline" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="manage-accounts" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
