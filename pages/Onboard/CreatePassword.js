import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
} from "react-native";
import { useState } from "react";
import { authSignUp } from "../../firebase";
import { Ionicons } from "@expo/vector-icons";

export const CreatePassword = ({ route, navigation }) => {
  console.log("ROUTE", route);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const fullName = `${route?.params?.firstName} ${route?.params?.lastName}`;

  const btn = async () => {
    try {
      setLoading(true);
      const res = await authSignUp(route?.params?.email, password, fullName);
      setLoading(false);
      if (res) {
        setLoading(false);
        navigation.navigate("UserSelect")
      }
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
              <View style={{ width: "100%", marginBottom: 20 }}>
                <TouchableOpacity
                  style={{ paddingLeft: 15 }}
                  onPress={() => navigation.pop()}
                >
                  <Ionicons name="arrow-back" size={30} color="#FFF" />
                </TouchableOpacity>
              </View>
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
                  color: "#FFF",
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
                  color: "#FFF",
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
                We highly value your privacy and assure you that we will never
                engage in selling, giving away, or sending any form of
                unsolicited spam.
              </Text>
            </View>
            <View>

                <>
                  <TouchableOpacity
                    onPress={btn}
                    disabled={!password || !confirmPassword}
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
                    <Text style={{ color: "white" }}>Next</Text>
                  </TouchableOpacity>
                </>

            </View>
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
