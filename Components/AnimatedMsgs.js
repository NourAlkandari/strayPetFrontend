//React libraries and native base
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import TypeWriter from "react-native-typewriter";

class AnimatedMsgs extends Component {
  render() {
    console.log("duration", this.props.time);

    return (
      <>
        <Animatable.View
          // useNativeDriver
          style={styles.message}
          animation={this.props.anime}
          duration={this.props.time}
          delay={this.props.delay}
          onAnimationEnd={() => {
            if (this.props.msgnum === 1) this.props._newmsg(true);
          }}
        >
          <View style={styles.textContainer}>
            <TypeWriter style={this.props.s} typing={1} maxDelay={200}>
              {this.props.msg}
            </TypeWriter>
          </View>
        </Animatable.View>
      </>
    );
  }
}
export default AnimatedMsgs;

const styles = StyleSheet.create({
  message: {
    marginTop: 40
  },

  textContainer: {
    backgroundColor: "rgba(255,255,255, 0.9)",
    padding: 10,
    borderRadius: 11,
    marginLeft: 30,
    marginRight: 30,
    minHeight: 80
  }
});
