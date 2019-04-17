import React, { Component } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import FoodButtons from "./FoodButtons";

class PetRoom extends Component {
  // static navigationOptions = { header: null };

  render() {
    return (
      <ImageBackground
        source={require("../assets/backgroundnew.png")}
        style={styles.stylee}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.menuContainer}>
            <FoodButtons itemImage={require("../assets/choco.png")} />
            <FoodButtons itemImage={require("../assets/meat.png")} />
            <FoodButtons itemImage={require("../assets/water.png")} />
            <FoodButtons itemImage={require("../assets/toy3.png")} />
            <FoodButtons itemImage={require("../assets/toy1.png")} />
            <FoodButtons itemImage={require("../assets/toy2.png")} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default PetRoom;
const styles = StyleSheet.create({
  stylee: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 1
    // backgroundColor: "rgba(255, 234, 234, 0.4)"
  },

  menuContainer: {
    height: "50%",

    flexDirection: "row",
    flexWrap: "wrap"
  }
});
