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
import { HStack } from "@gluestack-ui/themed";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const dayjs = require("dayjs");

export const MapSelection = ({ route }) => {
  const windowHeight = Dimensions.get("screen").height;
  const [he, setHe] = useState(windowHeight / 1);
  const [currentDay, setCurrentDay] = useState(null);
  const [nextWeek, setNextWeek] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDaySlot, setSelectedDaySlot] = useState(null);

  const availableTimeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleDaySlotSelection = (daySlot) => {
    setSelectedDaySlot(daySlot);
  };

  const handleAppointment = async () => {
    try{

    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Set current day
    setCurrentDay(currentDate);

    // Get the next week
    const nextWeekDates = [];
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      nextWeekDates.push(nextDate);
    }
    setNextWeek(nextWeekDates);
  }, []);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "100%",
            height: he,
            backgroundColor: "#f9f9f9",
            borderRadius: 20,
          }}
        >
          <View style={{ flexDirection: "column", height: 50, width: "100%" }}>
            <View style={{ width: "100%", alignItems: "center" }}>
              <View
                style={{
                  width: 100,
                  height: 5,
                  backgroundColor: "gray",
                  borderRadius: 10,
                  margin: 5,
                }}
              ></View>
            </View>
          </View>
          <ScrollView
            style={{
              flex: 1,
              width: "100%",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 8, fontWeight: "700" }}>
              {route.params.title}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <View style={{ flexDirection: "column" }}>
                <Entypo name="home" size={24} color="black" />
                {/* <Zocial name="email" size={24} color="black" />
                <Ionicons name="call" size={24} color="black" /> */}
              </View>
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 20,
                  marginTop: 4,
                }}
              >
                <Text style={{ fontSize: 14, marginBottom: 8 }}>
                  {route.params.address}
                </Text>
                {/* <Text style={{ fontSize: 14, marginBottom: 10 }}>
                  test@test.com
                </Text>
                <Text style={{ fontSize: 14 }}>310-222-2222</Text> */}
              </View>
            </View>
            <Text
              style={{ fontWeight: "500", fontSize: 20, marginVertical: 20 }}
            >
              Choose Day and Time Available{" "}
            </Text>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: 15 }}
              >
                {nextWeek.map((date, index) => (
                  <TouchableOpacity
                    onPress={() => handleDaySlotSelection(date)}
                    style={{
                      backgroundColor:
                        selectedDaySlot === date ? "lightblue" : "#004aad",
                      marginHorizontal: 10,
                      padding: 10,
                      borderRadius: 10,
                      borderColor: "#004aad",
                      borderWidth: 1,
                    }}
                  >
                    <Text
                      key={index}
                      style={{
                        color: selectedDaySlot === date ? "#004aad" : "#FFF",
                      }}
                    >
                      {date.toDateString()}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <HStack style={{ flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
              {availableTimeSlots.map((timeSlot, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleTimeSlotSelection(timeSlot)}
                  style={{
                    padding: 10,
                    margin: 5,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    backgroundColor:
                      selectedTimeSlot === timeSlot ? "#004aad" : "white",
                  }}
                >
                  <Text
                    style={{
                      color:
                        selectedTimeSlot === timeSlot ? "white" : "#004aad",
                    }}
                  >
                    {timeSlot}
                  </Text>
                </TouchableOpacity>
              ))}
            </HStack>
            <TouchableOpacity
            onPress={handleAppointment}
            disabled={!selectedTimeSlot || !selectedDaySlot}
              style={{
                backgroundColor: "#004aad",
                padding: 20,
                borderRadius: 20,
                marginTop: 390,
              }}
            >
              <Text style={{ color: "#FFF", textAlign: "center" }}>
                Book Appointment
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
