import { Text, View, TouchableOpacity } from 'react-native';
import { Icon, ChevronUpIcon, ChevronDownIcon } from '@gluestack-ui/themed'
import React from 'react';

export const Accordion = (props) => {
    const [toggle, setToggle] = React.useState(false);
    const { name, title, response } = props || {};
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => { setToggle(!toggle) }}>
                <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                    <Text style={{ fontSize: 25 }}>{name}</Text>
                    <Icon as={toggle ? ChevronUpIcon : ChevronDownIcon} h="$8" w="$7" color="black" />
                </View>
            </TouchableOpacity>
            {(toggle) && (
                <View style={{ paddingLeft: 15 }}>
                    {title?.map((x, i) => {
                        return (
                            <View key={i}>
                                <Text style={{ fontSize: 20, fontWeight: '500' }}>{x}</Text>
                                <Text style={{ margin: 5, fontSize: 14, fontWeight: '500' }}>{response[i]}</Text>
                            </View>
                        )
                    })}
                </View>
            )}
        </View>
    );
}



