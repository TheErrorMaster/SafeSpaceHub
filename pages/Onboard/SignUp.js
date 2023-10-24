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
import { Ionicons } from "@expo/vector-icons";

export const SignUp = ({ route, navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const btn = () => {
    try {
      navigation.navigate("CreatePassword", {
        email: email,
        firstName: firstName,
        lastName: lastName,
      });
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
                Welcome
              </Text>
              <Text
                style={{
                  color: "#8A8A8A",
                  fontSize: 14,
                  width: "90%",
                  textAlign: "left",
                  marginBottom: 20,
                }}
              >
                Create an account for exclusive access to std support!
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
                placeholder="First Name"
                onChangeText={setFirstName}
                value={firstName}
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
                placeholderTextColor={"#8A8A8A"}
                placeholder="Last Name"
                onChangeText={setLastName}
                value={lastName}
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
                placeholder="Email"
                placeholderTextColor={"#8A8A8A"}
                onChangeText={setEmail}
                value={email}
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
              {!loading && (
                <>
                  <TouchableOpacity
                    onPress={btn}
                    disabled={!email}
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
                  <TouchableOpacity
                    //  onPress={btn}
                    style={{
                      justifyContent: "center",
                      borderBottomColor: "gray",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      marginTop: 20,
                    }}
                  >
                    <Text style={{ color: "white" }}>
                      Already have an accout?{" "}
                      <Text style={{ color: "#004aad" }}>Sign In</Text>
                    </Text>
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
