import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '../pages/Home';
import { SettingPage } from '../pages/Setting';
import { CallPage } from '../pages/Call';
import { ChatPage } from '../pages/Chat';
import { Icon, MessageCircleIcon, PhoneIcon, BellIcon, InfoIcon, StarIcon, KeyboardAvoidingView } from '@gluestack-ui/themed'
import { InfoPage } from '../pages/Info';
import { ChatStack } from './ChatStack';
import { NotificationPage } from '../pages/Notification';
import { MapStack } from './MapStack';

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1}}>
        <Tab.Navigator options={{ headerShown: false }}>
          <Tab.Screen name="Home" component={MapStack} options={{ 
            headerShown: false,
            tabBarIcon: (tab) => (<Icon as={StarIcon} h="$5" w="$5" color={tab?.color} />)
          }} />
          <Tab.Screen name="Info" component={InfoPage} options={{ 
            headerShown: false,
            tabBarIcon: (tab) => (<Icon as={InfoIcon} h="$5" w="$5" color={tab?.color} />)
          }}/>
          <Tab.Screen name="Call" component={ChatStack} options={{ 
            headerShown: false,
            tabBarIcon: (tab) => (<Icon as={PhoneIcon} h="$5" w="$5" color={tab?.color} />)
          }}/>
          <Tab.Screen name="Appointments" component={NotificationPage} options={{
            headerShown: true,
            // tabBarStyle: {
            //   display: 'none',
            // },
            tabBarIcon: (tab) => (<Icon as={BellIcon} h="$5" w="$5" color={tab?.color} />)
          }} />
        </Tab.Navigator>
      </KeyboardAvoidingView>
    );
  }