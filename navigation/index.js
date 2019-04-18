// import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// Components
import Home from "../Components/Home";
import PetRoom from "../Components/PetRoom";
import SplashScreen from "../Components/Bubble";
import Login from "../Components/Login";

const StackNav = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    Home: Home,
    PetRoom: PetRoom,
    Login: Login
  },
  {
    initialRouteName: "SplashScreen",
    defaultNavigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "#ffeaea"
      }
      // headerTitleStyle: {
      //   fontWeight: "bold"
      // }
    },
    cardStyle: {
      backgroundColor: "#ffeaea"
    }
  }
);

const AppContainer = createAppContainer(StackNav);
export default AppContainer;
