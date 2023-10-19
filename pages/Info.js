import { Text, View } from 'react-native';
import { FlatList } from '@gluestack-ui/themed';
import { data } from '../utils';
import { Accordion } from '../components/accordion';
import { SafeAreaView } from 'react-native-safe-area-context';


export const InfoPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, paddingLeft: 10 }}>Info</Text>
      <View style={{ margin: 0 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
              <Accordion name={item?.name} title={item?.title} response={item?.response} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

