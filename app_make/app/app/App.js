import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';
import ResultScreen from './screens/ResultScreen';
import FlowChartScreen from './screens/FlowChartScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="FlowChart" component={FlowChartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 