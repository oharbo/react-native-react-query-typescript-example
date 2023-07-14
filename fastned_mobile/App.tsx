import React from 'react';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {
  ScreenNames,
  ScreenTitleName,
} from './src/constants/screenNamesConstants';
import VehicleListScreen from './src/screens/VehicleListScreen';
import VehicleDetailScreen from './src/screens/VehicleDetailScreen';
import {STALE_TIME} from './src/constants/apiConstants';

const Stack = createNativeStackNavigator();
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
    },
  },
});

function App(): React.ReactElement {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name={ScreenNames.vehicleListScreen}
            component={VehicleListScreen}
            options={{title: ScreenTitleName.vehicleListScreen}}
          />
          <Stack.Screen
            name={ScreenNames.vehicleDetailScreen}
            component={VehicleDetailScreen}
            options={{title: ScreenTitleName.vehicleDetailScreen}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
