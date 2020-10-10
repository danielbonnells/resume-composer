import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';

export default class ButtonRect extends Component{


    constructor(){
        super();
        this.state = {
            textInputFirstName: '',
            storedFirstName: '',
        }
    }

   saveFirstName = () => {
       if(this.state.textInputFirstName){
           AsyncStorage.setItem('firstName', this.state.textInputFirstName);
           this.setState({textInputFirstName: ''})
           //console.log('First Name saved');
       }else{
           console.log('Needs First Name')
       }
   }
   getFirstName = () =>{

        AsyncStorage.getItem('firstName')
       .then(value => this.setState({storedFirstName: value}))
        //console.log('Got First Name')

       
   }

    render(){
        return(
        
            <Text>{this.getFirstName()}</Text>
            
        )
    }
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