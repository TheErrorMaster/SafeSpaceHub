import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FlatList } from '@gluestack-ui/themed';
import { Icon, MessageCircleIcon, ChevronRightIcon } from '@gluestack-ui/themed'
import { data } from '../util';
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