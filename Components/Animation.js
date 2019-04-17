import React from "react";
import LottieView from "lottie-react-native";

export default class Animation extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require("../assets/animation/dog-icon.json")}
      />
    );
  }
}
