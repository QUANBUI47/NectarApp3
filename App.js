import 'react-native-gesture-handler'; // Add this at the very top
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectLocationScreen from './screens/SelectLocationScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectLocation">
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} options={{ title: 'select location' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'log in' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'sign up' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}