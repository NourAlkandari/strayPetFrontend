import React, { Component } from "react";

import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  ActivityIndicator,
  Image
} from "react-native";
import FoodButtons from "./FoodButtons";
import LogoutButton from "./LogoutButton";
import { Constants } from "expo";

//react native and base

import TypeWriter from "react-native-typewriter";

//Stores

import authStore from "../Store/authStore";

import Bars from "./Bars";
import petStore from "../Store/PetStore";
import { observer } from "mobx-react";



//Components

import Collapser from "./Collapser";
import Collapser2 from "./Collapser2";
import { Spinner } from "native-base";

class PetRoom extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: null
  };
  componentDidMount() {
    petStore.fetch();
  }


  render() {
    if (!authStore.user) {
      this.props.navigation.replace("Login");
    }

//     if (!petStore.petState) {
//       return <ActivityIndicator size="small" color="#00ff00" />;

    if (petStore.loading) {
      return <Spinner />;

    }
    return (
      <>
        <Text>{petStore.petState.state.hunger}</Text>
        <ImageBackground
          source={require("../assets/backy.png")}
          style={styles.stylee}
        >
          <TypeWriter
            // typing={1}
            style={{ fontSize: 30, fontFamily: "Noteworthy-Bold" }}
            // onTypingEnd={this.props.onTypingEnd}

            typing={1}
            maxDelay={50}
            onTyped={this.props.onTyped}
            onTypingEnd={this.props.onTypingEnd}
          >
            trying the typewriter
          </TypeWriter>
          <View style={styles.container3}>
            <View style={styles.iconRow}>
              <Collapser />
              <Collapser2 />
            </View>
          </View>

        </View>
        <Bars states={petStore.petState.state.hunger} name="Hunger" />
        <Bars states={petStore.petState.state.bladder} name="Bladder" />
        <Bars states={petStore.petState.state.fun} name="Fun" />
        <Image source={require("../assets/giphy.gif")} />
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
  },
  container3: {
    flex: 3,
    flexDirection: "column",
    padding: 5,
    paddingTop: 20
  },
  iconRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20
  }
});
