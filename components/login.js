import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    TextInput,
    KeyboardAvoidingView,
    Alert,
  } from "react-native";
  import { useState } from "react";
  // import { collection, getDocs, doc, query, where } from 'firebase/firestore';
  // import {db} from '../firebase/firebaseConfig';
  // import {login} from '../firebase/user';


export const Login = (props) => {
    const {pop, close} = props || {};
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const btn = async () => {
      try {
        setLoading(true);
        // const loginUser = await login(user, password);
        const loginUser = true;
        // setLoading(false);
        // loginUser ? close() : Alert.alert('wrong login infor');
        close();
      } catch(e) {
        console.log('e', e);
      }
    }

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={pop} onRequestClose={() => close()} >

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
        >
        <KeyboardAvoidingView>
          <View
            style={{
              height: "100%",
              backgroundColor: "#ecf8db",
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Login</Text>
            <Text>Username: </Text>
            <TextInput
                style={{ 
                    height: 40,
                    width: '50%',
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
                placeholder="Username"
                onChangeText={setUser}
                value={user}
            />

            <Text>Username: </Text>
            <TextInput
                style={{ 
                    height: 40,
                    width: '50%',
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
            />

            {!loading && 
            <TouchableOpacity
              onPress={btn}
              style={{
                width: '50%',
                height: 40,
                justifyContent: 'center',
              }}
            >
                <View style={{
                    backgroundColor: 'blue',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ color: 'white'}}>Login</Text>
                </View>
            </TouchableOpacity>
            }
            {loading && (<Text>Loading</Text>)}
          </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </>
  );
};
