// React Navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

// Components

import PetRoom from "../Components/PetRoom";
import SplashScreen from "../Components/SplashScreen";
import Login from "../Components/Login";
import Logout from "../Components/LogoutButton";
import Register from "../Components/Register";
import FindingPuppy from "../Components/FindingPuppy";
import NamingPuppy from "../Components/NamingPuppy";
import PetRoom2 from "../Components/PetRoom2";
import Scrolltest from "../Components/Scrolltest";
import TapsView from "../Components/TapsView";
import FoundThePuppy from "../Components/FoundThePuppy";

const StackNav = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    PetRoom: PetRoom,
    Login: Login,
    Register: Register,
    Message: FindingPuppy,
    FindingPuppy: FindingPuppy,
    NamingPuppy: NamingPuppy,
    PetRoom2: PetRoom2,
    Scrolltest: Scrolltest,
    TapsView: TapsView,
    FoundThePuppy: FoundThePuppy
  },
  {
    initialRouteName: "SplashScreen",
    defaultNavigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "transparent"
      }
      // headerTitleStyle: {
      //   fontWeight: "bold"
      // }
    }
    // cardStyle: {
    //  <Image>
    // }
  }
);

const AppContainer = createAppContainer(StackNav);
export default AppContainer;
