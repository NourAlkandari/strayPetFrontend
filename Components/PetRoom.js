//React libraries and native base
import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";
import { observer } from "mobx-react";
import { Spinner, Text, Icon } from "native-base";
import TypeWriter from "react-native-typewriter";

//Components
import FeedCollapser from "./FeedCollapser";
import FunCollapser from "./FunCollapser";
import LogoutButton from "./LogoutButton";
import Bars from "./Bars";

//Stores
import authStore from "../Store/authStore";
import petStore from "../Store/PetStore";

class PetRoom extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: null
  };

  componentDidMount() {
    petStore.fetch();
  }

  render() {
    console.log("CHECK CHECK", authStore.user);
    if (!authStore.user) {
      this.props.navigation.replace("Login");
    }

    // if (!petStore.petState) {
    //   return <ActivityIndicator size="small" color="#00ff00" />;
    // }

    if (petStore.loading) {
      return <Spinner />;
    }

    return (
      <>
        <ImageBackground
          source={require("../assets/backy.png")}
          style={styles.stylee}
        >
          <FeedCollapser />
          <FunCollapser />

          <View style={styles.container3}>
            <View style={styles.iconRow}>
              <Image
                source={require("../assets/test2.gif")}
                style={{ width: "80%", height: "80%" }}
              />
            </View>
          </View>
          <Bars states={petStore.petState.state.hunger} name="Hunger" />
          <Bars states={petStore.petState.state.fun} name="Fun" />
        </ImageBackground>
      </>
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
