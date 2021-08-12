
 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import SwitchButton from './lib/SwitchButton';

 const App = () => {
  

   return (
     <SafeAreaView style={{flex:1, margin:32 }}>
         <SwitchButton inactiveImageSource={require("./assets/notification.png")} activeImageSource={require("./assets/notification-3.png")} />
     </SafeAreaView>
   );
 };


 export default App;
