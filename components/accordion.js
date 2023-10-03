import { View, TouchableOpacity } from 'react-native';
import React from 'react';

export const Accordion = ( props ) => {
    const [toggle, setToggle] = React.useState(false);
    const {children} = props || {};
  return (
    <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => {setToggle(!toggle)}}>
            {children[0]}
        </TouchableOpacity>
        <View>
            {toggle && (
                children[1]
            )}
        </View>
    </View>
  );
  }