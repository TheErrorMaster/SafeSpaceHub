import {NavigationContainer} from '@react-navigation/native';
import { TabNavigator } from './navigation/TabNavigator';
import { config, GluestackUIProvider} from "@gluestack-ui/themed"
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GluestackUIProvider config={config.theme}>
          <TabNavigator />
        </GluestackUIProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}