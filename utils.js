import * as Location from "expo-location";

export const address = [
  {
    title: "UCI Health - Gottschalk Medical Plaza",
    address: "1 Medical Plaza Driveway, Irvine, CA 92697",
    image:
      "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
    longitude: -117.853104,
    latitude: 33.787914,
  },
  {
    title: "Hoag Health Center Irvine - Sand Canyon",
    address: "16105 Sand Canyon Ave., Irvine, CA 92618",
    image:
      "https://www.shutterstock.com/image-photo/group-puppies-wooden-crate-on-260nw-2277563861.jpg",
    longitude: -117.88008,
    latitude: 33.74501,
  },
  {
    title: "Kaiser Permanente Irvine Medical Center",
    address: "6640 Alton Pkwy, Irvine, CA 92618",
    image:
      "https://www.shutterstock.com/image-photo/adorable-puppy-jack-russell-terrier-260nw-1654708225.jpg",
    longitude: -117.88374,
    latitude: 33.72084,
  },
  {
    title: "Hoag Health Center Irvine - Woodbridge",
    address: "4950 Barranca Pkwy, Irvine, CA 92604",
    image: "https://www.shutterstock.com/image-photo/puppy-260nw-549575962.jpg",
    longitude: -117.88432,
    latitude: 33.74231,
  },
  {
    title: "Irvine Urgent Care",
    address: "4950 Barranca Pkwy #101, Irvine, CA 92604",
    image: "https://www.shutterstock.com/image-photo/puppy-260nw-549575962.jpg",
    longitude: -117.89432,
    latitude: 33.74231,
  },
  {
    title: "Irvine Family Health Center",
    address: "14351 Myford Rd #100, Irvine, CA 92606",
    image: "https://www.shutterstock.com/image-photo/puppy-260nw-549575962.jpg",
    longitude: -117.77432,
    latitude: 33.742,
  },
];

export const insurance = [
  {
    name: "UnitedHealthcare",
  },
  {
    name: "Anthem Blue Cross Blue Shield",
  },
  {
    name: "Aetna",
  },
  {
    name: "Cigna",
  },
  {
    name: "Humana",
  },
  {
    name: "Kaiser Permanente",
  },
  {
    name: "Molina Healthcare",
  },
  {
    name: "Centene Corporation",
  },
  {
    name: "Independence Blue Cross",
  },
  {
    name: "Highmark",
  },
];

export const getLocation = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return {};
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location?.coords || {};
    return { lat: latitude, long: longitude };
  } catch (error) {
    return {};
  }
};

