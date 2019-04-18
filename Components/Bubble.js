import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import Button from "./button";

class SplashScreen extends Component {
  handlePress = () => {
    this.props.navigation.navigate("PetRoom");
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>hello</Text>

        <Button
          onPress={this.handlePress}
          title="Enter"
          backgroundStyle={styles.buttonBackground}
          textStyle={styles.buttonText}
        /> */}
      </View>
    );
  }
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "black"
  },
  instructions: {
    textAlign: "center",
    color: "black",
    marginBottom: 5
  },
  buttonBackground: {
    backgroundColor: "#d3cfcf",
    width: 90,
    marginLeft: 10
  },
  buttonText: {
    color: "black",
    fontSize: 30
  }
});
