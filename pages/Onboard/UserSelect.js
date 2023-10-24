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

export const UserSelect = ({navigation}) => {
  const [select, setSelect] = useState("");
  const [loading, setLoading] = useState(false);

  const btn = async () => {
    try {
      setLoading(true);
      // const loginUser = await login(user, password);
      const loginUser = true;
      // setLoading(false);
      // loginUser ? close() : Alert.alert('wrong login infor');
      close();
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
                Welcome to {"\n"}Safe Space Hub!
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
                Choose a role to get started!
              </Text>
              <View
                style={{ marginTop: 30, width: "100%", alignItems: "center" }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "blue",
                    width: "90%",
                    height: 90,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#FFF", fontWeight: "500" }}>
                    I am a Doctor
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "blue",
                    width: "90%",
                    height: 90,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#FFF", fontWeight: "500" }}>
                    I am a User
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>{loading && <Text>Loading</Text>}</View>
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
