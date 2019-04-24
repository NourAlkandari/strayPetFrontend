//React libraries and native base
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import TypeWriter from "react-native-typewriter";

class AnimatedMsgs extends Component {
  render() {
    return (
      <>
        <Animatable.View
          useNativeDriver
          style={styles.message}
          animation="fadeInDown"
          duration="3000"
        >
          <View style={styles.textContainer}>
            <TypeWriter style={styles.text} typing={1} maxDelay={100}>
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
    marginTop: 20
  },

  textContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 11,
    marginLeft: 30,
    marginRight: 30,
    minHeight: 80
  },
  text: {
    fontFamily: "Noteworthy-Bold",
    fontSize: 30
  }
});
