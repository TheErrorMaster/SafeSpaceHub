import {NavigationContainer} from '@react-navigation/native';
import { TabNavigator } from './navigation/TabNavigator';
import {AppNavigator } from "./navigation/AppNavigator"
import {AuthNavigator } from "./navigation/AuthNavigator"
 
export default function App() {
  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
