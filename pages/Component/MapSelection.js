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
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const dayjs = require("dayjs");

export const MapSelection = ({ route }) => {
  console.log("props", route);

  const windowHeight = Dimensions.get("screen").height;
  const [he, setHe] = useState(windowHeight / 1);
  const [currentDay, setCurrentDay] = useState(null);
  const [nextWeek, setNextWeek] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

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
            backgroundColor: "#FFF",
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
            <Text style={{ fontSize: 14, marginBottom: 8, fontWeight: "500" }}>
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
            <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
              Scheduled Availability:{" "}
            </Text>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 5 }}
              >
                {nextWeek.map((date, index) => (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#004aad",
                      marginHorizontal: 10,
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <Text key={index} style={{ color: "#FFF" }}>
                      {date.toDateString()}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            {availableTimeSlots.map((timeSlot, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleTimeSlotSelection(timeSlot)}
                style={{
                  padding: 10,
                  margin: 5,
                  borderRadius: 10,
                  backgroundColor:
                    selectedTimeSlot === timeSlot ? "#004aad" : "white",
                }}
              >
                <Text
                  style={{
                    color: selectedTimeSlot === timeSlot ? "white" : "#004aad",
                  }}
                >
                  {timeSlot}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={{
                backgroundColor: "#004aad",
                padding: 20,
                borderRadius: 20,
                marginTop: 30,
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
