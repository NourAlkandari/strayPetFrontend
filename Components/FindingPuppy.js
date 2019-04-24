//React libraries and native base
import React, { Component } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";
import TypeWriter from "react-native-typewriter";

//Components
import Button from "./button";

//Stores
import petStore from "../Store/PetStore";
import AnimatedMsgs from "./AnimatedMsgs";

class FindingPuppy extends Component {
  state = {
    name: ""
  };

  handlePress = () => {
    const navigation = this.props.navigation;
    petStore.nameDog(this.state, navigation);
  };
  render() {
    return (
      <>
        <AnimatedMsgs
          msg={
            "Poor puppy  \n Someone had abonded it ...\n Please take care of it.. \n but first give your puppy a name"
          }
        />

        <View style={styles.view}>
          <Image
            source={require("../assets/test2.gif")}
            style={{ width: "40%", height: "40%" }}
          />
          <TextInput
            style={styles.input}
            placeholder="TYPE NAME HERE"
            placeholderTextColor={styles.input}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <Button
            onPress={this.handlePress}
            title="Save"
            backgroundStyle={styles.buttonBackground}
            textStyle={styles.buttonText}
          />
        </View>
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
