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
import SwitchButton from "./lib/SwitchButton";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, margin: 32 }}>
      <Text style={{ fontSize: 32, fontWeight: "bold", color: "#757575" }}>
        App Setting
      </Text>
      <Text style={{ color: "#bababa", marginTop: 12 }}>
        Fundamental app settings to configure
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 32,
          justifyContent: "space-between",
        }}
      >
        <SwitchButton
          inactiveImageSource={require("./assets/notification.png")}
          activeImageSource={require("./assets/notification-3.png")}
          text="Notification"
          textStyle={{
            color: "#f1bb7b",
            fontWeight: "600",
          }}
          onPress={(isActive: boolean) => alert(isActive)}
        />
        <SwitchButton
          inactiveImageSource={require("./assets/fingerprint.png")}
          activeImageSource={require("./assets/fingerprint.png")}
          mainColor="#2196f2"
          tintColor="#2196f2"
          text="Security"
          textStyle={{
            color: "#2196f2",
            fontWeight: "600",
          }}
          onPress={(isActive: boolean) => console.log(isActive)}
        />
        <SwitchButton
          isActive
          inactiveImageSource={require("./assets/location-pin.png")}
          mainColor="#fc583b"
          tintColor="#fc583b"
          activeImageSource={require("./assets/location-pin-2.png")}
          text="Location"
          textStyle={{
            color: "#fc583b",
            fontWeight: "600",
          }}
          onPress={(isActive: boolean) => console.log(isActive)}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
