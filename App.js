import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';
import  ButtonRect   from './buttonRect'
import { AsyncStorage } from 'react-native';
import TextName from './textName'


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome Back <TextName /></Text>
      <ButtonRect name="Submit"></ButtonRect>
      <StatusBar style="auto" />
    </SafeAreaView>
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
