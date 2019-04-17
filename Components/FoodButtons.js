import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";

class FoodButtons extends Component {
  render() {
    return (
      <>
        <View style={styles.menuItem}>
          <Image source={this.props.itemImage} style={styles.image} />
        </View>
      </>
    );
  }
}

export default FoodButtons;
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
