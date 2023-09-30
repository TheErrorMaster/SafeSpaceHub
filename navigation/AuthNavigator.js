import { createStackNavigator } from "@react-navigation/stack";
import { SignUp } from "../pages/Onboard/SignUp";
import { CreatePassword } from "../pages/Onboard/CreatePassword";

export const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePassword"
        component={CreatePassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
