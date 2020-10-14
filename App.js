import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';
import  SetupProfile   from './setupProfile'
import { AsyncStorage } from 'react-native';
import TextName from './textName'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
      <Button
        title="Set Up Profile"
        onPress={() => navigation.navigate('SetupProfile')}
      />
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}
 
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{title: "Welcome"}} />
        <Stack.Screen 
        name="SetupProfile" 
        component={SetupProfile} 
        options={{title: "Profile"}}/>
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