import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';



function ButtonRectangle(props){
    return(
        <TouchableOpacity
                    style={[styles.buttonRect, props.primary && styles.primary, props.secondary && styles.secondary]} 
                    onPress={props.onPress}
                >
                <Text>{props.name}</Text>
     </TouchableOpacity>
        );
}


const styles = StyleSheet.create({
    buttonRect: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ccffff',
      height: 50,
      width: 200,
      marginTop: 10,
      borderRadius: 5,
      color: "#ccc"
    },
    primary:{
      backgroundColor: 'red',
    },
    secondary: {
      backgroundColor: 'pink',
    }
  });

  export default ButtonRectangle;