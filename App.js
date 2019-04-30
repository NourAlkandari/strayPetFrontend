import React from "react";
import { Root } from "native-base";
//Navigator
import AppContainer from "./navigation";
// import { Font, AppLoading } from "expo";

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}
export default App;
