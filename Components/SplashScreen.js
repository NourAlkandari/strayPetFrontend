//react
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground
} from "react-native";
import TypeWriter from "react-native-typewriter";

//Components
import Button from "./button";

//Stores
import authStore from "../Store/authStore";
import soundStore from "../Store/soundStore";

class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    authStore.checkForUser();
  }

  handlePress = () => {
    if (!authStore.user) {
      this.props.navigation.replace("Login");
    } else {
      this.props.navigation.replace("TapsView");
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/new-bg3.jpg")}
        style={styles.stylee}
      >
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
          <Image
            source={require("../assets/test2.gif")}
            style={{ width: "50%", height: "50%", backgroundColor: "rgba" }}
          />

          <Button
            onPress={this.handlePress}
            title="Play"
            backgroundStyle={styles.buttonBackground}
            textStyle={styles.buttonText}
          />
        </View>
      </ImageBackground>
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
  stylee: {
    flex: 1,
    width: "100%",
    height: "100%"
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
