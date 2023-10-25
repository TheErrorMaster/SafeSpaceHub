import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatPage } from '../pages/Chat';
import { CallPage } from '../pages/Call';
import { MapSelection } from '../pages/Component/MapSelection';

export const ChatStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen name="CallPage" component={CallPage} options={{ headerShown: false, title: 'call' }} />
      <Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: false }}  />
      <Stack.Screen name="selection" component={MapSelection} options={{ title: 'selection', headerShown: false, presentation: 'modal' }} />
    </Stack.Navigator>
  );
}