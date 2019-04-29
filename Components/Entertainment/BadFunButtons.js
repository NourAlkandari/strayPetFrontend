// React Libraries and Native Base
import React, { Component } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Thumbnail, Toast } from "native-base";
import * as Animatable from "react-native-animatable";

//Stores
import PetStore from "../../Store/PetStore";

class BadFunButtons extends Component {
  state = {
    showToast: false
  };
  handleViewRef = ref => (this.view = ref);

  bounce = () =>
    this.view
      .bounce(800)
      .then(endState =>
        console.log(endState.finished ? "bounce finished" : "bounce cancelled")
      );

  handlePress = () => {
    PetStore.dogEntertain(this.props.Entertaintype);
    this.setState({ showToast: true });
    Toast.show({
      text:
        "oops, that’s not a good idea. chocolate and cocoa products can kill your dog. Try to pick something more suitable. ",
      textStyle: { color: "black", fontSize: 30 },
      buttonText: "Okay",
      duration: 6000,
      position: "top",
      type: "danger",
      buttonTextStyle: { color: "black" },
      buttonStyle: { backgroundColor: "#fff" }
    });
    this.bounce();
  };
  render() {
    return (
      <>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animatable.View ref={this.handleViewRef}>
            <Thumbnail source={this.props.itemImage} style={styles.image} />
          </Animatable.View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

export default BadFunButtons;
const styles = StyleSheet.create({
  menuItem: {
    // width: "40%",
    // height: "60%",

    padding: 20
  },

  image: {
    // width: 80,
    // height: 80,
    marginLeft: 25,
    marginRight: 25,
    opacity: 0.8,
    borderColor: "#fff"
    // borderWidth: 3
  }
});
