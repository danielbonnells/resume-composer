import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default class Switch extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    return (
        <View style={styles.container}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      );
}