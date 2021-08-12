import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export const _containerStyle = (backgroundColor: any): ViewStyle => ({
  width:50,
  height: 50,
  backgroundColor: backgroundColor,
  alignItems: "center",
  justifyContent: "center",
  borderRadius:25,
  shadowRadius: 8,
  shadowOpacity: 0.3,
  shadowColor: "#757575",
  shadowOffset: {
      width: 0,
      height: 0,
  },
})

export default StyleSheet.create<Style>({
  container: {

  }
});
