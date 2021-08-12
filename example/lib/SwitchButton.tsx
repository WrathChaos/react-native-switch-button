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
const TINT_COLOR = "#f1bb7b";
const ORIGINAL_VALUE = 0;
const ANIMATED_VALUE = 1;

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ISwitchButtonProps {
  style?: CustomStyleProp;
  activeImageSource: ImageSourcePropType;
  inactiveImageSource: ImageSourcePropType;
  mainColor?: string;
  originalColor?: string;
  tintColor?: string;
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
    const tintColor = this.props.tintColor || TINT_COLOR;
    let animatedBackgroundColor = this.interpolatedColor.interpolate({
      inputRange: [ORIGINAL_VALUE, ANIMATED_VALUE],
      outputRange: [originalColor, mainColor],
    });
    let animatedTintColor = this.interpolatedColor.interpolate({
      inputRange: [ORIGINAL_VALUE, ANIMATED_VALUE],
      outputRange: [tintColor, originalColor],
    });

    const { style, activeImageSource, inactiveImageSource } = this.props;
    return (
      <View style={{alignItems: "center",
      }}>
        <AnimatedRNBounceable style={[_containerStyle(animatedBackgroundColor), style]} onPress={() => {this.setState({isActive: !this.state.isActive}, () => {
          this.state.isActive ? this.showFocusColor() : this.showOriginColor()
        })}} >
          <Animated.Image source={this.state.isActive ? activeImageSource : inactiveImageSource} style={{ height: 30, width: 30, tintColor: animatedTintColor  }} />
        </AnimatedRNBounceable>
        <View style={{marginTop: 8}}>
          <Text>Notification</Text>
        </View>
      </View>
    );
  }
};

