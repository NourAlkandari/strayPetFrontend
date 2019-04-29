//React libraries and native base
import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";
import { observer } from "mobx-react";
import { Spinner, Left } from "native-base";

//Components
import FeedCollapser from "./FeedCollapser";
import FunCollapser from "./FunCollapser";
import FeedCollapse from "./FeedCollapse";
import LogoutButton from "./LogoutButton";
import Bars from "./Bars";
import AnimatedMsgs from "./AnimatedMsgs";

//Stores
import authStore from "../Store/authStore";
import petStore from "../Store/PetStore";

class PetRoom extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: null
  };
  state = { status: false };
  componentDidMount() {
    petStore.fetch();
  }
  _displayPet = () => {
    if (petStore.pet.state.hunger < 30) {
      return (
        <Image
          source={require("../assets/sad-doggo.gif")}
          style={{ width: "100%", height: "100%" }}
        />
      );
    } else if (
      petStore.pet.state.hunger >= 30 &&
      petStore.pet.state.hunger < 70
    ) {
      return (
        <Image
          source={require("../assets/hungry-doggo.gif")}
          style={{ width: "120%", height: "120%" }}
        />
      );
    } else {
      return (
        <Image
          source={require("../assets/happy-doggo.gif")}
          style={{ width: "100%", height: "100%" }}
        />
      );
    }
  };
  _msgdesappeared = status => {
    if (status) this.setState({ status: status });
  };

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
          <FeedCollapse />
          <Left>
            <Bars states={petStore.pet.state.hunger} name="Hunger" />
            <AnimatedMsgs
              msg={`Look like ${
                petStore.pet.name
              }  is hugry \n it was abonded and \ndidn't eat well \n feed it something healthy`}
              s={{ fontSize: 25, fontFamily: "Noteworthy-Bold" }}
              time="9500"
              delay={0}
              anime="bounceInDown"
            />
            <View style={styles.iconRow}>{this._displayPet()}</View>
            {/* </View> */}
          </Left>

          {/* <FeedCollapser /> */}
          {/* <FunCollapser /> */}

          {/* <AnimatedMsgs
            msg={`look at Feed Me Button \n you have three type of food \n feed me something healthy`}
            s={{ fontSize: 25, fontFamily: "Noteworthy-Bold" }}
            delay={20000}
            time="9500"
            anime="fadeInUp"
          /> */}

          {/* <View style={styles.container3}> */}
          {/* <Bars states={petStore.pet.state.fun} name="Fun" /> */}
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
