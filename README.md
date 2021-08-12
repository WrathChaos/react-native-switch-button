<img alt="React Native Switch Button" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-switch-button)

[![React Native Switch Button](https://img.shields.io/badge/-Animated%20switch%20button%20with%20fully%20customizable%20React%20Native%20Component-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-switch-button)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-switch-button.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-switch-button)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-switch-button.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-switch-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Switch Button"
        src="assets/Screenshots/react-native-switch-button.gif" height="850" />
</p>

# Installation

Add the dependency:

```bash
npm i @freakycoder/react-native-switch-button
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": ">= 0.2.5"
```

# Usage

## Import

```jsx
import SwitchButton from "@freakycoder/react-native-switch-button";
```

## Fundamental Usage

```jsx
<SwitchButton
  text="Notification"
  inactiveImageSource={require("./assets/notification.png")}
  activeImageSource={require("./assets/notification-3.png")}
  onPress={(isActive: boolean) => console.log(isActive)}
/>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

| Property            |     Type     |  Default  | Description                                                        |
| ------------------- | :----------: | :-------: | ------------------------------------------------------------------ |
| text                |    string    | undefined | set the text of the button                                         |
| activeImageSource   | Image Source | undefined | set the active image source                                        |
| inactiveImageSource | Image Source | undefined | set the inactive image source                                      |
| onPress             |   function   |  default  | set your own logic for onPress functionality                       |
| mainColor           |    string    |  #f1bb7b  | change the main animated color                                     |
| originalColor       |    string    |   #fff    | change the original/default animated color                         |
| tintColor           |    string    |  #f1bb7b  | change the tint color for the image                                |
| disableText         |   boolean    |   false   | disable the text part if you only want to use switch button itself |
| style               |  ViewStyle   |  default  | set or override the style object for the main container            |
| textStyle           |  TextStyle   |  default  | set or override the style object for the text                      |
| imageStyle          |  ImageStyle  |  default  | set or override the style object for the image                     |
| textContainerStyle  |  ViewStyle   |  default  | set or override the style object for text container                |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Switch Button is available under the MIT license. See the LICENSE file for more info.
