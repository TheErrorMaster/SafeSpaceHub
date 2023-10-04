import { createStackNavigator } from "@react-navigation/stack";
import { SignUp } from "../pages/Onboard/SignUp";
import { CreatePassword } from "../pages/Onboard/CreatePassword";
import { UserSelect } from "../pages/Onboard/UserSelect";
import { Welcome } from "../pages/Onboard/Welcome";
import { Login } from "../pages/Onboard/Login";
import { ForgotPassword } from "../pages/Onboard/ForgotPassword";

export const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        name="UserSelect"
        component={UserSelect} 
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
