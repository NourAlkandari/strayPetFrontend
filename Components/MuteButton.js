// React Libraries and Native Base
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Icon, View, Text, Right } from "native-base";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react";

//stores
import soundStore from "../Store/soundStore";

class MuteButton extends Component {
  state = { button: false };
  handleSound = () => {
    if (this.state.button) {
      soundStore.playing();
      this.setState({ button: !this.state.button });
    } else {
      soundStore.stopSound();
      this.setState({ button: !this.state.button });
    }
  };
  render() {
    return (
      <Right>
        <View style={styles.storyCounters}>
          <Icon
            type="Octicons"
            name="unmute"
            style={{ color: "Black", fontSize: 25, marginLeft: 10 }}
            onPress={this.handleSound}
          />
        </View>
      </Right>
    );
  }
}

export default withNavigation(observer(MuteButton));
const styles = StyleSheet.create({
  storyCounters: {
    flexDirection: "row"
  },

  iconCounter: {
    flex: 1,
    flexDirection: "column",
    fontSize: 21,
    color: "#bbbbbb",
    marginLeft: 70
  },

  iconCounterText: {
    color: "black",
    fontSize: 12,
    marginRight: 17
  }
});
