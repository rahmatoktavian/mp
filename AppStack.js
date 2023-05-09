import * as React from 'react';

//theme library
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

//default color
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'black',
  },
};

//stack nav library
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//calling screen
import HomeScreen from './screen_nav/HomeScreen';
import ProfileScreen from './screen_nav/ProfileScreen';

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator>
    	  </NavigationContainer>
      </PaperProvider>
  )
}
