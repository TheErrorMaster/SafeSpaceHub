import { StyleSheet, Text, View, Button } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const SettingPage = ({ navigation }) =>  {
    // const Stack = createNativeStackNavigator();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
