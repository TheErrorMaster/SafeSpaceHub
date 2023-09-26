import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    KeyboardAvoidingView,
    TextInput,
  } from "react-native";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Btn } from '../btn/index'


export const Post = (props) => {
    const {coordinate, pop, close} = props || {};
    const {latitude,  longitude} = coordinate || {};
    const [event, setEvent] = useState("");
    const [date, setDate] = useState(new Date());

    const endModal = () => {
      close();
      setDate(new Date());
      setEvent("")
    }
    
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={pop} onRequestClose={endModal} >

      {/* on background click exit */}
      <TouchableHighlight style={{flex:1}} onPress={endModal} underlayColor={"transparent"}>
      <View />
      </TouchableHighlight>

      <View>
          <View
            style={{
              height: "70%",
              backgroundColor: "#ecf8db",
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Event: </Text>
            <TextInput
                style={{ 
                    height: 40,
                    width: '50%',
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
                placeholder="Event"
                onChangeText={setEvent}
                value={event}
            />
            <Text>Date & Time: </Text>
            <DateTimePicker minimumDate={new Date()} value={date} mode={"datetime"} style={{ paddingBottom: 20}} onChange={(a,b) => setDate(b)}/>

            <Btn onPress={endModal} style={{width: '50%', height: 40, justifyContent: 'center'}} text="Create Event" textColor="white" bgColor="blue" />

          </View>
        </View>
      </Modal>
    </>
  );
};
