import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

class PetRoom extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/petbackground.png")}
        style={styles.stylee}
      />
    );
  }
}
export default PetRoom;
const styles = StyleSheet.create({
  stylee: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
