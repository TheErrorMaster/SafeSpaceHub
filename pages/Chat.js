import { StyleSheet, Text, View, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// import { FlatList, ScrollView } from '@gluestack-ui/themed';
import { Icon, ArrowUpIcon, ChevronRightIcon, ScrollView, Image, Input, InputField } from '@gluestack-ui/themed'
import { chats } from '../utils';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ChatPage = ({ navigation }) =>  {
    const messageColor = (obj) => { return (obj === 'bot' ? 'white' : 'lightblue') }
    const messageDirection = (obj) => { return (obj === 'bot' ? 'flex-start' : 'flex-end')}
    return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ margin: 10, marginBottom: 50}}>
        {
          chats?.map(x => {
            return (
              <View style={{ flex: 1, borderRadius: 5, padding: 10, marginTop: 10, backgroundColor: messageColor(x?.user), alignItems: messageDirection(x?.user), shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2}}>
                <View>
                  <Text>{x?.message}</Text>
                </View>

              </View>
            )
          })
        }
      </ScrollView>
      <View style={{ flex: 1, paddingTop: 10, alignSelf: 'center', justifyContent: 'center', position: 'absolute', bottom: 30, borderRadius: 100, width: '90%', flexDirection: 'row'}}>
        <Input
            variant='rounded'
            size="sm"
            style={{ width: '90%', height: '100%', maxHeight: 50}}
        >
          <InputField placeholder='Send a message' multiline />
        </Input>
        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => { console.log('hello')}}>
          <View style={{ flex: 1, width: '30%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
            <Icon as={ArrowUpIcon} h="$8" w="$7" color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
  }