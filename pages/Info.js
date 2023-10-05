 import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FlatList } from '@gluestack-ui/themed';
import { Icon, ChevronRightIcon } from '@gluestack-ui/themed'
import { data } from '../utils';
import { Accordion } from '../components/accordion';
import { SafeAreaView } from 'react-native-safe-area-context';

export const InfoPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, paddingLeft: 10}}>Info</Text>
      <View style={{ margin: 10}}>
        <FlatList 
          data={data}
          renderItem={({ item }) => (
            <View style={{ borderBottomWidth: 1, borderBottomColor:'black' }}>
              <Accordion>
                 <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 20}}>{item?.name}</Text>
                  <Icon as={ChevronRightIcon} h="$8" w="$7" color="black" />
               </View>
               <View>
                {item?.title?.map((x,i) => {
                  return(
                    <View>
                      <Text>{x}</Text>
                      <Text>{item?.response[i]}</Text>
                    </View>
                  )
                })}
                {/* <Text>Hello</Text> */}
               </View>
              </Accordion>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      
      {/* <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignContent: 'flex-start', position: 'absolute', backgroundColor: 'blue', bottom: 50, right: 50, borderRadius: 100, width: 60, height: 60}}>
        <TouchableOpacity onPress={() => { console.log('hello') }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex:1,}}>
            <Icon as={MessageCircleIcon} h="$8" w="$7" color="white" />
          </View>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
  }