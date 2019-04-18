import React, { Component } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import Button from "./button";

class Home extends Component {
  state = {
    name: ""
  };

  handlePress = () => {
    this.props.navigation.navigate("PetRoom", {
      name: this.state.name
    });
  };

  render() {
    return (
      <View style={style.view}>
        <Text style={style.input}>You found a really cute puppy</Text>
        <Text style={style.input}>He needs a name and Care..</Text>
        <Text style={style.input}>
          First type the name and press "save" to take care of it
        </Text>

        <TextInput
          style={style.input}
          placeholder="TYPE NAME HERE"
          placeholderTextColor={style.input}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <Button
          onPress={this.handlePress}
          title="Save"
          backgroundStyle={style.buttonBackground}
          textStyle={style.buttonText}
        />
      </View>
    );
  }
}

export default Home;

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
