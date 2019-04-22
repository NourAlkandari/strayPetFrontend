import React, { Component } from "react";

//react native and base
import { StyleSheet, ImageBackground, Image, View } from "react-native";
import TypeWriter from "react-native-typewriter";

//Stores
import authStore from "../Store/authStore";

//Components
import LogoutButton from "./LogoutButton";
import Collapser from "./Collapser";
import Collapser2 from "./Collapser2";
import petStore from "../Store/PetStore";

class PetRoom extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: null
  };

  render() {
    if (!authStore.user) {
      this.props.navigation.replace("Login");
    }
    return (
      <>
        {petStore.quantity}
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

          <Image source={require("../assets/giphy.gif")} />
        </ImageBackground>
      </>
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
