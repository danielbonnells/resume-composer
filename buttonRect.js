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
    //    console.log('Got First Name')

       
   }

   getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
    }
  
    console.log(keys)
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  }

    render(){
        return(
            <View>
                <TextInput
                    placeholder="Enter name"
                    value={this.state.textInputFirstName}
                    onChangeText={data => this.setState({ textInputFirstName: data })}
                />

            <TouchableOpacity
                    style={[styles.buttonRect, this.props.primary && styles.primary, this.props.secondary && styles.secondary]} 
                    onPress={this.saveFirstName}
                >
                <Text>Save Name</Text>
            </TouchableOpacity>

            <TouchableOpacity
                    style={[styles.buttonRect, this.props.primary && styles.primary, this.props.secondary && styles.secondary]} 
                    onPress={this.getFirstName}
                >
                <Text>Get Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={[styles.buttonRect, this.props.primary && styles.primary, this.props.secondary && styles.secondary]} 
                    onPress={this.getAllKeys}
                >
                <Text>Get All Keys</Text>
            </TouchableOpacity>
            <Text>{this.state.storedFirstName}</Text>
            </View>
            
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