export const data = [
  {
    id: 0,
    name: "Chlamydia",
    title: [
      "Symptoms?",
      "How do you get it?",
      "Is it curable?",
      "How do you prevent it?",
    ],
    response: [
      "Abnormal vaginal discharge (may have an unusual odor)",
      "Chlamydia is primarily transmitted through sexual contact (vaginal, anal, or oral) with an infected person. It can also be passed from an infected mother to her baby during childbirth.",
      "Yes, chlamydia is curable with appropriate antibiotic treatment. It's important to get tested and treated promptly to prevent complications and further spread of the infection.",
      "Practice safe sex by using condoms consistently and correctly.",
    ],
  },
  {
    id: 1,
    name: "Gonorrhea",
    title: [
      "Symptoms?",
      "How do you get it?",
      "Is it curable?",
      "How do you prevent it?",
    ],
    response: [
      "Painful or frequent urination",
      "Primarily through sexual contact (vaginal, anal, or oral) with an infected person.",
      "Yes",
      "Limit the number of sexual partners and choose partners who have been tested and are known to be uninfected.",
    ],
  },
  {
    id: 2,
    name: "Hepatitis A",
    title: [
      "Symptoms?",
      "How do you get it?",
      "Is it curable?",
      "How do you prevent it?",
    ],
    response: ["Hepatitis A symptoms include fatigue, nausea, abdominal pain, clay-colored bowel movements, loss of appetite, low-grade fever, dark urine, joint pain, and jaundice (yellowing of the skin and eyes).", "Hepatitis A is typically transmitted through ingestion of contaminated food or water. It can also spread through close personal contact with an infected person or through sexual contact with an infected partner.","Yes, Hepatitis A is a self-limiting disease, meaning it can resolve on its own without treatment. However, there is a vaccine available that provides immunity and prevents infection.","The best way to prevent Hepatitis A is through vaccination. Additionally, practicing good hygiene, including frequent handwashing, and avoiding consumption of contaminated food or water can help prevent the spread of the virus. It's also important to use protection during sexual activity if you suspect you or your partner may be at risk."],
  },
  {
    id: 3,
    name: "Hepatitis B",
    title: [
      "Symptoms?",
      "How do you get it?",
      "Is it curable?",
      "How do you prevent it?",
    ],
    response: ["Symptoms of Hepatitis B can include jaundice (yellowing of the skin and eyes), fatigue, abdominal pain, dark urine, joint pain, loss of appetite, nausea, vomiting, and sometimes fever.", "Hepatitis B is primarily transmitted through contact with infected blood or body fluids, such as from unprotected sex with an infected person, sharing of needles, or from an infected mother to her baby during childbirth.", "While there is no cure for chronic Hepatitis B, acute cases may resolve on their own, and there are antiviral medications that can help manage the condition.", " Prevention of Hepatitis B involves vaccination, using protection (such as condoms) during sexual activity, avoiding sharing needles or personal items that may be contaminated with blood, and ensuring that healthcare settings follow proper infection control measures. Additionally, newborns born to mothers with Hepatitis B should receive the hepatitis B vaccine and hepatitis B immune globulin within 12 hours of birth."],
  },
  {
    id: 4,
    name: "Hepatitis C",
    title: [
      "Symptoms?",
      "How do you get it?",
      "Is it curable?",
      "How do you prevent it?",
    ],
    response: ["Many people with Hepatitis C may not experience noticeable symptoms, but when they do occur, they can include fatigue, jaundice (yellowing of the skin and eyes), abdominal pain, dark urine, and joint pain.", "Hepatitis C is primarily transmitted through contact with infected blood, often through sharing of needles, unsterilized equipment for tattoos or piercings, or from an infected mother to her baby during childbirth.", "Yes, Hepatitis C is now highly curable with the use of antiviral medications, which have a very high success rate in eliminating the virus from the body.", "Prevention of Hepatitis C involves avoiding behaviors and situations that may lead to contact with infected blood, such as using clean needles, avoiding sharing personal items like razors or toothbrushes, and ensuring healthcare settings follow proper infection control measures. Additionally, screening of blood and blood products has significantly reduced the risk of transmission through transfusions."],
  },
  {
    id: 5,
    name: "Genital Herpes",
    title: [
      "Symptoms?",
      "How do you get it?",
      "Is it curable?",
      "How do you prevent it?",
    ],
    response: ["Genital herpes can cause painful sores or blisters in the genital and anal areas, as well as flu-like symptoms such as fever, headache, and muscle aches during initial outbreaks. Recurrent outbreaks may involve milder symptoms or none at all.", "Genital herpes is primarily spread through sexual contact with an infected person, even if they don't have visible sores. It can also be transmitted from a mother to her baby during childbirth.", "There is no cure for genital herpes, but antiviral medications can help manage and reduce the frequency of outbreaks. They can also decrease the risk of transmitting the virus to sexual partners.", "Prevention involves practicing safe sex by using condoms consistently and correctly, especially during vaginal, anal, and oral sex. It's also important to communicate openly with sexual partners about your herpes status and to avoid sexual contact during outbreaks. If you or your partner have herpes, consider taking antiviral medication as prescribed by a healthcare provider."],
  },
  {
    id: 6,
    name: "Oral Herpes",
    title: [
      "Symptoms?",
      "How do you get it?",
      "Is it curable?",
      "How do you prevent it?",
    ],
    response: ["Oral herpes, caused by the herpes simplex virus (HSV-1), typically presents as cold sores or fever blisters around the mouth or on the lips. These sores can be painful or uncomfortable and may be accompanied by itching or burning sensations.", "Oral herpes is primarily transmitted through direct contact with the herpes virus. This can occur through kissing, sharing utensils or personal items, or engaging in oral sex with someone who has a genital herpes infection."," There is no cure for oral herpes, but antiviral medications can help manage and reduce the frequency of outbreaks. These medications can also decrease the risk of transmitting the virus to others.", "Prevention involves avoiding direct contact with the herpes virus. This includes refraining from kissing or engaging in oral sex with someone who has an active outbreak. If you have oral herpes, consider taking antiviral medication as prescribed by a healthcare provider to reduce the frequency of outbreaks and lower the risk of transmission."],
  },
  {
    id: 7,
    name: "HIV",
    title: [
      "Symptoms?",
      "How do you get it?",
      "Is it curable?",
      "How do you prevent it?",
    ],
    response: ["In the early stages of HIV (Human Immunodeficiency Virus) infection, individuals may experience flu-like symptoms, including fever, headache, sore throat, swollen lymph nodes, and fatigue. As the virus progresses, symptoms may become more severe, and can include weight loss, night sweats, severe fatigue, and opportunistic infections.", "HIV is primarily transmitted through unprotected sexual intercourse with an infected person, sharing of needles or syringes, receiving contaminated blood products or organ transplants, and from mother to child during childbirth or breastfeeding. It can also be transmitted through contact with infected blood, vaginal or rectal fluids, and breast milk.", "As of my last knowledge update in January 2022, there is no cure for HIV. However, it can be managed effectively with antiretroviral therapy (ART) which helps suppress the virus and allows individuals to lead healthy lives. Early and consistent treatment can also significantly reduce the risk of transmitting the virus to others.", "Prevention of HIV involves practicing safe sex by using condoms consistently and correctly, limiting the number of sexual partners, and getting tested regularly for HIV and other sexually transmitted infections. For individuals at high risk, pre-exposure prophylaxis (PrEP) is a medication that can be taken to prevent HIV. Additionally, avoiding sharing of needles or syringes, and ensuring that blood products and organ transplants are screened for HIV can help prevent transmission."],
  },
  {
    id: 8,
    name: "Syphilis",
    title: [
      "Symptoms?",
      "How do you get it?",
      "Is it curable?",
      "How do you prevent it?",
    ],
    response: ["\u2022 Characterized by a painless sore (chancre) at the site of infection (genitals, anus, mouth).", " Syphilis is primarily transmitted through direct contact with a syphilis sore during vaginal, anal, or oral sex. It can also be transmitted from an infected mother to her baby during childbirth.", "Yes, syphilis is curable with appropriate antibiotic treatment, especially in the early stages. However, if left untreated, it can progress to more serious stages and cause severe health complications.", "Prevention involves practicing safe sex by using condoms consistently and correctly, limiting the number of sexual partners, and getting tested regularly for syphilis and other sexually transmitted infections. Pregnant individuals should be tested for syphilis early in pregnancy to prevent transmission to the baby."],
  },
];

export const doctors = [
  {
    id: 21,
    name: "David R. Paskil",
    specialties: ["Pathology", "General Practice"],
    image: "https://assets.medpagetoday.net/media/images/73xxx/73617.jpg",
  },
  {
    id: 15,
    name: "Amy Smith",
    specialties: ["Pathology"],
    image:
      "https://st.depositphotos.com/2208684/2391/i/600/depositphotos_23910421-stock-photo-female-doctor-at-the-hospital.jpg",
  },
  {
    id: 14,
    name: "Asad Sid",
    specialties: ["General Practice"],
    image:
      "https://st3.depositphotos.com/1743476/32257/i/600/depositphotos_322579018-stock-photo-smiling-doctor-standing-on-grey.jpg",
  },
  {
    id: 24,
    name: "Lisa Simpson",
    specialties: ["Pathology"],
    image:
      "https://st3.depositphotos.com/3889193/35772/i/450/depositphotos_357721126-stock-photo-confident-female-doctor-posing-her.jpg",
  },
];
