import {NavigationContainer} from '@react-navigation/native';
import { TabNavigator } from './navigation/TabNavigator';
import {AppNavigator } from "./navigation/AppNavigator"
import {AuthNavigator } from "./navigation/AuthNavigator"
import { config, GluestackUIProvider} from "@gluestack-ui/themed"
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GluestackUIProvider config={config.theme}>
        <AuthNavigator />
        </GluestackUIProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}