import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapSelection } from '../pages/Component/MapSelection';
import { HomePage } from '../pages/Home';



export const MapStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="MapSelection" component={MapSelection} options={{ headerShown: false, presentation: 'modal' }} />
    </Stack.Navigator>
  );
}