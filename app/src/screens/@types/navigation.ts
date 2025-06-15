import { StackNavigationProp } from "@react-navigation/stack";

type ListOfScreens = {
  Register: undefined;
  Login: undefined;
  HomeScreen: undefined;
};

export type NavigationType = StackNavigationProp<ListOfScreens>;
