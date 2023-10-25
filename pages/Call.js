import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView, Image } from '@gluestack-ui/themed'
import { doctors } from '../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from "@expo/vector-icons";

export const CallPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, paddingLeft: 10, textAlign: "center" }}>
        Virtual Only Doctors
      </Text>
      <ScrollView>
        <View style={{ margin: 10 }}>
          {
            doctors?.map((x,i) => {
              return (
                <View key={i} style={{ flex: 1, borderRadius: 5, padding: 10, marginTop: 10, backgroundColor: 'white', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2 }}>
                  <TouchableOpacity onPress={() => { navigation.navigate('selection', { title: x?.name, address: "Virtual" }) }}>
                    <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                      <Image source={{ uri: x?.image }} size="sm" style={{ borderRadius: 50 }} alt={"image goes here"} />
                      <View>
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>{x?.name}</Text>
                        <Text style={{ fontSize: 15, paddingLeft: 10, opacity: .50 }}>{x?.specialties.join(", ")}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ChatPage");
          }}
        >
          <View
            style={{
              backgroundColor: "#004aad",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
              marginTop: 10,
              padding: 5,
              flexDirection: "row"
            }}
          >
            <Entypo name="chat" size={24} color="#FFF" />
            <Text
              style={{
                color: "black",
                margin: 10,
                color: "#fff",
                fontWeight: "700",
              }}
            >
              Chat with AI
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
