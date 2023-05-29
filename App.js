import * as React from 'react';

//theme library
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

//default color
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    primaryContainer: 'lightgreen',
    secondaryContainer: 'lightgreen',
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

import ReportListScreen from './screen/report/ReportListScreen';
import ReportTableScreen from './screen/report/ReportTableScreen';
import ReportChartScreen from './screen/report/ReportChartScreen';

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

            <Stack.Screen name="ReportListScreen" component={ReportListScreen} />
            <Stack.Screen name="ReportTableScreen" component={ReportTableScreen} />
            <Stack.Screen name="ReportChartScreen" component={ReportChartScreen} />
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
      <Tab.Screen 
        name="ReportTab" 
        component={ReportListScreen}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file" color={color} size={26} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
