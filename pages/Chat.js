import { StyleSheet, Text, View, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// import { FlatList, ScrollView } from '@gluestack-ui/themed';
import { Icon, ArrowUpIcon, ChevronRightIcon, ScrollView, Image, Input, InputField } from '@gluestack-ui/themed'
import { chats } from '../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export const ChatPage = ({ navigation }) => {
  const messageColor = (obj) => { return (obj === 'bot' ? 'white' : 'lightblue') }
  const messageDirection = (obj) => { return (obj === 'bot' ? 'flex-start' : 'flex-end') }
  const [mess, setMess] = useState([])
  const [input, setInput] = useState("")
  const btn = () => {
    try {
      if (input !== '') {
        setMess([...mess, { user: 'maui', message: input }]);
      }
    } catch (e) {
      console.log('e', e);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.pop()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView style={{ margin: 0, marginBottom: 70 }}>
        {
          mess?.map(x => {
            return (
              <View style={{ flex: 1, padding: 5, alignItems: messageDirection(x?.user), shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2 }}>
                <View style={{ backgroundColor: messageColor(x?.user), padding: 10, borderRadius: 5 }}>
                  <Text>{x?.message}</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', position: 'absolute', bottom: 20, borderRadius: 100, width: '90%', flexDirection: 'row' }}>
        <Input
          variant='rounded'
          size="sm"
          style={{ width: '90%', height: '100%', maxHeight: 50 }}
        >
          <InputField placeholder='Send a message' multiline onChangeText={(a) => setInput(a)} />
        </Input>
        <TouchableOpacity style={{ paddingLeft: 10, justifyContent: 'center' }} onPress={btn}>
          <View style={{ flex: 1, width: 30, maxHeight: 30, borderRadius: 5, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, backgroundColor: 'lightblue', borderRadius: 200 }}>
            <Icon as={ArrowUpIcon} h="$8" w="$7" color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



