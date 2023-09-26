import { Text, View, TouchableOpacity } from "react-native";

export const Btn = (props) => {
  const { onPress, style, text, textColor, bgColor } = props || {};

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View
        style={{
          backgroundColor: bgColor,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: textColor }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
