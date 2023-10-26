import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppointmentModal = ({ modalVisible, setModalVisible, data }) => {
  const navigation = useNavigation();

  const HandleText = () => {
    navigation?.navigate("Message")
    setModalVisible(false)
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Pressable
            onPress={() => setModalVisible(!modalVisible)}
          >
          <View style={{ width: 260, alignItems: "flex-end", bottom: 10 }}>
            <Ionicons name="ios-close" size={24} color="black" />
          </View>
          </Pressable>

          <Text
            style={{
              fontWeight: "500",
              textAlign: "center",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            How would you like to do{"\n"} your appointment?
          </Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Ionicons name="call" size={24} color="#FFF" />
            <Text style={styles.textStyle}>Call</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={HandleText}
            
          >
            <MaterialIcons name="sms" size={24} color="#FFF" />
            <Text style={styles.textStyle}>Text</Text>
          </Pressable>
          {/* <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialCommunityIcons
              name="face-man-outline"
              size={24}
              color="#FFF"
            />
            <Text style={styles.textStyle}>Facetime</Text>
          </Pressable> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40404080",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 230,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#004aad",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
    // textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AppointmentModal;
