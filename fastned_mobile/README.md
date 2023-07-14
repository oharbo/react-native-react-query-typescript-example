## fastned_mobile 

This  [**React Native**](https://reactnative.dev) project is bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

Few words to the fellow engineers:

Please treat this project as an attempt to choose a best architecture and strategy for the given requirements.

Along with implementing of FAST-1, FAST-2 and OPTIONAL(search, tests) I would like to highlight a following details:

- there is no implementation for authentication|login|ToS|privacy|localisation
- local search|filtering is implemented for vehicle "Brand", treat it as a basic implementation of happy path, basic UX
- dark mode support using default color schemes
- I realise that project structure is not perfect, my intention was to make it easy to explore and readability


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Backend service

This project contains a default backend service that provides a vehicle list and vehicle detail information. You can run the service in a Docker container from the root of this project by running:

```
docker-compose up -d
```

The following endpoints are available to use:

* http://localhost:8485/api/vehicles/
* http://localhost:8485/api/vehicles/$id/

>**Note**: you might need to replace "localhost" with your machine IP address to reach the endpoints

## Step 4: Debugging

>**Note**: you might need to replace take additional steps inorder to enable debug w/ Hermes enabled. Please refer to the [official documentation](https://reactnative.dev/docs/hermes#debugging-js-on-hermes-using-google-chromes-devtools)


## Step 5: Maestro tests

This project is covered with Maestro integration test. Maestro supports testing React Native screens and apps on both Android and iOS.

### Installing|Upgrading the Maestro CLI
Run the following command to install Maestro on Mac OS, Linux or Windows (WSL):
```
curl -Ls "https://get.maestro.mobile.dev" | bash
```

### Connecting to Your Device
Before running Flows on iOS Simulator, install Facebook IDB tool
```
brew tap facebook/fb
brew install facebook/fb/idb-companion
```
>**Note**: Note: At the moment, Maestro does not support real iOS devices

Test suites are located in flow.yaml in the project root.

### Start the app and test using Maestro
* Run npm start in the react native app source directory
* Select either Android or iOS Simulator
* In another terminal, run ```maestro test flow.yaml```
* When the Expo app launches, select the app that you’re testing
* Now you can watch how the tests are running
