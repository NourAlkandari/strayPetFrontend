import { createStackNavigator } from "react-navigation";
import Register from "../Components/Register";
import FindingPuppy from "../Components/FindingPuppy";
import NamingPuppy from "../Components/NamingPuppy";

const RegistrationStack = createStackNavigator(
  {
    Register: Register,
    FindingPuppy: FindingPuppy,
    NamingPuppy: NamingPuppy
  },
  {
    defaultNavigationOptions: {
      title: "Finding Puppy",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "#ffeaea"
      }
    }
  },

  {
    cardStyle: {
      backgroundColor: "#ffeaea"
    }
  }
);

export default RegistrationStack;
