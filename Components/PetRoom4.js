//React libraries and native base
import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";
import { observer } from "mobx-react";
import { Spinner, Left } from "native-base";

//Components
import VetCollapse from "../Components/Vet/VetCollapse";
import LogoutButton from "./LogoutButton";
import VetButton from "./Vet/VetButton";
import AnimatedMsgs from "./AnimatedMsgs";

//Stores
import authStore from "../Store/authStore";
import petStore from "../Store/PetStore";

class PetRoom4 extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />,
    headerLeft: <VetButton />,
    headerStyle: {
      backgroundColor: "transparent"
    }
  };
  state = { status: false };
  componentDidMount() {
    petStore.fetch();
  }

  _displayPet = () => {
    if (petStore.pet.state.sleep != 100) {
      return (
        <Image
          source={require("..//assets/sick-doggo.gif")}
          style={{ width: "100%", height: "100%" }}
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
          source={require("../assets/petvet.png")}
          style={styles.stylee}
        >
          <VetCollapse />
          <Left>
            <AnimatedMsgs
              msg={`Looks like poor ${petStore.pet.name} \n is sick.`}
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
export default observer(PetRoom4);

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
