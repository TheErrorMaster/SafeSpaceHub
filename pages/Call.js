import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView, Image } from '@gluestack-ui/themed'
import { doctors } from '../util';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CallPage = ({ navigation }) =>  {
    return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ margin: 10, backgroundColor: 'lightblue', borderRadius: 5 }}>
          <Text style={{ fontSize: 30, margin: 10}}>Talk to a Bot</Text>
          <TouchableOpacity onPress={() => { console.log('hello')}}>
            <View style={{ backgroundColor: 'green', borderRadius: 5, justifyContent: 'center', alignItems: 'center', margin: 10}}>
              <Text style={{ color: 'black', margin: 10}}>Message a Bot</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 30, paddingLeft: 10}}>Virtual Only Doctors</Text>
        <View style={{ margin: 10}}>
          {
            doctors?.map(x => {
              return (
                <View style={{ flex: 1, borderRadius: 5, padding: 10, marginTop: 10, backgroundColor: 'white', shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2}}>
                  <TouchableOpacity onPress={() => {navigation.navigate('ChatPage')}}>
                    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                      <Image source={{ uri: x?.image }} size="xs" style={{ borderRadius: 50}} alt={"image goes here"} />
                      <Text style={{ fontSize: 20, paddingLeft: 10}}>{x?.name}</Text>
                    </View>
                    <View style={{ flex: 1, }}>
                      <Text style={{ fontSize: 15}}>Location: {x?.street}, {x?.city}, {x?.state}</Text>
                      <Text style={{ fontSize: 15}}>Specialties: {x?.specialties.join(", ")}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  }