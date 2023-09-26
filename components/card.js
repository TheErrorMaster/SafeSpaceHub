import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight,
  } from "react-native";
import { useState } from "react";
import { PanGestureHandler } from 'react-native-gesture-handler';

export const Card = (props) => {
    const {obj, pop, close} = props || {};
    const {title, name, age, summary, image, breed} = obj || {};
    const windowHeight = Dimensions.get('screen').height;
    const [he, setHe] = useState(windowHeight/1.3)
    const handleGesture = (evt) => {
      let {nativeEvent} = evt;
      let modalHeight = he - nativeEvent?.y
      if(modalHeight < windowHeight - 100) {
        setHe(modalHeight);
      }
      if(he < 100) {
        setHe(windowHeight/1.3);
        close();
      }
    }
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={pop} onRequestClose={() => close()} >

      {/* on background click exit */}
      <TouchableHighlight style={{flex:1}} onPress={() => {setHe(windowHeight/1.3); close()}} underlayColor={"transparent"}>
      <View />
      </TouchableHighlight>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "100%",
              height: he,
              backgroundColor: "#ecf8db",
              borderRadius: 20,
            }}
          >
            {/* <PanGestureHandler onGestureEvent={handleGesture}> */}
              <View style={{ flexDirection: 'column', height: 50, width: '100%'}}>
                <View style={{ width: '100%', alignItems: 'center'}}>
                  <View style={{ width: 100, height: 5, backgroundColor: 'gray', borderRadius: 10, margin: 5}}></View>
                </View>
                <View style={{ width: "100%", alignItems: 'flex-end', paddingRight: 10}}>
                  <TouchableOpacity
                    onPress={() => {
                      setHe(windowHeight/1.3);
                      close()
                    }}
                  >
                    <Text style={{ fontSize: 24}}>X</Text>
                  </TouchableOpacity>
              </View>
              </View>
            {/* </PanGestureHandler> */}

            <View style={{ 
                alignSelf: 'center',
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20}}>{title}</Text>
            </View>
            <ScrollView style={{
                flex: 1,
                width: '100%',
                padding: 10,
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20}}>Name: </Text>
                <Text style={{ fontSize: 14, }}>{name}</Text>

                <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 10}}>Age: </Text>
                <Text style={{ fontSize: 14, }}>{age}</Text>

                <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 10}}>Breed: </Text>
                <Text style={{ fontSize: 14, }}>{breed}</Text>

                <Text style={{ fontSize: 14, fontWeight: '200', color: 'blue', paddingTop: 10, paddingBottom: 20 }}>{summary}</Text>
                <Image style={{ width: '100%', height: 200}} source={{uri: image}} />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};
