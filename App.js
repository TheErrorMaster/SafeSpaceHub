import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator } from "./navigation/AuthNavigator"
import { TabNavigator } from './navigation/TabNavigator';
import { StatusBar } from 'react-native';
import { config, GluestackUIProvider} from "@gluestack-ui/themed"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, {useEffect} from 'react'
import { auth } from './firebase/config';
import { onAuthStateChanged} from "firebase/auth";

export default function App() {
  const [auths, setAuths] = React.useState(false);

  React.useEffect( () => {
    onAuthStateChanged(auth, (data) => {
      setAuths(data ? true : false)
    })
    StatusBar.setBarStyle('#000')
  },[]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GluestackUIProvider config={config.theme}>
          {auths ? (
          <TabNavigator />
          ) : (
          <AuthNavigator />
          )}
        </GluestackUIProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}