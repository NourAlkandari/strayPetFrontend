//React libraries and native base
import React, { Component } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";
import { Button, Text, Toast } from "native-base";
import * as Animatable from "react-native-animatable";

//Components

import LogoutButton from "./LogoutButton";
import AnimatedMsgs from "./AnimatedMsgs";

class FindingPuppy extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: null
  };

  state = {
    name: ""
  };

  handlePressOk = () => {
    this.props.navigation.navigate("NamingPuppy");
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
    this.props.navigation.navigate("SplashScreen");
  };
  render() {
    return (
      <>
        <AnimatedMsgs
          msg={
            "Poor puppy! \n Looks like someone abonded it..\n The poor dogy needs some care.. \n Would you like to take care of it?"
          }
          s={{ fontSize: 30, fontFamily: "Noteworthy-Bold" }}
        />
        {/* <AnimatedMsgs
        msg={
          "Poor puppy  \n Someone had abonded it ...\n Please take care of it.. \n but first give your puppy a name"
        }
        s={{ fontSize: 30, fontFamily: "Noteworthy-Bold" }}
      /> */}

        <Animatable.View style={styles.view} animation="zoomIn" delay="15000">
          <Button
            block
            light
            onPress={this.handlePressOk}
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <Text>Of course! Can't let the dogy suffer</Text>
          </Button>

          <Button block light onPress={this.handlePressNo}>
            <Text>I don't think I'm ready yet! </Text>
          </Button>
        </Animatable.View>
      </>
    );
  }
}
export default FindingPuppy;

const styles = StyleSheet.create({
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
    backgroundColor: "#d3cfcf",
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
  }
});
