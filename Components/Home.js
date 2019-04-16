import React, { Component } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import Button from "./button";
import colors from "./colors";

const style = StyleSheet.create({
  view: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffeaea"
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
  }
});

class Home extends Component {
  state = {
    text: ""
  };

  handleTextChange(text) {
    this.setState({
      text: text
    });
  }
  handlePress = name => {
    this.props.navigation.navigate("PetRoom", {
      name
    });
  };

  render() {
    return (
      <View style={style.view}>
        <Text style={style.input}>You found a really cute puppy</Text>
        <Text style={style.input}>He need a name and Care..</Text>
        <Text style={style.input}>
          First type the name and press "save" to take care of it
        </Text>
        <TextInput
          style={style.input}
          placeholder="TYPE NAME HERE"
          placeholderTextColor={style.input}
          onChangeText={text => this.handleTextChange(text)}
          value={this.state.text}
        />
        <Button
          //   onPress={() =>
          //     this.props.onSubmit(this.props.navigation.navigate("PetRoom"))
          //   }
          onPress={() => this.handlePress()}
          title="Save"
          backgroundStyle={style.buttonBackground}
          textStyle={style.buttonText}
        />
      </View>
    );
  }
}

export default Home;
