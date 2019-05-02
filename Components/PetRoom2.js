//React libraries and native base
import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";
import { observer } from "mobx-react";
import { Spinner, Left } from "native-base";

//Components
import FunCollapser from "../Components/Entertainment/FunCollapser";
import LogoutButton from "./LogoutButton";
import AnimatedMsgs from "./AnimatedMsgs";
import B2FeedButton from "./Feeding/B2FeedButton";

//Stores
import authStore from "../Store/authStore";
import petStore from "../Store/PetStore";

class PetRoom extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: <B2FeedButton />,
    headerStyle: {
      backgroundColor: "transparent"
    }
  };
  state = { status: false };
  componentDidMount() {
    petStore.fetch();
  }
  _displayPet = () => {
    if (petStore.pet.state.fun < 30) {
      return (
        <Image
          source={require("../assets/test2.gif")}
          style={{ width: "100%", height: "100%" }}
        />
      );
      // } else if (petStore.pet.state.fun >= 30 && petStore.pet.state.fun < 70) {
      //   return (
      //     <Image
      //       source={require("../assets/sleeping-doggo.gif")}
      //       style={{ width: "120%", height: "120%" }}
      //     />
      //   );
    } else {
      return (
        <Image
          source={require("../assets/doggo-playing.gif")}
          style={{ width: "130%", height: "100%" }}
        />
      );
    }
  };
  _msgdesappeared = status => {
    if (status) this.setState({ status: status });
  };

  render() {
    // console.log("CHECK CHECK", authStore.user);
    if (!authStore.user) {
      this.props.navigation.replace("Login");
    }

    if (petStore.loading) {
      return <Spinner />;
    }

    return (
      <>
        <ImageBackground
          source={require("../assets/newbg2.jpg")}
          style={styles.stylee}
        >
          <FunCollapser />
          <Left>
            <AnimatedMsgs
              msg={` ${petStore.pet.name} looks bored! \n Let's play!`}
              s={{ fontSize: 25, fontFamily: "Noteworthy-Bold" }}
              time="9500"
              delay={0}
              anime="bounceInDown"
            />
            <View style={styles.iconRow}>{this._displayPet()}</View>
          </Left>
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
