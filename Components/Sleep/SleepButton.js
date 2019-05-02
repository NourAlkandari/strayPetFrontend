// React Libraries and Native Base
import React, { Component } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Thumbnail, Toast } from "native-base";
import * as Animatable from "react-native-animatable";

//Stores
import PetStore from "../../Store/PetStore";

class SleepButton extends Component {
  state = {
    showToast: false
  };
  handleViewRef = ref => (this.view = ref);

  bounce = () =>
    this.view
      .bounce(800)
      .then(endState =>
        console.log(endState.finished ? "bounce finished" : "bounce cancelled")
      );

  handlePress = () => {
    PetStore.putDogtoBed(this.props.sleep);
    this.bounce();
  };
  render() {
    return (
      <>
        {/* <View style={styles.menuItem}>
          <TouchableOpacity onPress={this.handlePress}>
            <Thumbnail source={this.props.itemImage} style={styles.image} />
          </TouchableOpacity>
        </View> */}
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animatable.View ref={this.handleViewRef}>
            <Thumbnail source={this.props.itemImage} style={styles.image} />
          </Animatable.View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

export default SleepButton;

const styles = StyleSheet.create({
  menuItem: {
    // width: "40%",
    // height: "60%",

    padding: 20
  },

  image: {
    width: 80,
    height: 80,
    marginRight: 25,
    marginLeft: 25,
    opacity: 0.8,
    borderColor: "#fff"
    // borderWidth: 3
  }
});
