import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatPage } from '../pages/Chat';
import { CallPage } from '../pages/Call';



export const ChatStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator options={{ headerShown: false }}>
        <Stack.Screen name="CallPage" component={CallPage} options={{ headerShown: false, title: 'Call' }} />
        <Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: true, title: 'hello' }} />
      </Stack.Navigator>
    );
  }