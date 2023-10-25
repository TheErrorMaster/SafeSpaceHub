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
import { HStack, VStack } from "@gluestack-ui/themed";
import { useState, useEffect } from "react";
import { insurance } from "../../utils";
const dayjs = require("dayjs");
import { setAppointment, authUser } from '../../firebase/index';

export const MapSelection = ({ navigation, route }) => {
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
    try {
      const doctor = route?.params?.title || '';
      const location = route?.params?.address || '';
      const time = `${selectedDaySlot?.toDateString() || ''} ${selectedTimeSlot || ''}`;
      const fullName = authUser()?.displayName || '';
      await setAppointment(doctor, fullName, location, time);
      navigation.goBack(); // exit modal
    } catch (error) {
      console.log(error);
    }
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

  const formatDate = (date) => {
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

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
              {route?.params?.title || ''}
            </Text>

            <Text style={{ fontSize: 14, marginBottom: 8, fontWeight: "500" }}>
              {route?.params?.address || ''}
            </Text>
            <Text
              style={{ fontWeight: "500", fontSize: 20, marginVertical: 0 }}
            >
              Book a Date{" "}
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
                        selectedDaySlot === date ? "lightblue" : "#FFF",
                      marginRight: 10,
                      padding: 10,
                      borderRadius: 10,
                      borderColor:
                        selectedDaySlot === date ? "#004aad" : "lightgrey",
                      borderWidth: 1,
                      height: 50,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      key={index}
                      style={{
                        fontWeight: "500",
                        color: selectedDaySlot === date ? "#004aad" : "grey",
                      }}
                    >
                      {formatDate(date)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <Text
              style={{ fontWeight: "500", fontSize: 20 }}
            >
              Select Time{" "}
            </Text>
            <HStack
              style={{
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {availableTimeSlots.map((timeSlot, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleTimeSlotSelection(timeSlot)}
                  style={{
                    padding: 10,
                    margin: 5,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor:
                      selectedTimeSlot === timeSlot ? "#004aad" : "lightgrey",
                    backgroundColor:
                      selectedTimeSlot === timeSlot ? "lightblue" : "white",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      color: selectedTimeSlot === timeSlot ? "#004aad" : "grey",
                    }}
                  >
                    {timeSlot}
                  </Text>
                </TouchableOpacity>
              ))}
              <VStack>
                <Text
                  style={{
                    color: "#000",
                    fontWeight: "700",
                    fontSize: 15,
                    marginTop: 4
                  }}
                >
                  Insurance we accept
                </Text>

                {insurance?.map((item) => {
                  return (
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: 15,
                        marginTop: 5
                      }}
                    >
                      {"\u2022"} {item.name}
                    </Text>
                  );
                })}
              </VStack>
            </HStack>
            <TouchableOpacity
              onPress={handleAppointment}
              disabled={!selectedTimeSlot || !selectedDaySlot}
              style={{
                backgroundColor: "#004aad",
                padding: 20,
                borderRadius: 20,
                marginTop: 90,
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
