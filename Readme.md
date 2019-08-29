# React Native Blog

![alt text](./documentation/demo.gif 'Demo')

This project is created with Expo CLI so opening up the app without installing Emulator or Simulator is possible i.e., install Expo applicattion on your physical device and scan the QR code generated after `yarn start`.

## Getting Started

Optional:

- Install Xcode or Android Studio
- Start Simulator or Emulator

Clone these repositories:

```bash
$ git clone https://github.com/gamertense/react-native-blog
$ git clone https://github.com/gamertense/jsonserver-blogposts
```

Start fake JSON server with these commands (two terminals):

```bash
cd jsonserver-blogposts
yarn install
yarn run db
yarn run tunnel
```

Copy URL from the second running terminal and paste it in `src/api/jsonServer.js` with newer `baseURL` value:

```javascript
export default axios.create({
  baseURL: 'http://5834c4d7.ngrok.io', // <== recently generated url
})
```

Navigate to this project directory and run:

```javascript
yarn install && yarn start
```

You can either:

- open up Expo app on your mobile device and scan QR code
- click Run on iOS simulator or Run on Android device/emulator on the web browser

> Note: This is one of the React Native applications from this course: [The Complete React Native + Hooks Course [2019 Edition]
> ](https://www.udemy.com/the-complete-react-native-and-redux-course/)
