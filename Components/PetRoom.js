import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import SpeechBubble from "react-native-speech-bubble";

class PetRoom extends React.Component {
  render() {
    return (
      <>
        <SpeechBubble speeches={["String 1", "String 2", "String 3"]} />
        <ImageBackground
          source={require("../assets/petbackground.png")}
          style={styles.stylee}
        />
      </>
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
