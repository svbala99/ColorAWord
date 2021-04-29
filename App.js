/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorList from './src/screens/ColorList';
import Search from './src/screens/Search';
import Splash from './src/screens/Splash';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator>
        {/* Splash screen */}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        {/* Search screen */}
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        {/* ColorList screen */}
        <Stack.Screen
          name="ColorList"
          component={ColorList}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
