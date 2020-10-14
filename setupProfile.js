import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';
import ButtonRectangle from './buttonRectangle.js'

export default class SetupProfile extends Component{

    constructor(){
        super();
        this.state = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                webLink: '',
                // storedFirstName: this.getFirstName()? this.getFirstName() : '',
        }
    }

//    saveProfile = () => {
//        if(this.state.firstName){
//         AsyncStorage.setItem('firstName', this.state.firstName)
//         // this.setState({firstName: })
//         //console.log('First Name saved');
//        }
       
//    }

   multiSet = async () => {
    //    const user = {
    //     firstName: this.state.firstName,
    //     lastName: this.state.lastName,
    //     email: this.state.email,
    //     phone: this.state.phone,
    //     webLink: this.state.webLink,
    //    }
    const firstName = ["firstName", this.state.firstName]
    const lastName = ["lastName", this.state.lastName]
    const email = ["email", this.state.email]
    const phone = ["phone", this.state.phone]
    const webLink = ["webLink", this.state.webLink]

    try {
      await AsyncStorage.multiSet([firstName, lastName, email, phone, webLink])
    } catch(e) {
      //save error
    }
  
    console.log("Done.")
  }

//    getFirstName = () =>{
//         AsyncStorage.mul('firstName')
//        .then(value => this.setState({firstName: value}))     
//    }


getMultiple = async () => {

    let values
    try {
      values = await AsyncStorage.multiGet(["firstName", "lastName", "email", "phone", "webLink"])
    } catch(e) {
      // read error
    }
    console.log(values)
  
    // example console.log output:
    // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
  }
    render(){
        return(
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome {this.state.firstName}</Text>
            <TextInput 
                placeholder="First Name"
                value={this.state.firstName}
                onChangeText={data => this.setState({ firstName: data })}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Last name"
                value={this.state.lastName}
                onChangeText={data => this.setState({ lastName: data })}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Email"
                value={this.state.email}
                onChangeText={data => this.setState({ email: data })}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Phone"
                value={this.state.phone}
                onChangeText={data => this.setState({ phone: data })}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Web Link"
                value={this.state.webLink}
                onChangeText={data => this.setState({ webLink: data })}
                style={styles.textInput}
            />

            <ButtonRectangle     
                onPress={this.multiSet}
                name="Save Profile" 
            />
            <ButtonRectangle     
                onPress={this.getMultiple}
                name="Get Profile" 
            />
            </ScrollView>
            
        )
    }
}

const styles = new StyleSheet.create({
    textInput: {
    width: 200,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#fff",
    }
})

