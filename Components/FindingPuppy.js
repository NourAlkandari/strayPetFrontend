//React libraries and native base
import React, { Component } from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import { Button, Text, Toast } from "native-base";
import * as Animatable from "react-native-animatable";
import TypeWriter from "react-native-typewriter";
import { observer } from "mobx-react";

//Components

import LogoutButton from "./LogoutButton";
import AnimatedMsgs from "./AnimatedMsgs";
import soundStore from "../Store/soundStore";
import authStore from "../Store/authStore";

class FindingPuppy extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    name: ""
  };
  componentDidMount() {
    soundStore.playSadDog();
  }
  handlePressOk = () => {
    this.props.navigation.replace("NamingPuppy");
    soundStore.playSounds();
  };
  handleLogout = () => {
    const navigation = this.props.navigation;
    authStore.logout(navigation);
  };
  handlePressNo = () => {
    Toast.show({
      text: "It's ok! We will take it to the shelter. ",
      textStyle: { color: "black", fontSize: 30 },
      buttonText: "Okay",
      duration: 3000,
      position: "top",
      type: "danger",
      buttonTextStyle: { color: "black" },
      buttonStyle: { backgroundColor: "#fff" }
    });
    this.handleLogout();
  };
  render() {
    return (
      <>
        <ImageBackground
          source={require("../assets/sad-bg.jpg")}
          style={styles.stylee}
        >
          {/* <AnimatedMsgs
            msg={
              "Poor puppy! \n Looks like someone abonded it..\n The poor dogy needs some care.. \n Would you like to take care of it?"
            }
            s={{ fontSize: 30, fontFamily: "Noteworthy-Bold" }}
          /> */}
          <View style={styles.textContainer}>
            <TypeWriter
              style={{
                fontSize: 30,
                fontFamily: "Noteworthy-Bold",
                marginTop: 30
              }}
              typing={1}
              maxDelay={200}
            >
              {
                "Oh no! Poor pupper!\n Looks like it has been abandoned! \n Do you want to help?"
              }
            </TypeWriter>
          </View>
          <Animatable.View style={styles.view} animation="zoomIn" delay="10000">
            <Button
              block
              light
              onPress={this.handlePressOk}
              style={{ marginBottom: 10, marginTop: 10 }}
            >
              <Text style={{ fontSize: 20, fontFamily: "Noteworthy-Bold" }}>
                Of course! Can't let the doggo suffer
              </Text>
            </Button>

            <Button block light onPress={this.handlePressNo}>
              <Text style={{ fontSize: 20, fontFamily: "Noteworthy-Bold" }}>
                I don't think I'm ready yet!
              </Text>
            </Button>
          </Animatable.View>
          <Image
            source={require("../assets/bw-sad-doggo.gif")}
            style={{ flex: 1, width: undefined, height: undefined }}
            resizeMode="contain"
          />
        </ImageBackground>
      </>
    );
  }
}
export default observer(FindingPuppy);

const styles = StyleSheet.create({
  stylee: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  message: {
    marginTop: 20
  },
  image: {
    alignSelf: "center"
  },
  textContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 11,
    marginLeft: 30,
    marginRight: 30,
    minHeight: 80
  },
  text: {
    fontFamily: "Noteworthy-Bold",
    fontSize: 30
  },
  input: {
    color: "black",
    fontSize: 30,
    margin: 10,
    textAlign: "center"
  },
  buttonBackground: {
    // backgroundColor: "#d3cfcf",
    backgroundColor: "rgb(220,220,220)",
    width: 90,
    marginLeft: 10
  },
  buttonText: {
    color: "black",
    fontSize: 30
  },
  view: {
    width: "100%",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    padding: 10,
    borderRadius: 11,
    marginLeft: 30,
    marginRight: 30,
    minHeight: 80
  }
});
