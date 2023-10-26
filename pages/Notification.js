import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView, Image, set } from '@gluestack-ui/themed'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppointmentModal  from './Component/AppointmentModal';
import {useState, useEffect} from "react"
import { getAppointments } from '../firebase/index';
import { useIsFocused } from '@react-navigation/native';

export const NotificationPage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [appointment, setAppointment] = useState([]);
    const isFocused = useIsFocused();

    const fetchAppointments = async () => {
        const data = await getAppointments();
        setAppointment(data);
}

    useEffect(() => {
        if(isFocused) {
            fetchAppointments();
        }
    },[isFocused])

    return (
        <>
        <AppointmentModal modalVisible={modalVisible} setModalVisible={setModalVisible} data={appointment}/>
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ fontSize: 30, paddingLeft: 10, textAlign: 'center' }}>My Appointments</Text>
            {appointment?.length === 0 && <Text style={{ padding: 10, fontSize: 20}}>No available appointments</Text>}
            <ScrollView style={{ margin: 10 }} refreshControl={() => console.log("hello")}>
                {
                    appointment.map((x,i) => {
                        return (
                            <View key={i} style={{ flex: 1, borderRadius: 5, padding: 10, marginTop: 10, backgroundColor: 'white', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2 }}>
                                <TouchableOpacity onPress={() => setModalVisible(true) }>
                                    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20 }}>{x?.doctorName}</Text>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontSize: 15 }}>{x?.location}</Text>
                                        <Text style={{ fontSize: 15 }}>Appointment: {x?.dateTime}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
        </>
    );
}