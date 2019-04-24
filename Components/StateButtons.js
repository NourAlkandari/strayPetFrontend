// React Libraries and Native Base
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Thumbnail } from "native-base";

//Stores
import PetStore from "../Store/PetStore";

class StateButtons extends Component {
  handlepress = () => {
    PetStore.dogFeed(this.props.foodtype);
  };
  render() {
    return (
      <>
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={this.handlepress}>
            <Thumbnail source={this.props.itemImage} style={styles.image} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default StateButtons;
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
