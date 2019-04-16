// import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// Components
import Home from "../Components/Home";
import PetRoom from "../Components/PetRoom";

const StackNav = createStackNavigator(
  {
    Home: Home,
    PetRoom: PetRoom
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#ffeaea"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "#ffeaea"
    }
  }
);

const AppContainer = createAppContainer(StackNav);
export default AppContainer;
