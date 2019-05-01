//React libraries and native base
import React, { Component } from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import { Button, Text } from "native-base";
import * as Animatable from "react-native-animatable";
import TypeWriter from "react-native-typewriter";
import { observer } from "mobx-react";

//Components

import LogoutButton from "./LogoutButton";
import soundStore from "../Store/soundStore";
import petStore from "../Store/PetStore";

class FoundThePuppy extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: null
  };

  state = {
    name: ""
  };
  componentDidMount() {
    soundStore.playSadDog();
  }
  handlePressOk = () => {
    this.props.navigation.navigate("TapsView");
    soundStore.playSounds();
  };
  render() {
    return (
      <>
        <ImageBackground
          source={require("../assets/sad-bg.jpg")}
          style={styles.stylee}
        >
          <View style={styles.textContainer}>
            <TypeWriter
              style={{ fontSize: 30, fontFamily: "Noteworthy-Bold" }}
              typing={1}
              maxDelay={200}
            >
              {`last time You found a cute puppy abonded in this place\n You took it and name it ${
                petStore.pet.name
              } \n now you should continue care for ${petStore.pet.name}`}
            </TypeWriter>
          </View>
          <Animatable.View style={styles.view} animation="zoomIn" delay="15000">
            <Button
              block
              light
              onPress={this.handlePressOk}
              style={{ marginBottom: 10, marginTop: 10 }}
            >
              <Text>{`Continue`}</Text>
            </Button>
          </Animatable.View>
          <Image
            source={require("../assets/bw-sad-doggo.gif")}
            style={{ width: "40%", height: "40%" }}
          />
        </ImageBackground>
      </>
    );
  }
}
export default observer(FoundThePuppy);

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
