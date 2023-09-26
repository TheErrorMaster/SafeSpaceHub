import * as Location from 'expo-location';

export const dummyData = [
    {
      "title":  "Jimy bday",
      "name": "Jimmy",
      "breed": "Shiba Inu",
      "image": "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
      "dateTime": "",
      "longitude": -117.853104,
      "latitude": 33.787914,
    },
    {
      "title": "chat bday",
      "name": "Chato",
      "image": "https://www.shutterstock.com/image-photo/group-puppies-wooden-crate-on-260nw-2277563861.jpg",
      "breed": "Beagle",
      "dateTime": "",
      "longitude": -117.88008,
      "latitude": 33.74501,
    },
    {
      "title": "oso funeral",
      "name": "Oso",
      "image": "https://www.shutterstock.com/image-photo/adorable-puppy-jack-russell-terrier-260nw-1654708225.jpg",
      "breed": "Dalmatian",
      "dateTime": "",
      "longitude": -117.88374,
      "latitude": 33.72084,
    },
    {
      "title": "rip",
      "name": "Bubbles",
      "image": "https://www.shutterstock.com/image-photo/puppy-260nw-549575962.jpg",
      "breed": "Poodle",
      "dateTime": "",
      "longitude": -117.88432,
      "latitude": 33.74231,
    }
  ]

export const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return {};
      }

      let location = await Location.getCurrentPositionAsync({});
      const {latitude, longitude} = location?.coords || {};
      return {lat: latitude, long: longitude}
    } catch(error) {
      return {}
    }
  }
