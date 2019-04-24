// React Navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

// Components

import PetRoom from "../Components/PetRoom";
import SplashScreen from "../Components/SplashScreen";
import Login from "../Components/Login";
import Logout from "../Components/LogoutButton";
import FindingPuppy from "../Components/FindingPuppy";
import Register from "../Components/Register";

const StackNav = createStackNavigator(
  {
    SplashScreen: SplashScreen,

    PetRoom: PetRoom,
    Login: Login,
    Register: Register,
    Logout: Logout,
    Message: FindingPuppy
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
