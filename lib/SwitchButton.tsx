import React from "react";
import { View, StyleProp, Image, Text, ViewStyle, ImageSourcePropType } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable"
/**
 * ? Local Imports
 */
import styles from "./SwitchButton.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ISwitchButtonProps {
  style?: CustomStyleProp;
  source: ImageSourcePropType
}

const SwitchButton: React.FC<ISwitchButtonProps> = ({ style, source, ...rest }) => {
  return (
    <View>
    <RNBounceable {...rest} style={[styles.container, style]} >
      <Image source={source} />
    </RNBounceable>
      <Text>New Component</Text>
    </View>
  );
};

export default SwitchButton;
