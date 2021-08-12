import React from "react";
import { View, StyleProp, Image, Text, Animated, ViewStyle, ImageSourcePropType } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable"
/**
 * ? Local Imports
 */
import styles, {_containerStyle} from "./SwitchButton.style";

const AnimatedRNBounceable = Animated.createAnimatedComponent(RNBounceable);


const MAIN_COLOR = "#f1bb7b";
const ORIGINAL_COLOR = "#fff";
const PLACEHOLDER_COLOR = "#757575";
const ORIGINAL_VALUE = 0;
const ANIMATED_VALUE = 1;

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ISwitchButtonProps {
  style?: CustomStyleProp;
  activeImageSource: ImageSourcePropType;
  inactiveImageSource: ImageSourcePropType;
  mainColor?: string;
  originalColor?: string;
}

interface IState {
isActive: boolean;
}


export default class SwitchButton extends React.Component<
  ISwitchButtonProps,
  IState
> {
  interpolatedColor: Animated.Value;


  constructor(props: ISwitchButtonProps) {
    super(props);
    this.interpolatedColor = new Animated.Value(ORIGINAL_VALUE);
    this.state = {
      isActive: false
    };
  }


  showOriginColor = () => {
    Animated.timing(this.interpolatedColor, {
      duration: 350,
      toValue: ORIGINAL_VALUE,
      useNativeDriver: false,
    }).start();
  };

  showFocusColor = () => {
    Animated.timing(this.interpolatedColor, {
      duration: 450,
      toValue: ANIMATED_VALUE,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const mainColor = this.props.mainColor || MAIN_COLOR;
    const originalColor = this.props.originalColor || ORIGINAL_COLOR;
    let backgroundColor = this.interpolatedColor.interpolate({
      inputRange: [ORIGINAL_VALUE, ANIMATED_VALUE],
      outputRange: [originalColor, mainColor],
    });

    let tintColor = this.interpolatedColor.interpolate({
      inputRange: [ORIGINAL_VALUE, ANIMATED_VALUE],
      outputRange: [ mainColor,originalColor],
    });

    const { style, activeImageSource, inactiveImageSource } = this.props;
    return (
      <View style={{alignItems: "center",
      }}>
        <AnimatedRNBounceable style={[_containerStyle(backgroundColor), style]} onPress={() => {this.setState({isActive: !this.state.isActive}, () => {
          this.state.isActive ? this.showFocusColor() : this.showOriginColor()
        })}} >
          <Animated.Image source={this.state.isActive ? activeImageSource : inactiveImageSource} style={{ height: 30, width: 30, tintColor: tintColor  }} />
        </AnimatedRNBounceable>
        <View style={{marginTop: 8}}>
          <Text>Notification</Text>
        </View>
      </View>
    );
  }
};

