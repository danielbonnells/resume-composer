import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';
import  ButtonRect   from './buttonRect'
import { AsyncStorage } from 'react-native';
import TextName from './textName'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome Back <TextName /></Text>
      <Text>Home Screen</Text>
      <ButtonRect name="Submit"></ButtonRect>
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  random: {
    margin: '50px'
  }
});

export default App;