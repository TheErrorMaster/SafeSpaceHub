import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '../pages/Home';
import { ChatPage } from '../pages/Chat';
import { SettingPage } from '../pages/Setting';
import { CallPage } from '../pages/Call';

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false}} />
        <Tab.Screen name="Chat" component={ChatPage} />
        <Tab.Screen name="Call" component={CallPage} />
        <Tab.Screen name="Setting" component={SettingPage} />
      </Tab.Navigator>
    );
  }
