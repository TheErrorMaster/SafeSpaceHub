import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { getLocation, dummyData } from '../utils';
import { Card } from '../components/card';
import { Login } from '../components/login';
import { Post } from '../components/post';

export const HomePage = () => {
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [pop, setPop] = useState(false);
  const [login, setLogin] = useState(true);
  const [dog, setDog] = useState({});
  const [coor, setCoor] = useState({});
  const [post, setPost] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const currentLocation = async () => {
      const location = await getLocation();
      setLong(location?.long);
      setLat(location?.lat);
      setIsLoading(true);
    };
    currentLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 50, justifyContent: "center" }}>
        <Text>Doggy Mingle</Text>
      </View>
      {!isLoading && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {isLoading && (<MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
        coordinate={{ latitude: lat, longitude: long }}
        loadingEnabled={true}
        loadingIndicatorColor="#666666"
        loadingBackgroundColor="#eeeeee"
        moveOnMarkerPress={true}
        showsUserLocation={true}
        showsCompass={true}
        showsPointsOfInterest={false}
        showsBuildings={true}
        onLongPress={(a) => {
          setPost(true); 
          setCoor(a?.nativeEvent?.coordinate)
        }}
      >
        {dummyData?.map((x, i) => {
          return (
            <Marker
              coordinate={{ latitude: x?.latitude, longitude: x?.longitude }}
              key={i}
              onPress={() => {
                setPop(true);
                setDog({title: x?.title, name: x?.name, image: x?.image, breed: x?.breed, age: 1, summary: x?.title})
              }}
            >
              <View style={styles.marker}>
                <Text style={styles.color}>{`${x?.breed}`}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>)}

      {isLoading && (<View style={styles?.bottom}>
        <TouchableOpacity onPress={() => {setLogin(true)}}>
          <Text style={{ color: "green", fontSize: 50 }}>+</Text>
        </TouchableOpacity>
      </View>)}
      {/* title="Oso birthday" name="OSO" age="3" summary="Oso, loves to mingle with small dogs only " image="https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg" breed="OSO" */}
      <Card obj={dog} pop={pop} close={() => {setPop(false)}}/>
      <Login pop={login} close={() => {setLogin(false)}} />
      <Post coordinate={coor} pop={post} close={() => {setPost(false)}} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf8db",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    flex: 1,
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ecf8db",
    borderRadius: 5,
    elevation: 10,
  },
  text: {
    color: "#fff",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 100,
    right: 40,
    backgroundColor: "#ecf8db",
    borderRadius: 100,
    width: 60,
    height: 60,
  },
});
