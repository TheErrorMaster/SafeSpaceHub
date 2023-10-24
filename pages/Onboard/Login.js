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
  import { authSignIn } from '../../firebase/index';
  
  export const Login = ({ navigation}) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const btn = async () => {
      try {
        setLoading(true);
        const loginUser = await authSignIn(user, password);
        setLoading(false);
      } catch (e) {
        console.log("e", e);
      }
    };
  
    return (
      <>
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
                      marginBottom: 20,
                      marginLeft: 40,
                    }}
                  >
                    Sign In
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
                    placeholder="Email"
                    onChangeText={setUser}
                    value={user}
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
                    placeholderTextColor={"#8A8A8A"}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                  />
                  <Text
                    style={{
                      color: "#FFF",
                      fontSize: 14,
                      marginTop: 10,
                      width: "90%",
                      textAlign: "right",
                    }}
                  >
                    Forgot Password?{" "}
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
                        backgroundColor: "#004aad",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        marginTop: 20,
                      }}
                    >
                      <Text style={{ color: "white" }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {navigation.navigate("SignUp")}}
                    style={{
                      width: "90%",
                      justifyContent: "center",
                      borderBottomColor: "gray",
                    
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      marginTop: 20,
                    }}
                  >
                    <Text style={{ color: "white" }}>Already have an account? <Text style={{ color: "#004aad" }}>Sign Up</Text></Text>
                  </TouchableOpacity>
                  </>
                  )}
                </View>
              </View>
            </View>
            </Pressable>
          </KeyboardAvoidingView>
      </>
    );
  };
  