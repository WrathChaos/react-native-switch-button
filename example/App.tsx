import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import SwitchButton from "@freakycoder/react-native-switch-button";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, margin: 32 }}>
      <SwitchButton
        inactiveImageSource={require("./assets/notification.png")}
        activeImageSource={require("./assets/notification-3.png")}
        text="Notification"
        textStyle={{
          color: "#757575",
          fontWeight: "600",
        }}
        onPress={(isActive: boolean) => console.log(isActive)}
      />
    </SafeAreaView>
  );
};

export default App;
