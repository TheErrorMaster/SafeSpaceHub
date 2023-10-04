import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
} from "react-native";
import { useState } from "react";
import { Text, View } from "@gluestack-ui/themed";
// import { collection, getDocs, doc, query, where } from 'firebase/firestore';
// import {db} from '../firebase/firebaseConfig';
// import {login} from '../firebase/user';

export const Welcome = (props) => {
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
            style={{ flex: 1, alignItems: "center", justifyContent: "space-between", marginVertical: 90 }}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 24,
                borderColor: "#FFF",
                borderWidth: 2,
                padding: 20,
                textTransform: "uppercase",
              }}
            >
              Safe{" "}
              <Text
                style={{
                  color: "#004aad",
                  fontSize: 24,
                  textTransform: "uppercase",
                  fontWeight: "600",
                }}
              >
                SpaceHub
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#004aad",
                width: "90%",
                borderRadius: 20,
                alignItems: "center",
                padding: 14,
              }}
            >
              <Text style={{ color: "#FFF" }}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
