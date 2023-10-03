import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    Pressable,
  } from "react-native";
  import { useState } from "react";
  // import { collection, getDocs, doc, query, where } from 'firebase/firestore';
  // import {db} from '../firebase/firebaseConfig';
  // import {login} from '../firebase/user';
  
  export const CreatePassword = ({route, navigation}) => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const btn = async () => {
      try {
        setLoading(true);
        // const loginUser = await login(user, password);
        const loginUser = true;
        // setLoading(false);
        // loginUser ? close() : Alert.alert('wrong login infor');
        navigation.navigate("UserSelect")
      } catch (e) {
        console.log("e", e);
      }
    };
  
    return (
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Pressable onPress={Keyboard.dismiss}>
            <View
              style={{
                height: "100%",
                backgroundColor: "#000",
              }}
            >
              <View
                style={{ flex: 1, justifyContent: "space-around", width: "100%" }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      fontSize: 26,
                      width: "100%",
                      marginBottom: 10,
                      marginLeft: 40,
                    }}
                  >
                    Create a Password
                  </Text>
                  <TextInput
                    style={{
                      height: 40,
                      width: "90%",
                      margin: 12,
                      borderWidth: 1,
                      borderBottomColor: "gray",
                      padding: 10,
                      color: "#FFF"
                    }}
                    placeholderTextColor={"#8A8A8A"}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                  />
                  <TextInput
                    style={{
                      height: 40,
                      width: "90%",
                      margin: 12,
                      borderWidth: 1,
                      borderBottomColor: "gray",
                      padding: 10,
                      color: "#FFF"
                    }}
                    placeholder="Confirm Password"
                    placeholderTextColor={"#8A8A8A"}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry={true}
                  />
                  <Text
                    style={{
                      color: "#8A8A8A",
                      fontSize: 12,
                      marginTop: 10,
                      width: "90%",
                      textAlign: "left",
                    }}
                  >
                    We highly value your privacy and assure you that we will never engage in selling, giving away, or sending any form of unsolicited spam.
                  </Text>
                </View>
                <View>
                  {!loading && (
                    <>
                    <TouchableOpacity
                      onPress={btn}
                      style={{
                        width: "90%",
                        height: 40,
                        justifyContent: "center",
                        borderBottomColor: "gray",
                        borderRadius: 20,
                        backgroundColor: "blue",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        marginTop: 20,
                      }}
                    >
                      <Text style={{ color: "white" }}>Next</Text>
                    </TouchableOpacity>
                   </>
                  )}
                  {loading && <Text>Loading</Text>}
                </View>
              </View>
            </View>
            </Pressable>
          </KeyboardAvoidingView>
    );
  };
  