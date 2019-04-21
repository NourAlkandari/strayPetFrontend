import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";
import FoodButtons from "./FoodButtons";
import LogoutButton from "./LogoutButton";
import { Constants } from "expo";
import authStore from "../Store/authStore";

class PetRoom extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: null
  };

  // choose =()=>{

  // }

  render() {
    if (!authStore.user) {
      this.props.navigation.replace("Login");
    }
    return (
      <ImageBackground
        source={require("../assets/backy.png")}
        style={styles.stylee}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.menuContainer}>
            <FoodButtons
              itemImage={require("../assets/choco.png")}
              foodtype={"Chocolate"}
            />
            <FoodButtons itemImage={require("../assets/meat.png")} />
            <FoodButtons itemImage={require("../assets/water.png")} />
            {/* <FoodButtons itemImage={require("../assets/toy3.png")} foodtype={}/>
            <FoodButtons itemImage={require("../assets/toy1.png")} foodtype={}/>
            <FoodButtons itemImage={require("../assets/toy2.png")} foodtype={}/> */}
          </View>
        </View>
        <Image source={require("../assets/giphy.gif")} />
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
