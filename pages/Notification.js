import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView, Image } from '@gluestack-ui/themed'
// import { doctors } from '../util';

export const NotificationPage = ({ navigation }) =>  {
    return (
        <ScrollView style={{ flex: 1 }}>
            {/* <View style={{ margin: 10}}>
                {
                doctors?.map(x => {
                    return (
                    <View style={{ flex: 1, borderRadius: 5, padding: 10, marginTop: 10, backgroundColor: 'white', shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2}}>
                        <TouchableOpacity onPress={() => {console.log("hello")}}>
                        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                            <Image source={{ uri: x?.image }} size="xs" style={{ borderRadius: 50}} />
                            <Text style={{ fontSize: 20, paddingLeft: 10}}>{x?.name}</Text>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Text style={{ fontSize: 15}}>Location: {x?.street}, {x?.city}, {x?.state}</Text>
                            <Text style={{ fontSize: 15}}>Specialties: {x?.specialties.join(", ")}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    )
                })
                }
            </View> */}
        </ScrollView>
    );
  }