import SpeechBubble from "react-native-speech-bubble";
// import TypeWriter from "react-native-typewriter";
import React, { Component } from "react";

class Bubble extends Component {
  render() {
    return (
      <SpeechBubble
        speeches={[
          "You just found a dog!",
          "What would you like to call it?",
          "How cute!"
        ]}
      />
    );
  }
}

export default Bubble;
