import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import observer from "mobx-react";
import PetStore from "../Store/PetStore";

class FoodButtons extends Component {
  handlepress = () => {
    PetStore.dogFeed(this.props.foodtype);
  };
  render() {
    return (
      <>
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={this.handlepress}>
            <Image source={this.props.itemImage} style={styles.image} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default observer(FoodButtons);

const styles = StyleSheet.create({
  menuItem: {
    width: "33.333333%",
    height: "50%",
    padding: 20
  },

  image: {
    width: "100%",
    height: "50%",
    opacity: 0.8,
    borderColor: "#fff",
    borderWidth: 3
  }
});
