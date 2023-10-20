import * as Location from 'expo-location';

export const address = [
    {
      "title":  "UCI Health - Gottschalk Medical Plaza",
      "address": "1 Medical Plaza Driveway, Irvine, CA 92697",
      "image": "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
      "longitude": -117.853104,
      "latitude": 33.787914,
    },
    {
      "title": "Hoag Health Center Irvine - Sand Canyon",
      "address": "16105 Sand Canyon Ave., Irvine, CA 92618",
      "image": "https://www.shutterstock.com/image-photo/group-puppies-wooden-crate-on-260nw-2277563861.jpg",
      "longitude": -117.88008,
      "latitude": 33.74501,
    },
    {
      "title": "Kaiser Permanente Irvine Medical Center",
      "address": "6640 Alton Pkwy, Irvine, CA 92618",
      "image": "https://www.shutterstock.com/image-photo/adorable-puppy-jack-russell-terrier-260nw-1654708225.jpg",
      "longitude": -117.88374,
      "latitude": 33.72084,
    },
    {
      "title": "Hoag Health Center Irvine - Woodbridge",
      "address": "4950 Barranca Pkwy, Irvine, CA 92604",
      "image": "https://www.shutterstock.com/image-photo/puppy-260nw-549575962.jpg",
      "longitude": -117.88432,
      "latitude": 33.74231,
    },
    {
      "title": "Irvine Urgent Care",
      "address": "4950 Barranca Pkwy #101, Irvine, CA 92604",
      "image": "https://www.shutterstock.com/image-photo/puppy-260nw-549575962.jpg",
      "longitude": -117.89432,
      "latitude": 33.74231,
    },
    {
      "title": "Irvine Family Health Center",
      "address": "14351 Myford Rd #100, Irvine, CA 92606",
      "image": "https://www.shutterstock.com/image-photo/puppy-260nw-549575962.jpg",
      "longitude": -117.77432,
      "latitude": 33.7420,
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
    "name": "Chlamydia",
    "title": ["Symptoms?", "How do you get it?", "Is it curable?", "How do you prevent it?"],
    "response": [
      "Chlamydia is a sexually transmitted infection caused by the bacterium Chlamydia trachomatis. It is often asymptomatic, meaning that many individuals infected with chlamydia may not experience any noticeable symptoms. When symptoms do occur, they typically manifest within one to three weeks after exposure. In women, common symptoms may include abnormal vaginal discharge, pain or burning during urination, abdominal pain, and irregular bleeding between periods. Men with chlamydia may experience a discharge from the penis, pain or burning during urination, and testicular pain or swelling. Additionally, both men and women may develop rectal symptoms if the infection has been transmitted through anal intercourse, which can include pain, discharge, or bleeding from the rectum. Left untreated, chlamydia can lead to serious complications such as pelvic inflammatory disease (PID) in women, which can cause chronic pelvic pain, ectopic pregnancy, and infertility. In men, untreated chlamydia can lead to epididymitis, a painful condition affecting the testicles. It's crucial to seek medical attention if you suspect you may have been exposed to chlamydia, even if you are not experiencing symptoms, as early detection and treatment are essential in preventing these potential long-term complications. Testing and treatment for chlamydia are readily available through healthcare providers and clinics.",
      "Gonorrhea is a sexually transmitted infection (STI) caused by the bacterium Neisseria gonorrhoeae. It is primarily transmitted through sexual contact with an infected person, including vaginal, anal, or oral sex. Even if symptoms are not present, an individual with gonorrhea can still spread the infection to their sexual partners. It's important to note that you can contract gonorrhea even if you've had it before, as having the infection once does not provide immunity. In addition to sexual contact, gonorrhea can also be transmitted from an infected mother to her newborn during childbirth, potentially leading to eye infections or, in rare cases, more serious systemic infections in the baby. To reduce the risk of contracting or spreading gonorrhea, it's essential to practice safe sex by using condoms consistently and correctly, and to get tested regularly, especially if you have multiple sexual partners or engage in high-risk behaviors. Early detection and treatment are crucial in preventing complications and further transmission of the infection.",
      "Yes, gonorrhea is generally curable with appropriate treatment. It is caused by a bacterium, Neisseria gonorrhoeae, and can be effectively treated with antibiotics. However, it's important to note that over time, the bacterium has developed resistance to various antibiotics, making it essential for healthcare providers to stay informed about the most effective treatment options based on the current strains of the bacteria. As of my last knowledge update in September 2021, dual therapy, which involves using two different antibiotics together, is commonly recommended to ensure effective treatment. It's crucial for individuals diagnosed with gonorrhea to complete the full course of antibiotics as prescribed by their healthcare provider, even if symptoms improve before the medication is finished. Additionally, sexual partners of individuals diagnosed with gonorrhea should also seek testing and treatment to prevent reinfection and further transmission. Regular testing, safer sex practices, and open communication with sexual partners are important strategies for preventing and controlling the spread of gonorrhea. Keep in mind that the most up-to-date information on treatment may have evolved beyond my last knowledge update, so consulting a healthcare professional for the latest guidance is always advised.",
      "Preventing gonorrhea involves a combination of safe sexual practices and regular testing. Consistent and correct use of latex or polyurethane condoms during vaginal, anal, and oral sex can significantly reduce the risk of gonorrhea transmission. It's important to note that while condoms can greatly lower the risk, they do not provide complete protection, as the infection can still be spread through contact with areas not covered by the condom. Limiting sexual partners and choosing partners who have been recently tested and are known to be uninfected can also reduce the risk of contracting gonorrhea. Regular testing and open communication about sexual health are crucial in preventing the spread of gonorrhea. This is particularly important for individuals who are sexually active, have multiple partners, or engage in high-risk behaviors. Early detection allows for prompt treatment, which not only helps the individual but also prevents further transmission of the infection. Moreover, if someone is diagnosed with gonorrhea, it's important for their sexual partners to also seek testing and, if necessary, treatment to avoid reinfection and potential complications. Lastly, staying informed about the latest developments in gonorrhea prevention and seeking guidance from healthcare providers can further contribute to effective prevention strategies.",
    ]
  },
  {
    "id": 1,
    "name": "Gonorrhea",
    "title": ["Symptoms?", "How do you get it?", "Is it curable?", "How do you prevent it?"],
    "response": ["James is fine", "Yes, he will"]
  },
  {
    "id": 2,
    "name": "Hepatitis A",
    "title": ["Symptoms?", "How do you get it?", "Is it curable?", "How do you prevent it?"],
    "response": ["James is fine", "Yes, he will"]
  },
  {
    "id": 3,
    "name": "Hepatitis B",
    "title": ["Symptoms?", "How do you get it?", "Is it curable?", "How do you prevent it?"],
    "response": ["James is fine", "Yes, he will"]
  },
  {
    "id": 4,
    "name": "Hepatitis C",
    "title": ["Symptoms?", "How do you get it?", "Is it curable?", "How do you prevent it?"],
    "response": ["James is fine", "Yes, he will"]
  },
  {
    "id": 5,
    "name": "Genital Herpes",
    "title": ["Symptoms?", "How do you get it?", "Is it curable?", "How do you prevent it?"],
    "response": ["James is fine", "Yes, he will"]
  },
  {
    "id": 6,
    "name": "Oral Herpes",
    "title": ["Symptoms?", "How do you get it?", "Is it curable?", "How do you prevent it?"],
    "response": ["James is fine", "Yes, he will"]
  },
  {
    "id": 7,
    "name": "HIV",
    "title": ["Symptoms?", "How do you get it?", "Is it curable?", "How do you prevent it?"],
    "response": ["James is fine", "Yes, he will"]
  },
  {
    "id": 8,
    "name": "Syphilis",
    "title": ["Symptoms?", "How do you get it?", "Is it curable?", "How do you prevent it?"],
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