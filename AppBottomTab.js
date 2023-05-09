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

//bottomtab nav library
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

//bottomtab icon
import { MaterialCommunityIcons } from '@expo/vector-icons';

//calling screen
import HomeScreen from './screen_nav/HomeScreen';
import NotifScreen from './screen_nav/NotifScreen';
import SettingScreen from './screen_nav/SettingScreen';
import ProfileScreen from './screen_nav/ProfileScreen';

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeTab" component={HomeTab} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator>
    	  </NavigationContainer>
      </PaperProvider>
  )
}

//bottomtab appear in homescreen
function HomeTab() {
  return (
    <Tab.Navigator
      activeColor="green"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name="NotifScreen" 
        component={NotifScreen}
        options={{
          tabBarLabel: 'Notif',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name="SettingScreen" 
        component={SettingScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
