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

  export const data = [
    {
    "id": 0,
    "name": "James", 
    "title": ["Who is James11", "Will James Talk to Me"],
    "response": ["James is fine", "Yes, he will"]    },
    {
      "id": 1,
      "name": "Smith",
      "title": ["Who is James222", "Will James Talk to Me"],
      "response": ["James is fine", "Yes, he will"]
    },
    {
      "id": 2,
      "name": "Josh",
      "title": ["Who is James333", "Will James Talk to Me"],
      "response": ["James is fine", "Yes, he will"]
    },
    {
      "id": 3,
      "name": "Boy",
      "title": ["Who is James444", "Will James Talk to Me"],
      "response": ["James is fine", "Yes, he will"]
    },
  ]
  
  export const chats = [
    {
      "user": "bot",
      "message": "hello",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
    {
      "user": "maui",
      "message": "Hello world",
    },
  ]


  export const doctors = [
    {
      "id": 21,
      "name": "David R. Paskil",
      // "country": "United States",
      "state": "California",
      "street": "123 street",
      "city": "Irvine",
      "specialties": ["Pathology", "General Practice"],
      "image": "https://assets.medpagetoday.net/media/images/73xxx/73617.jpg"
    },
    {
      "id": 14,
      "name": "Josh Smith",
      // "country": "United States",
      "state": "Texas",
      "street": "123 street",
      "city": "Austin",
      "specialties": ["Pathology"],
      "image": "https://assets.medpagetoday.net/media/images/73xxx/73617.jpg",
    },
    {
      "id": 15,
      "name": "Jimmy Smith",
      // "country": "United States",
      "state": "Texas",
      "street": "123 street",
      "city": "Austin",
      "specialties": ["Pathology"],
      "image": "https://assets.medpagetoday.net/media/images/73xxx/73617.jpg",
    },
    {
      "id": 24,
      "name": "Josh Smith",
      // "country": "United States",
      "state": "Texas",
      "street": "123 street",
      "city": "Austin",
      "specialties": ["Pathology"],
      "image": "https://assets.medpagetoday.net/media/images/73xxx/73617.jpg",
    },
  ]