//React libraries and native base
import React, { Component } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";

//Components
import Button from "./button";
import LogoutButton from "./LogoutButton";
import AnimatedMsgs from "./AnimatedMsgs";

//Stores
import petStore from "../Store/PetStore";

class NamingPuppy extends Component {
  static navigationOptions = {
    header: null
  };

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
            "Awesome! The world needs more people like you! \n First: Give your dog a name"
          }
          s={{ fontSize: 30, fontFamily: "Noteworthy-Bold" }}
        />

        <View style={styles.view}>
          <Image
            source={require("../assets/sad-doggo.gif")}
            style={{ width: "50%", height: "50%" }}
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
export default NamingPuppy;

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
