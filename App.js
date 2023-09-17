//   <Image source={require('./images/logo.jpg')} style={{height: '100%', width: 'auto',resizeMode:"cover"}}/> 
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainPage from './screens/MainPage';
import Dashboard from './Dashborad';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainPage' screenOptions={{headerShown: false}}>
        <Stack.Screen name='MainPage' component={MainPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name='Dashborad' component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;