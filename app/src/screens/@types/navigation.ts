import { StackNavigationProp } from "@react-navigation/stack";

type ListOfScreens = {
  Register: undefined;
  Login: undefined;
};

export type NavigationType = StackNavigationProp<ListOfScreens>;
