import * as React from 'react';

//theme library
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

//default color
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    secondaryContainer: 'lightgreen',
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
import HomeScreen from './screen/HomeScreen';

import CatListScreen from './screen/category/CatListScreen';
import CatInsertScreen from './screen/category/CatInsertScreen';
import CatUpdateScreen from './screen/category/CatUpdateScreen';

import BookListScreen from './screen/book/BookListScreen';
import BookInsertScreen from './screen/book/BookInsertScreen';
import BookUpdateScreen from './screen/book/BookUpdateScreen';

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeTab" component={HomeTab} />
            <Stack.Screen name="CatListScreen" component={CatListScreen} />
            <Stack.Screen name="CatInsertScreen" component={CatInsertScreen} />
            <Stack.Screen name="CatUpdateScreen" component={CatUpdateScreen} />
            <Stack.Screen name="BookListScreen" component={BookListScreen} />
            <Stack.Screen name="BookInsertScreen" component={BookInsertScreen} />
            <Stack.Screen name="BookUpdateScreen" component={BookUpdateScreen} />
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name="CategoryTab" 
        component={CatListScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }} 
      />
      <Tab.Screen 
        name="BookTab" 
        component={BookListScreen}
        options={{
          tabBarLabel: 'Book',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
