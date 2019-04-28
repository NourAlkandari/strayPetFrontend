// React Libraries and Native Base
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Thumbnail, Toast } from "native-base";

//Stores
import PetStore from "../Store/PetStore";

class BadStateButtons extends Component {
  state = {
    showToast: false
  };
  handlePress = () => {
    PetStore.dogFeed(this.props.foodtype);
    this.setState({ showToast: true });
    Toast.show({
      text: "Oh! That's not Good",
      textStyle: { color: "black", fontSize: 30 },
      buttonText: "Okay",
      duration: 3000,
      position: "top",
      type: "danger",
      buttonTextStyle: { color: "black" },
      buttonStyle: { backgroundColor: "#fff" }
    });
  };
  render() {
    return (
      <>
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={this.handlePress}>
            <Thumbnail source={this.props.itemImage} style={styles.image} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default BadStateButtons;
const styles = StyleSheet.create({
  menuItem: {
    // width: "40%",
    // height: "60%",

    padding: 20
  },

  image: {
    // width: "100%",
    // height: "100%",
    opacity: 0.8,
    borderColor: "#fff"
    // borderWidth: 3
  }
});
