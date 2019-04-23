import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  ActivityIndicator
} from "react-native";
import FoodButtons from "./FoodButtons";
import LogoutButton from "./LogoutButton";
import { Constants } from "expo";
import authStore from "../Store/authStore";
import Bars from "./Bars";
import petStore from "../Store/PetStore";
import { observer } from "mobx-react";

class PetRoom extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: null
  };
  componentDidMount() {
    petStore.fetch();
  }

  // choose =()=>{

  // }

  render() {
    if (!authStore.user) {
      this.props.navigation.replace("Login");
    }
    if (!petStore.petState) {
      return <ActivityIndicator size="small" color="#00ff00" />;
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
        <Bars states={petStore.petState.state.hunger} name="Hunger" />
        <Bars states={petStore.petState.state.bladder} name="Bladder" />
        <Bars states={petStore.petState.state.fun} name="Fun" />
        <Image source={require("../assets/giphy.gif")} />
      </ImageBackground>
    );
  }
}
export default observer(PetRoom);
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
