import { Text, View, TouchableOpacity } from 'react-native';
import { Icon, ArrowUpIcon, ScrollView, Input, InputField } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { listMessage, messageDoctor, updateMessage } from '../firebase';


export const MessagePage = ({ route }) => {
  const messageColor = (obj) => { return (obj === 'system' ?  'white' : (obj === 'user' ? 'lightblue' : 'red')) }
  const messageDirection = (obj) => { return (obj === 'system' ?  'center' : (obj === 'user' ? 'flex-end' : 'flex-end')) }
  const [mess, setMess] = useState([])
  const [input, setInput] = useState("")
  const scrollViewRef = React.useRef();
  const doctorName = route?.params?.doctorName || '';
  const username = route?.params?.user || '';
  const appointment = route?.params?.appointment || '';

  const updateMessages = (message) => {
    setMess(message)
  }

  useEffect(() => {
    messageDoctor(doctorName, username, appointment);
    const message = listMessage(appointment, updateMessages);
  }, [])


  const btn = async () => {
    try {
      if (input !== '') {
        updateMessage({role: 'user', content: input}, appointment)
        setInput('');
      }
    } catch (e) {
      console.log('e', e);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ margin: 0, marginBottom: 70 }}
        ref={scrollViewRef}
        onContentSizeChange={() => { () => scrollViewRef.current.scrollToEnd({ animated: true }) }}
      >
        {
          mess?.map((x,i) => {
            return (
              <View key={i} style={{ flex: 1, padding: 5, alignItems: messageDirection(x?.role) }}>
                <View style={{ backgroundColor: messageColor(x?.role), padding: 10, borderRadius: 5, shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2 }}>
                  <Text>{x?.content}</Text>
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
          <InputField placeholder='Send a message' multiline onChangeText={(a) => setInput(a)} value={input} />
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



