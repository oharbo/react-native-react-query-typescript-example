import React from 'react';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import VehicleListScreen from './src/screens/VehicleListScreen';
import {screenNames} from './src/constants/screenNames';

const Stack = createNativeStackNavigator();

function App(): React.ReactElement | null {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.vehicleListScreen}
          component={VehicleListScreen}
        />
        <Stack.Screen
          name={screenNames.vehicleDetailScreen}
          component={VehicleListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
