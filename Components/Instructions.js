import React, { Component } from "react";
import petStore from "../Store/PetStore";
import * as Animatable from "react-native-animatable";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Text } from "native-base";

class Instructions extends Component {
  handlePress = () => this.props.navigation.navigate("PetRoom");
  handleViewRef = ref => (this.view = ref);

  bounce = () =>
    this.view
      .bounce(800)
      .then(endState =>
        console.log(endState.finished ? "bounce finished" : "bounce cancelled")
      );

  render() {
    return (
      <>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animatable.View ref={this.handleViewRef}>
            <Text>Bounce me!</Text>
          </Animatable.View>
        </TouchableWithoutFeedback>
        <TouchableOpacity>
          <Animatable.View
            useNativeDriver
            animation="fadeInDown"
            duration="2000"
          >
            <Text style={styles.text}>
              {`Congratulations on adopting this lonely stray dog! \n ${
                petStore.pet.name
              } needs your care and attention to grow up healthy and happy!`}
            </Text>
            <Text style={styles.text}>
              It is now your responsibility to make sure your pet meets all
              their needs.
            </Text>

            <Text style={styles.text}>
              Don't worry though, we'll be giving you hints and tips if you get
              a little confused.
            </Text>
            <Text style={styles.text}>
              Becareful though, a pet is a big responsibility and so if you
              leave them for too long, your pet will be sad and it may even get
              ill.
            </Text>

            <Text style={styles.text}>
              Treat it with love and care, and your pet will love you forever.
            </Text>
          </Animatable.View>
        </TouchableOpacity>
      </>
    );
  }
}

export default Instructions;
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontFamily: "Noteworthy-Bold",
    padding: 10,
    borderRadius: 11,
    marginLeft: 30,
    marginRight: 30,
    minHeight: 80
  }
});
