import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { Font, AppLoading } from "expo";

// const Chewy = require("./assets/fonts/Chewy-Regular.ttf");

class App extends React.Component {
  state = {
    isLoading: true
    // Dinosaur: null,
    // modalVisible: false,
    // errorMessage: "",
    // currentAction: "normalState"
  };

  render() {
    /* Waits for font to load before showing the home screen */
    // if (this.state.isLoading) {
    //   return (
    //     <AppLoading
    //       startAsync={() => Font.loadAsync({ Chewy })}
    //       onFinish={() => this.setState({ isLoading: false })}
    //     />
    //   );
    // }

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
