import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MessagePage } from '../pages/Message';
import { CallPage } from '../pages/Call';
import { MapSelection } from '../pages/Component/MapSelection';
import { NotificationPage } from '../pages/Notification';


export const AppoitmentStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen name="Appoitment" component={NotificationPage} options={{ headerShown: false }} />
      <Stack.Screen name="Message" component={MessagePage} options={{ headerShown: false }}  />
    </Stack.Navigator>
  );
}