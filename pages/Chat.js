import { Text, View, TouchableOpacity } from 'react-native';
import { Icon, ArrowUpIcon, ScrollView, Input, InputField } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export const ChatPage = ({ navigation }) => {
  const messageColor = (obj) => { return (obj === 'assistant' ? 'white' : 'lightblue') }
  const messageDirection = (obj) => { return (obj === 'assistant' ? 'flex-start' : 'flex-end') }
  const [mess, setMess] = useState([{ role: "system", content: "you are a medical bot that is ready to answer people's questions about sti and other stuff" }])
  const [input, setInput] = useState("")
  const scrollViewRef = React.useRef();

  const fetchChat = async () => {
    try {
      const OPENAI_KEY = ""; // ask me for the api
      const URL = 'https://api.openai.com/v1/chat/completions';


      const response = await fetch(URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: mess,
        })
      });
      const resp = await response.json();
      setMess([...mess, resp?.choices[0]?.message]);
    } catch (e) {
      console.log('e', e);
    }
  };


  useEffect(() => {
    if (mess[mess.length - 1]?.role === 'user') {
      fetchChat();
    }
  }, [mess])


  const btn = async () => {
    try {
      if (input !== '') {
        setMess([...mess, { role: 'user', content: input }]);
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
          mess?.slice(1)?.map(x => {
            return (
              <View style={{ flex: 1, padding: 5, alignItems: messageDirection(x?.role), shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2 }}>
                <View style={{ backgroundColor: messageColor(x?.role), padding: 10, borderRadius: 5 }}>
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



