import * as React from "react";
import {
  View,
  Text,
  Animated,
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _containerStyle, _imageStyle } from "./SwitchButton.style";

const AnimatedRNBounceable = Animated.createAnimatedComponent(RNBounceable);

const MAIN_COLOR = "#f1bb7b";
const ORIGINAL_COLOR = "#fff";
const TINT_COLOR = "#f1bb7b";
const ORIGINAL_VALUE = 0;
const ANIMATED_VALUE = 1;

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface ISwitchButtonProps {
  style?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  imageStyle?: CustomImageStyleProp;
  textContainerStyle?: CustomTextStyleProp;
  activeImageSource: ImageSourcePropType;
  inactiveImageSource: ImageSourcePropType;
  text?: string;
  mainColor?: string;
  tintColor?: string;
  disableText?: boolean;
  originalColor?: string;
  onPress: (isActive: boolean) => void;
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
      isActive: false,
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

  handlePress = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      this.state.isActive ? this.showFocusColor() : this.showOriginColor();
      this.props.onPress && this.props.onPress(this.state.isActive);
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderBounceableButton = () => {
    const {
      style,
      imageStyle,
      activeImageSource,
      inactiveImageSource,
    } = this.props;
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
    return (
      <AnimatedRNBounceable
        style={[_containerStyle(animatedBackgroundColor), style]}
        onPress={this.handlePress}
      >
        <Animated.Image
          source={this.state.isActive ? activeImageSource : inactiveImageSource}
          style={[_imageStyle(animatedTintColor), imageStyle]}
        />
      </AnimatedRNBounceable>
    );
  };

  renderText = () => {
    const { text, textStyle, textContainerStyle } = this.props;
    return (
      !this.props.disableText && (
        <View style={[styles.textContainerStyle, textContainerStyle]}>
          <Text style={textStyle}>{text}</Text>
        </View>
      )
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderBounceableButton()}
        {this.renderText()}
      </View>
    );
  }
}
