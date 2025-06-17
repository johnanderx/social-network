import { StackNavigationProp } from "@react-navigation/stack";

type ListOfScreens = {
  Register: undefined;
  Login: undefined;
  HomeScreen: undefined;
  MessageScreen: undefined;
  ChatScreen: undefined;
};

export type NavigationType = StackNavigationProp<ListOfScreens>;
