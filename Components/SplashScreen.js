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
            style={{
              width: "65%",
              height: "50%",
              backgroundColor: "rgba",
              marginTop: 70
            }}
          />

          <Button
            onPress={this.handlePress}
            title="PLAY"
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
    marginTop: 30,
    backgroundColor: "rgb(255,255,255)",
    width: 120,
    marginLeft: 10,

    borderWidth: 8,
    borderColor: "rgb(233,126,34)"
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Noteworthy-Bold"
  }
});
