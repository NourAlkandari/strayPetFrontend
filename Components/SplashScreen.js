//react
import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import TypeWriter from "react-native-typewriter";

//Components
import Button from "./button";

//Stores
import authStore from "../Store/authStore";

class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    authStore.checkForUser();
  }

  handlePress = () => {
    if (!authStore.user) {
      this.props.navigation.navigate("Login");
    } else {
      this.props.navigation.replace("PetRoom");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TypeWriter typing={1} style={styles.welcome}>
          Welcome to Stray Dog Game!
        </TypeWriter>
        {/* <Image
          source={require("../assets/Puppy.gif")}
        /> */}
        <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />

        <Button
          onPress={this.handlePress}
          title="Play"
          backgroundStyle={styles.buttonBackground}
          textStyle={styles.buttonText}
        />
        <Image
          source={require("../assets/test2.gif")}
          style={{ width: "50%", height: "50%", backgroundColor: "rgba" }}
        />
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
    fontFamily: "Noteworthy-Bold",
    fontSize: 30,
    textAlign: "center",
    margin: 50,
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
    fontSize: 30,
    fontFamily: "Noteworthy-Bold"
  }
});
